import Input from 'react-toolbox/lib/input';
import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import api from '../api';

class Top extends React.Component {
  
 
  constructor(props) {
    super(props);
    this.state = {
        num : 5,
        status_id : [], 
    };
  }

  searchName = (value) => {
    this.searchit(this.state.num);

  };
  async searchit(value) {
    const resp = await api.posts.top(value);
    if (resp.status === 200) {
      console.log(resp.data);
      this.setState({status_id: resp.data});
    }
  };

  render () {
    var status_id = this.state.status_id;
    return (
      <section>
        <Button label="Search" onClick={this.searchName.bind(this)} raised primary/>
        <div>
            {status_id.map((item) => {
                return (
                    <div>
                    <div>Status Id ：{item}</div>
                    </div>
                )
            })}
        </div>
      </section>
    );
  }
}

export default Top;