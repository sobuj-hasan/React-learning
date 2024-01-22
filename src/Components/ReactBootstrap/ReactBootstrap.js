import React from 'react'
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

export const ReactBootstrap = () => {
  return (
    <Card style={{ width: "400px" }} className='p-2'>
      <Card.Body>
        <Card.Title>This is Card Title</Card.Title>
        <Card.Text>
          Und und gezeigt fühlt lispelnd lebt die ihr. In meinem erschüttert macht stillen mir wird mir lebt, alten neu lied.
        </Card.Text>
        <Button className='button'>Learn More</Button>
      </Card.Body>
    </Card>
  )
}

export default ReactBootstrap
