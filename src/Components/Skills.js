import React, { Component } from 'react';
import { Progress, Space } from 'antd';
import { Container,Col,Card } from 'react-bootstrap';
import { Flex } from 'antd';


class Skills extends Component {
  state = {
    loading: true,
    progress: [], // Initialize progress as an empty array
  };
  skillsData = [
    {
      skillText: 'HTML',
      Known: '80%',
    },
    {
      skillText: 'CSS',
      Known: '70%',
    },
    {
      skillText: 'JavaScript',
      Known: '60%',
    },
    {
      skillText: 'JQuery',
      Known: '65%',
    },
    {
      skillText: 'Bootstrap',
      Known: '80%',
    },
    {
      skillText: 'React JS',
      Known: '60%',
    },
    {
      skillText: 'ASP.NET',
      Known: '50%',
    },
    {
      skillText: 'C#',
      Known: '50%',
    },
    {
      skillText: 'MSSQL',
      Known: '60%',
    },
    {
      skillText: 'SSMS',
      Known: '50%',
    },
    {
      skillText: 'VS 2010',
      Known: '50%',
    },
  ];

  componentDidMount() {
    this.setState({ progress: new Array(this.skillsData.length).fill(0) });

    this.skillsData.forEach((skill, index) => {
      setTimeout(() => {
        const newProgress = [...this.state.progress];
        newProgress[index] = parseInt(skill.Known, 10);
        this.setState({ progress: newProgress });
      }, 400 + index * 200); // Adjust the delay based on your needs
    });
  }

  render() {
    const conicColors = { '0%': '#8ec7ed', '100%': '#3498db' };
    const twoColors = {
      '0%': '#108ee9',
      '100%': '#87d068',
    };

    return (
      <div className="Skills_Main">
        <h2>Skills</h2>
        <Container>
          <Col lg={12}>
        <Space wrap>
          {this.skillsData.map((skill, index) => (
            <Col lg={12}>
            <Card id='Card' className='ms-3' key={index}>
              <Card.Header>
                <Flex gap="small" wrap>
                  <Progress type="circle" strokeWidth={10} size={[150]} percent={this.state.progress[index]} strokeColor={twoColors} />
                </Flex>
              </Card.Header>
              <Card.Body>
                <Card.Title className='Title_card'>{skill.skillText}</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Space>
        </Col>
        </Container>
      </div>
    );
  }
}

export default Skills;
