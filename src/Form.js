import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      job: "",
    };

    this.state = this.initialState;
  }

  handelChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state); //pass the Form state through as the character parameter
    this.setState(this.initialState); //clear the form after submit
  }

  render() {
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handelChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={this.state.job}
          onChange={this.handelChange}
        />    
        <input 
          type="button" 
          value="Submit" 
          onClick={this.submitForm}
        />  
      </form>
    );
  }
}

export default Form;
