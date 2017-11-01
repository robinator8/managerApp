import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate, employeeFormReset } from '../actions';
import { Button, Card, CardSection } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.employeeFormReset();
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button text="Create" onPress={this.onButtonPress.bind(this)} />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeCreate, employeeFormReset
})(EmployeeCreate);
