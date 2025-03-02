import React, { Component } from 'react'
import Graduation from './../Others/graduate.png';
import Book from './../Others/open-book.png';
import { Descriptions } from 'antd';
import { Card } from 'react-bootstrap';


class Education extends Component {
  render() {
    const educationItems = [
      {
        title: 'Stella Mary\'s College of Engineering',
        degree: 'BE-ECE',
        cgpa: '7.5',
        period: '2018-2022',
        icon: Graduation,
      },
      {
        title: 'Nadar Higher Secondary School',
        degree: 'HSC',
        cgpa: '7.2',
        period: '2017-2018',
        icon: Book,
      },
      {
        title: 'Nadar Higher Secondary School',
        degree: 'SSLC',
        cgpa: '8.4',
        period: '2015-2016',
        icon: Book,
      },
    ];
    return (

      <Descriptions className='mt-5'  title="Education" bordered column={{ xs: 1,  sm: 2, md: 2, lg: 2, xl: 2,xxl: 2,}} >
      {educationItems.map((item, index) => (
        <div>
        <Card title={item.title} bordered={false}>
        <h1>{item.degree}</h1>
      </Card>
         
        <Descriptions.Item
          label={`${item.title} (${item.degree}) - ${item.cgpa}   `}
          key={index}
          span={3}
        >
          <div> 
         <strong>CGPA:</strong> {item.cgpa}
           <br />
           <strong>Period:</strong> {item.period}
           <br />           
           <img src={item.icon} alt={item.degree} height={40} width={40} />
         </div>
        </Descriptions.Item>
        </div> 
      ))}
    </Descriptions>

);
   }}
export default Education