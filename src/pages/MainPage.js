import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { Row, Col } from 'react-flexbox-grid';

import InputText from './InputText';
import Insert from './Insert';
import Post from './Post';
import Top from './Top';

class MainPage extends Component {
  state = {};

  render() {
    const { data } = this.state;
    return (
        <Row around="xs">
          <Col>
            <h2>Top 5 hot topics:</h2>
            <Top />
            <br/>
            <hr />
            <h2>Post details by post id</h2>
            <Post />
          </Col>
          <br/>
          <hr />
          <Col xs={12} sm={10}>
            <h2>Search user info by user's name</h2>
            <InputText />
          </Col>
          <br/>
          <hr />
          <Col>
            <h2>Add more users' comments</h2>
            <Insert />
          </Col>
        </Row>
    );
  }
}

export default MainPage;