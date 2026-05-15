# Adding new sources

The China–Iran–GCC Investment Monitor accepts only lawful, publicly accessible sources. Analysts may add RSS feeds, APIs, uploaded documents, newsletters, and manually added URLs when access is authorized and does not require bypassing paywalls, login walls, `robots.txt`, censorship systems, or technical access controls.

## Required fields

- Source name
- Public URL, RSS feed, API endpoint, upload reference, newsletter archive, or manual URL
- Original language: Mandarin or English for the MVP; Arabic and Persian are planned later
- Source category: government, SOE, technology firm, logistics operator, energy company, bank, think tank, academic journal, media, stock exchange filing, or corporate press release
- Collection method and cadence
- Compliance notes
- Country, sector, company, and institution hints when known

## Review checklist

1. Confirm that the source is public and lawful to access.
2. Confirm that collection does not bypass paywalls, login requirements, `robots.txt`, censorship systems, or access controls.
3. Add the source in the Source Management page.
4. Run a small test extraction and review raw text quality.
5. Verify that DeepSeek V4 Flash output includes translation, summary, tags, entities, relevance scoring, and confidence.
6. Approve the source for scheduled collection.

## Default processing model policy

Use DeepSeek V4 Flash for Mandarin-to-English translation, summarization, tagging, entity extraction, company extraction, sector classification, relevance scoring, and first-pass analytical notes. Use DeepSeek V4 Pro, GPT, or Claude only for final client memos, scenario analysis, high-stakes synthesis, and polished advisory writing.
