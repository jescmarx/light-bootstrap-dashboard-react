import React from "react";
import { Badge, Card, Col, Container, Row, Table } from "react-bootstrap";

import { articles, countries } from "data/researchMonitor";

function Maps() {
  return (
    <Container fluid>
      <Row>
        <Col lg="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Map view</Card.Title>
              <p className="card-category">Regional network map placeholder for China, Iran, and GCC investment lanes.</p>
            </Card.Header>
            <Card.Body>
              <div className="position-relative border rounded bg-light" style={{ minHeight: 420, overflow: "hidden" }}>
                {countries.map((country, index) => (
                  <div
                    key={country.name}
                    className="position-absolute text-center"
                    style={{
                      left: `${12 + (index % 4) * 22}%`,
                      top: `${15 + Math.floor(index / 4) * 42}%`,
                      width: 150
                    }}
                  >
                    <div className="rounded-circle bg-info text-white d-inline-flex align-items-center justify-content-center shadow" style={{ width: 76, height: 76 }}>
                      <strong>{country.name.slice(0, 3).toUpperCase()}</strong>
                    </div>
                    <div className="small mt-2"><strong>{country.name}</strong></div>
                    <div className="small text-muted">{country.risk} risk</div>
                  </div>
                ))}
                <div className="position-absolute w-100 text-center" style={{ bottom: 18 }}>
                  <Badge variant="warning" className="p-2">Next: connect to geocoded Supabase project coordinates</Badge>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header><Card.Title as="h4">Mapped project lanes</Card.Title></Card.Header>
            <Card.Body>
              <Table responsive size="sm">
                <thead><tr><th>Lane</th><th>Sector</th><th>Risk</th></tr></thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td>{article.countries.join(" → ")}</td>
                      <td>{article.sectors.slice(0, 2).join(", ")}</td>
                      <td><Badge variant={article.riskLevel === "High" ? "danger" : "warning"}>{article.riskLevel}</Badge></td>
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

export default Maps;
