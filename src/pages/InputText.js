import Input from 'react-toolbox/lib/input';
import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import api from '../api';

class InputText extends React.Component {
  
 
  constructor(props) {
    super(props);
    this.state = {
          name : '', 
          male : '', 
          female : '', 
          commentNum : '', 
          likes : '',
    };
  }
  handleChange = (event) => {
    console.log(event);
    this.setState({name : event});
  };

  searchName = (value) => {
    this.searchit(this.state.name);

  };
  async searchit(value) {
    const resp = await api.details.list(value);
    if (resp.status === 200) {
      this.setState({male: resp.data.name});
      this.setState({female: resp.data.female});
      this.setState({commentNum: resp.data.commentNum});
      this.setState({likes: resp.data.likes});
    }
  };

  render () {
    var value = this.state.name;
    var divStyle = {
      color: '#7b73f0',
    };
    return (
      <section>
        <Input type='text' ref="myTextInput" label='Name' value={value} onChange={this.handleChange.bind(this)} maxLength={30 } />
        <Button label="Search" onClick={this.searchName.bind(this)} raised primary/>
        <div>
            <h4 style={divStyle}>Name:  {this.state.name} </h4>
            <p>Male Num:  {this.state.male} </p>
            <p>Female Num:  {this.state.female} </p>
            <p>Comment Num:  {this.state.commentNum} </p>
            <p>Likes Num:  {this.state.likes} </p>
        </div>
      </section>
    );
  }
}

export default InputText;