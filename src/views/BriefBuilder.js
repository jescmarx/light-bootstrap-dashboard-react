import React from "react";
import { Badge, Button, Card, Col, Container, Form, Row } from "react-bootstrap";

import { articles } from "data/researchMonitor";
import { toCsv, toJson, toMarkdownBrief } from "utils/exportResearchItems";

const briefTypes = [
  "weekly China–Iran–GCC investment brief",
  "country brief",
  "sector brief",
  "company profile",
  "risk memo",
  "client-facing advisory note",
  "scenario analysis"
];

function BriefBuilder() {
  const handleExport = (format) => {
    const exporters = {
      csv: toCsv,
      json: toJson,
      markdown: toMarkdownBrief
    };
    const content = exporters[format](articles);
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `rihla-monitor-export.${format === "markdown" ? "md" : format}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="4">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Research brief builder</Card.Title>
              <p className="card-category">Generate advisory drafts from selected monitored items.</p>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Brief type</Form.Label>
                <Form.Control as="select">{briefTypes.map((type) => <option key={type}>{type}</option>)}</Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Audience</Form.Label>
                <Form.Control as="select"><option>Sanctions-risk teams</option><option>Gulf sovereign wealth funds</option><option>Energy firms</option><option>AI/cloud firms</option><option>Policy institutions</option></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Export format</Form.Label>
                <Form.Control as="select"><option>Markdown</option><option>CSV</option><option>JSON</option><option>Word-compatible text</option><option>Chicago-style footnotes</option></Form.Control>
              </Form.Group>
              <Button variant="info" className="mr-2" onClick={() => handleExport("markdown")}>Build draft</Button>
              <Button variant="outline-secondary" className="mr-2" onClick={() => handleExport("csv")}>CSV</Button>
              <Button variant="outline-secondary" onClick={() => handleExport("json")}>JSON</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Selected evidence packet</Card.Title>
              <p className="card-category">Each item retains original URL, translation, summary, tags, confidence, and citation metadata.</p>
            </Card.Header>
            <Card.Body>
              {articles.map((article) => (
                <div key={article.id} className="border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <strong>{article.title}</strong>
                      <div className="small text-muted">{article.author} · {article.date} · {article.institution}</div>
                    </div>
                    <Badge variant="dark">{article.confidence}% confidence</Badge>
                  </div>
                  <p className="my-2">{article.whyItMatters}</p>
                  <div className="small"><strong>Why this matters:</strong> {article.whyItMatters}</div>
                  <div className="small"><strong>Who should care:</strong> {article.whoShouldCare.join(", ")}</div>
                  <div className="small"><strong>Chicago footnote seed:</strong> {article.author}, “{article.title},” {article.institution}, {article.date}, {article.url}.</div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BriefBuilder;
