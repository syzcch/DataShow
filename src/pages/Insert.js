import Input from 'react-toolbox/lib/input';
import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import api from '../api';

class Insert extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

        commentId : '',
        commentAuthor : '', 
        gender : '', 
        commentMessage : '', 
        commentLikes : '',

    };
  }

  handleChangeId = (event) => {
    console.log(event);
    this.setState({commentId : event});
  };

  handleChangeName = (event) => {
    console.log(event);
    this.setState({commentAuthor : event});
  };

  handleChangeGender = (event) => {
    console.log(event);
    this.setState({gender : event});
  };

  handleChangeComments = (event) => {
    console.log(event);
    this.setState({commentMessage : event});
  };

  handleChangeLikes = (event) => {
    console.log(event);
    this.setState({commentLikes : event});
  };

  addName = (value) => {
    this.searchit(this.state);
  };
  async searchit(value) {
    const resp = await api.addName.add(value);
    console.log(resp);
    if (resp.status === 200) {
      console.log(resp.data);
      this.setState({commentId : ''});
      this.setState({commentAuthor : ''});
      this.setState({gender : ''});
      this.setState({commentMessage : ''});
      this.setState({commentLikes : ''});
      alert("add user info successful");
    }
  };

  render () {
    var commentId = this.state.commentId;
    var commentAuthor = this.state.commentAuthor;
    var gender = this.state.gender;
    var commentMessage = this.state.commentMessage;
    var commentLikes = this.state.commentLikes;
    return (
      <section>
        <Input type='text' label='CommentId' value={commentId} onChange={this.handleChangeId.bind(this)} maxLength={30 } />
        <Input type='text' label='Name' value={commentAuthor} onChange={this.handleChangeName.bind(this)} maxLength={30 } />
        <Input type='text' label='Gender' value={gender} onChange={this.handleChangeGender.bind(this)} maxLength={16 } />
        <Input type='text' label='Comments' value={commentMessage} onChange={this.handleChangeComments.bind(this)} maxLength={500 } />
        <Input type='text' label='Likes' value={commentLikes} onChange={this.handleChangeLikes.bind(this)} maxLength={16 } />
        <Button label="Search" onClick={this.addName.bind(this)} raised primary/>
      </section>
    );
  }
}

export default Insert;