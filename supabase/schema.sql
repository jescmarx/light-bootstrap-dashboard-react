create extension if not exists vector;

create table if not exists public.sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  base_url text not null,
  language text not null,
  category text not null,
  collection_method text not null,
  compliance_notes text not null,
  cadence text not null default 'weekly',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.research_items (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references public.sources(id),
  title text not null,
  author text,
  published_at timestamptz,
  original_language text not null,
  website_or_institution text,
  country_focus text[] not null default '{}',
  companies text[] not null default '{}',
  institutions text[] not null default '{}',
  original_url text not null unique,
  raw_text text,
  cleaned_text text,
  english_translation text,
  source_type text,
  collected_at timestamptz not null default now(),
  processed_at timestamptz,
  summary_100_words text,
  key_points text[] not null default '{}',
  sector_tags text[] not null default '{}',
  project_type text,
  investment_types text[] not null default '{}',
  project_status text,
  sanctions_relevance text,
  strategic_autonomy_relevance text,
  china_iran_relevance text,
  china_gcc_relevance text,
  us_china_competition_relevance text,
  commercial_opportunity_relevance text,
  risk_level text,
  confidence_score numeric(5,2),
  why_this_matters text,
  who_should_care text[] not null default '{}',
  client_relevance jsonb not null default '{}'::jsonb,
  citation_data jsonb not null default '{}'::jsonb,
  analyst_notes text,
  model_used text,
  embedding vector(1024)
);

create table if not exists public.saved_queries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  query_text text not null,
  filters jsonb not null default '{}'::jsonb,
  alert_enabled boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists research_items_fts_idx on public.research_items using gin (
  to_tsvector('english', coalesce(title, '') || ' ' || coalesce(summary_100_words, '') || ' ' || coalesce(english_translation, ''))
);

create index if not exists research_items_embedding_idx on public.research_items
using ivfflat (embedding vector_cosine_ops) with (lists = 100);
