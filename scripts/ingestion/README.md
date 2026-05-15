# Ingestion pipeline

This MVP pipeline is designed for lawful, publicly accessible sources only. Do not bypass paywalls, login walls, `robots.txt`, censorship systems, or access controls.

## Flow

1. Add a source in the dashboard or directly in `public.sources`.
2. Collect public URLs, RSS entries, APIs, uploaded documents, newsletters, or manual links.
3. Extract raw and cleaned text with Python tools such as Playwright, BeautifulSoup, Trafilatura, and feedparser.
4. Process routine analysis with DeepSeek V4 Flash:
   - Mandarin-to-English translation
   - 100-word summary
   - 5 key points
   - country, company, and institution extraction
   - sector and investment classification
   - relevance scores and first-pass analyst notes
5. Generate BGE embeddings and store vectors in Supabase/PostgreSQL with pgvector.
6. Reserve DeepSeek V4 Pro, GPT, or Claude for final client memos, scenario analysis, high-stakes synthesis, and polished advisory writing.

## Environment variables

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
DEEPSEEK_API_KEY=
BGE_EMBEDDING_ENDPOINT=
```
