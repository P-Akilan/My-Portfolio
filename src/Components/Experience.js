import React, { Component } from 'react'
import { Container, Col,Card } from 'react-bootstrap';


class Experience extends Component {
    experienceData = [
        {
          title: 'ASP.NET Web Developer',
          company: 'Larch Technologies',
          date: 'November 2022 - Present',
          description: 'Worked on developing and maintaining software solutions for clients.',
          frontend:'HTML,CSS,Bootstrap,JS,Jquery',
          framework:'ASP.NET',
          backend:'C#,SQL Server',
          developmentTools:'SSMS,VS2010'
        }
      ];
  render() {
    return (
        <Container className="experience-container">
        <h2 className="experience-header">Work Experience</h2>
        
          {this.experienceData.map((experience, index) => (
            <Col lg={12} md={12} sm={12} key={index} className='d-md-flex'>
            <Col md={6} key={index} className="mb-4">
             
               <Card className="experience-entry">
                <Card.Body>
                  <Card.Title>{experience.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{experience.company}</Card.Subtitle>
                  <Card.Text>
                    <strong>Date:</strong> {experience.date}
                  </Card.Text>
                  <Card.Text>{experience.description}</Card.Text>
                  <Card.Text><b>FrontEnd: </b>{experience.frontend}</Card.Text>
                  <Card.Text><b>Framework: </b>{experience.framework}</Card.Text>
                  <Card.Text><b>Backend: </b>{experience.backend}</Card.Text>
                  <Card.Text><b>DevelopmentTools: </b>{experience.developmentTools}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
         </Col>
          ))}
        <hr className="experience-divider" />
      </Container>
    )
  }
}

export default Experience