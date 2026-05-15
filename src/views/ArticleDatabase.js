import React from "react";
import { Badge, Card, Col, Container, Form, Row, Table } from "react-bootstrap";

import { articles, investmentTypes, sectors } from "data/researchMonitor";

function ArticleDatabase() {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Article and project database</Card.Title>
              <p className="card-category">Keyword, semantic, and filtered search across translated open-source intelligence.</p>
            </Card.Header>
            <Card.Body>
              <Row className="mb-4">
                <Col md="4"><Form.Control placeholder="Keyword or semantic search" /></Col>
                <Col md="2"><Form.Control as="select"><option>All countries</option><option>China–Iran</option><option>China–GCC</option></Form.Control></Col>
                <Col md="2"><Form.Control as="select"><option>All sectors</option>{sectors.map((sector) => <option key={sector}>{sector}</option>)}</Form.Control></Col>
                <Col md="2"><Form.Control as="select"><option>All investment types</option>{investmentTypes.map((type) => <option key={type}>{type}</option>)}</Form.Control></Col>
                <Col md="2"><Form.Control as="select"><option>All risk levels</option><option>High</option><option>Medium</option><option>Low</option></Form.Control></Col>
              </Row>
              <Table responsive hover>
                <thead>
                  <tr><th>ID</th><th>Title</th><th>Countries</th><th>Companies</th><th>Investment type</th><th>Risk</th><th>Confidence</th></tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td>{article.id}</td>
                      <td><strong>{article.title}</strong><div className="small text-muted">{article.date} · {article.sourceType}</div></td>
                      <td>{article.countries.join(", ")}</td>
                      <td>{article.companies.join(", ")}</td>
                      <td>{article.investmentType.map((type) => <Badge key={type} variant="light" className="mr-1 mb-1">{type}</Badge>)}</td>
                      <td><Badge variant={article.riskLevel === "High" ? "danger" : "warning"}>{article.riskLevel}</Badge></td>
                      <td>{article.confidence}%</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDatabase;
