import React from "react";
import { Badge, Card, Col, Container, Form, ProgressBar, Row, Table } from "react-bootstrap";

import {
  articles,
  clientSegments,
  countries,
  pipelineSteps,
  savedQueries,
  sectors
} from "data/researchMonitor";

const highRiskItems = articles.filter((article) => article.riskLevel === "High").length;
const activeProjects = articles.filter((article) => article.projectStatus === "Active").length;
const uniqueCompanies = new Set(articles.flatMap((article) => article.companies)).size;
const uniqueCountries = new Set(articles.flatMap((article) => article.countries)).size;

function Dashboard() {
  return (
    <Container fluid className="rihla-monitor">
      <Row>
        <Col md="12">
          <Card className="mb-4 border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex flex-wrap justify-content-between align-items-start">
                <div>
                  <Badge variant="info" className="mb-2">MVP</Badge>
                  <h2 className="mb-1">China–Iran–GCC Investment Monitor</h2>
                  <p className="text-muted mb-0">
                    Open-source bilingual research intelligence for tracking Chinese economic,
                    technology, infrastructure, energy, finance, logistics, industrial, and strategic
                    investment activity involving Iran and the GCC.
                  </p>
                </div>
                <div className="text-right mt-3 mt-md-0">
                  <div className="small text-muted">Default routine AI model</div>
                  <strong>DeepSeek V4 Flash</strong>
                  <div className="small text-muted">Premium synthesis: DeepSeek V4 Pro, GPT, or Claude</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="4"><div className="icon-big text-center"><i className="nc-icon nc-world-2 text-info" /></div></Col>
                <Col xs="8"><div className="numbers"><p className="card-category">Countries monitored</p><Card.Title as="h4">{uniqueCountries}</Card.Title></div></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="4"><div className="icon-big text-center"><i className="nc-icon nc-vector text-warning" /></div></Col>
                <Col xs="8"><div className="numbers"><p className="card-category">Active projects</p><Card.Title as="h4">{activeProjects}</Card.Title></div></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="4"><div className="icon-big text-center"><i className="nc-icon nc-bank text-success" /></div></Col>
                <Col xs="8"><div className="numbers"><p className="card-category">Companies / institutions</p><Card.Title as="h4">{uniqueCompanies}</Card.Title></div></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="4"><div className="icon-big text-center"><i className="nc-icon nc-bell-55 text-danger" /></div></Col>
                <Col xs="8"><div className="numbers"><p className="card-category">High-risk items</p><Card.Title as="h4">{highRiskItems}</Card.Title></div></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Research question</Card.Title>
              <p className="card-category">Expansion, adaptation, reduction, and restructuring signals</p>
            </Card.Header>
            <Card.Body>
              <p>
                How is China expanding, adapting, reducing, or restructuring its economic and
                technology presence across Iran and the GCC, especially after regional conflict,
                sanctions pressure, supply-chain disruption, and Gulf strategic autonomy efforts?
              </p>
              <Row>
                {articles.map((article) => (
                  <Col md="6" key={article.id} className="mb-3">
                    <div className="p-3 border rounded h-100">
                      <div className="d-flex justify-content-between align-items-start">
                        <strong>{article.title}</strong>
                        <Badge variant={article.riskLevel === "High" ? "danger" : article.riskLevel === "Medium" ? "warning" : "success"}>
                          {article.riskLevel}
                        </Badge>
                      </div>
                      <p className="small text-muted mt-2 mb-2">{article.summary}</p>
                      <div>
                        {article.sectors.map((sector) => (
                          <Badge key={sector} variant="light" className="mr-1 mb-1">{sector}</Badge>
                        ))}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Priority filters</Card.Title>
              <p className="card-category">Analyst triage controls</p>
            </Card.Header>
            <Card.Body>
              <Form.Control className="mb-3" placeholder="Search China, Iran, Huawei, ports..." />
              {["Country", "Sector", "Company", "Source type", "Investment type", "Project status", "Risk level", "Sanctions exposure"].map((filter) => (
                <div className="d-flex justify-content-between border-bottom py-2" key={filter}>
                  <span>{filter}</span><Badge variant="secondary">filter</Badge>
                </div>
              ))}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Saved queries</Card.Title>
            </Card.Header>
            <Card.Body>
              {savedQueries.slice(0, 6).map((query) => (
                <Badge key={query} variant="info" className="mr-1 mb-2 p-2">{query}</Badge>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="7">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Investment timeline</Card.Title>
              <p className="card-category">Initial MVP coverage lanes</p>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead><tr><th>Date</th><th>Countries</th><th>Project type</th><th>Confidence</th></tr></thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td>{article.date}</td>
                      <td>{article.countries.join(" / ")}</td>
                      <td>{article.projectType}</td>
                      <td><ProgressBar now={article.confidence} label={`${article.confidence}%`} /></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="5">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Pipeline architecture</Card.Title>
              <p className="card-category">Lawful public-source collection only</p>
            </Card.Header>
            <Card.Body>
              {pipelineSteps.map((step, index) => (
                <div className="d-flex mb-3" key={step}>
                  <Badge variant="dark" className="mr-2 align-self-start">{index + 1}</Badge>
                  <span>{step}</span>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="6">
          <Card>
            <Card.Header><Card.Title as="h4">Country profiles</Card.Title></Card.Header>
            <Card.Body>
              {countries.map((country) => (
                <div className="mb-3" key={country.name}>
                  <div className="d-flex justify-content-between"><strong>{country.name}</strong><Badge variant="light">{country.risk}</Badge></div>
                  <div className="small text-muted">{country.focus}</div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header><Card.Title as="h4">Sector and client relevance</Card.Title></Card.Header>
            <Card.Body>
              <div className="mb-3">
                {sectors.map((sector) => <Badge key={sector} variant="light" className="mr-1 mb-1 p-2">{sector}</Badge>)}
              </div>
              <Table responsive size="sm">
                <thead><tr><th>Client segment</th><th>Coverage use case</th></tr></thead>
                <tbody>
                  {clientSegments.map((segment) => <tr key={segment}><td>{segment}</td><td>Relevance score, alerts, briefs</td></tr>)}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
