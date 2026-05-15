"""Lawful public-source ingestion skeleton for the Rihla monitor.

The script intentionally avoids paywall, login, robots.txt, censorship, or access-control bypasses.
Wire this skeleton to Supabase, DeepSeek V4 Flash, and a BGE embedding endpoint in deployment.
"""

from __future__ import annotations

from dataclasses import dataclass, asdict
from datetime import datetime, timezone
from typing import Iterable

import feedparser
import requests
import trafilatura
from bs4 import BeautifulSoup


@dataclass
class ExtractedItem:
    title: str
    author: str | None
    published_at: str | None
    original_language: str
    website_or_institution: str
    original_url: str
    raw_text: str
    cleaned_text: str
    source_type: str
    collected_at: str


def iter_feed_urls(feed_url: str) -> Iterable[str]:
    parsed = feedparser.parse(feed_url)
    for entry in parsed.entries:
        link = entry.get("link")
        if link:
            yield link


def fetch_public_url(url: str) -> str:
    response = requests.get(
        url,
        timeout=30,
        headers={"User-Agent": "RihlaResearchMonitor/0.1 (+public-source research)"},
    )
    response.raise_for_status()
    return response.text


def extract_item(url: str, language: str, institution: str, source_type: str) -> ExtractedItem:
    raw_html = fetch_public_url(url)
    soup = BeautifulSoup(raw_html, "html.parser")
    title = soup.title.string.strip() if soup.title and soup.title.string else url
    cleaned_text = trafilatura.extract(raw_html, url=url) or soup.get_text(" ", strip=True)
    return ExtractedItem(
        title=title,
        author=None,
        published_at=None,
        original_language=language,
        website_or_institution=institution,
        original_url=url,
        raw_text=raw_html,
        cleaned_text=cleaned_text,
        source_type=source_type,
        collected_at=datetime.now(timezone.utc).isoformat(),
    )


def process_with_deepseek_flash(item: ExtractedItem) -> dict:
    """Return the payload shape expected from DeepSeek V4 Flash.

    Production code should call DeepSeek V4 Flash here for translation, summary,
    tagging, entity extraction, sector classification, relevance scoring, and first-pass notes.
    """
    return {
        **asdict(item),
        "model_used": "DeepSeek V4 Flash",
        "english_translation": "TODO: DeepSeek V4 Flash translation",
        "summary_100_words": "TODO: DeepSeek V4 Flash 100-word summary",
        "key_points": [],
        "country_focus": [],
        "companies": [],
        "institutions": [],
        "sector_tags": [],
        "investment_types": [],
        "risk_level": "Unscored",
        "confidence_score": 0,
        "why_this_matters": "TODO",
        "who_should_care": [],
    }


if __name__ == "__main__":
    sample = extract_item(
        "https://example.org",
        language="English",
        institution="Example public source",
        source_type="media",
    )
    print(process_with_deepseek_flash(sample))
