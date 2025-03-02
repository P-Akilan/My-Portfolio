import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class ResumeDownload extends Component {
    handleDownload = () => {
        const resumePath = '"ReactJS/portfolio/src/Others/AKILAN_P.pdf"';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'AKILAN_P.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  render() {
    return (
      <div>  
        <Button variant="primary" onClick={this.handleDownload}>
      Download Resume
    </Button>
    </div>
    )
  }
}

export default ResumeDownload