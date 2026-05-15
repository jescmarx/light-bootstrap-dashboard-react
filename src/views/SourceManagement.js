import React from "react";
import { Badge, Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";

import { sourceCategories, sources } from "data/researchMonitor";

function SourceManagement() {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Source management</Card.Title>
              <p className="card-category">
                Add lawful public sources, RSS feeds, APIs, uploaded documents, newsletters, and manually added URLs.
              </p>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg="4">
                  <Form>
                    <Form.Group>
                      <Form.Label>Source name</Form.Label>
                      <Form.Control placeholder="e.g., NDRC Belt and Road portal" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Public URL / feed</Form.Label>
                      <Form.Control placeholder="https://..." />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Language</Form.Label>
                      <Form.Control as="select"><option>Mandarin</option><option>English</option><option>Arabic (later)</option><option>Persian (later)</option></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select">{sourceCategories.map((category) => <option key={category}>{category}</option>)}</Form.Control>
                    </Form.Group>
                    <Button variant="info">Queue source for review</Button>
                  </Form>
                </Col>
                <Col lg="8">
                  <div className="alert alert-warning">
                    Collection policy: do not bypass paywalls, login walls, robots.txt, censorship systems, or access controls.
                    Store compliance notes with every source.
                  </div>
                  <Table responsive hover>
                    <thead><tr><th>Name</th><th>Language</th><th>Category</th><th>Method</th><th>Cadence</th><th>Compliance</th></tr></thead>
                    <tbody>
                      {sources.map((source) => (
                        <tr key={source.name}>
                          <td>{source.name}</td>
                          <td>{source.language}</td>
                          <td><Badge variant="secondary">{source.category}</Badge></td>
                          <td>{source.method}</td>
                          <td>{source.cadence}</td>
                          <td className="small">{source.compliance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SourceManagement;
