import React from "react";
import { Badge, Card, Col, Container, Row, Table } from "react-bootstrap";

import { articles, countries } from "data/researchMonitor";

const companies = Array.from(new Set(articles.flatMap((article) => article.companies))).map((company) => ({
  name: company,
  articles: articles.filter((article) => article.companies.includes(company)),
}));

function Profiles() {
  return (
    <Container fluid>
      <Row>
        <Col lg="5">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Country profiles</Card.Title>
              <p className="card-category">Core geographic scope and coverage focus.</p>
            </Card.Header>
            <Card.Body>
              {countries.map((country) => (
                <div key={country.name} className="border rounded p-3 mb-3">
                  <div className="d-flex justify-content-between"><strong>{country.name}</strong><Badge variant="secondary">{country.risk}</Badge></div>
                  <p className="small text-muted mb-0">{country.focus}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col lg="7">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Company and institution profiles</Card.Title>
              <p className="card-category">Relationship mapping for Chinese SOEs, Gulf state firms, technology vendors, funds, and ministries.</p>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead><tr><th>Entity</th><th>Countries</th><th>Sectors</th><th>Latest signal</th></tr></thead>
                <tbody>
                  {companies.map((company) => {
                    const latest = company.articles[0];
                    return (
                      <tr key={company.name}>
                        <td><strong>{company.name}</strong></td>
                        <td>{Array.from(new Set(company.articles.flatMap((article) => article.countries))).join(", ")}</td>
                        <td>{Array.from(new Set(company.articles.flatMap((article) => article.sectors))).map((sector) => <Badge key={sector} variant="light" className="mr-1 mb-1">{sector}</Badge>)}</td>
                        <td>{latest.title}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profiles;
