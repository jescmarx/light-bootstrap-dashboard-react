import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";

import { articles } from "data/researchMonitor";

function Timeline() {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Investment timeline</Card.Title>
              <p className="card-category">Track announced projects, MOUs, financing, construction, technology partnerships, stalls, cancellations, and regulatory changes.</p>
            </Card.Header>
            <Card.Body>
              {articles.map((article) => (
                <div key={article.id} className="d-flex mb-4">
                  <div className="mr-3 text-center" style={{ minWidth: 110 }}>
                    <Badge variant="dark" className="p-2">{article.date}</Badge>
                  </div>
                  <div className="border-left pl-3 pb-3">
                    <h5 className="mb-1">{article.title}</h5>
                    <div className="mb-2">{article.countries.join(" / ")} · {article.projectType}</div>
                    {article.investmentType.map((type) => <Badge key={type} variant="light" className="mr-1 mb-1">{type}</Badge>)}
                    <p className="text-muted mt-2 mb-0">{article.summary}</p>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Timeline;
