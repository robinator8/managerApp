import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>
        <CardSection>
          <Button
            text="Create"
          />
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
