# Architecture

The MVP is implemented in the existing React dashboard shell and is structured so it can later be migrated to the requested Next.js/Tailwind/Vercel stack.

## Frontend

- Monitor home with KPI cards, priority filters, saved queries, timeline preview, country profiles, and sector tags
- Source management page
- Article and project database with filter controls
- Map view placeholder for geocoded project lanes
- Investment timeline
- Company, institution, and country profiles
- Brief builder with citation export seeds

## Backend and data

The `supabase/schema.sql` file defines PostgreSQL tables for sources, research items, saved queries, metadata, tags, raw and cleaned text, translations, summaries, model provenance, citation data, analyst notes, and pgvector embeddings.

## AI workflow

Routine processing uses DeepSeek V4 Flash. Premium synthesis models are reserved for final memos, scenario analysis, high-stakes synthesis, and polished advisory writing. BGE embeddings support semantic search through pgvector.

## Export targets

The UI is prepared for CSV, JSON, Markdown, Word-compatible text, and Chicago-style footnotes with correct URLs.
