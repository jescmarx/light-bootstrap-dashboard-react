export function toCsv(items) {
  const headers = [
    "id",
    "title",
    "date",
    "countries",
    "companies",
    "institutions",
    "sectors",
    "investment_types",
    "risk_level",
    "confidence",
    "url"
  ];
  const rows = items.map((item) => [
    item.id,
    item.title,
    item.date,
    item.countries.join("; "),
    item.companies.join("; "),
    item.institutions.join("; "),
    item.sectors.join("; "),
    item.investmentType.join("; "),
    item.riskLevel,
    item.confidence,
    item.url
  ]);
  return [headers, ...rows]
    .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","))
    .join("\n");
}

export function toMarkdownBrief(items) {
  return items
    .map((item) => [
      `## ${item.title}`,
      `**Date:** ${item.date}`,
      `**Countries:** ${item.countries.join(", ")}`,
      `**Companies:** ${item.companies.join(", ")}`,
      `**Risk:** ${item.riskLevel}`,
      `**Summary:** ${item.summary}`,
      `**Why this matters:** ${item.whyItMatters}`,
      `**Who should care:** ${item.whoShouldCare.join(", ")}`,
      `**Chicago footnote seed:** ${item.author}, “${item.title},” ${item.institution}, ${item.date}, ${item.url}.`
    ].join("\n\n"))
    .join("\n\n---\n\n");
}

export function toJson(items) {
  return JSON.stringify(items, null, 2);
}
