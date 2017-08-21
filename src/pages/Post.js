import Input from 'react-toolbox/lib/input';
import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import api from '../api';

import PieChart from "react-svg-piechart"

class Post extends React.Component {
  
 
  constructor(props) {
    super(props);
    this.state = {
          status_id : '102717559809000_1444165988997477', 
          num_likes : '', 
          num_dislikes : '', 
          num_comments : '', 
          num_male : 0,
          num_female : 0, 
          num_unknown : 0, 
          all_num : '',
          expandedSector: null,
    };
               this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
 
  }

    handleMouseEnterOnSector(sector) {
        this.setState({expandedSector: sector})
    }

  handleChange = (event) => {
 //   console.log(event);
    this.setState({status_id : event});
  };

  searchName = (value) => {
    this.searchit(this.state.status_id);

  };
  async searchit(value) {
    const resp = await api.posts.list(value);
    if (resp.status === 200) {
      console.log(resp.data);
      this.setState({status_id: resp.data.status_id});
      this.setState({num_likes: resp.data.num_likes});
      this.setState({num_dislikes: resp.data.num_dislikes});
      this.setState({num_comments: resp.data.num_comments});
      this.setState({num_male: resp.data.num_male});
      this.setState({num_female: resp.data.num_female});
      this.setState({num_unknown: resp.data.num_unknown});
      this.setState({all_num: this.state.num_male + this.state.num_female + this.state.num_unknown});
    }
  };

  render () {
    var value = this.state.status_id;
    var maleAll = this.state.num_male/this.state.all_num * 100;
    var femaleAll = this.state.num_female/this.state.all_num * 100;
    var unknownAll = this.state.num_unknown/this.state.all_num * 100;
    const data = [
        {label: "Male", value: this.state.num_male, color: "#3b5998"},
        {label: "Female", value: this.state.num_female, color: "#00aced"},
        {label: "Unknown", value: this.state.num_unknown, color: "#dd4b39"},
    ];
const {expandedSector} = this.state;
    var divStyle = {
      color: '#7b73f0',
    };
    return (
      <section>
        <Input type='text' ref="myTextInput" label='Post_id' value={value} onChange={this.handleChange.bind(this)} maxLength={50 } />
        <Button label="Search" onClick={this.searchName.bind(this)} raised primary/>
        <div style={{width:'95%', display:'flex'}}>
            <div style={{width:200, wordWrap: 'break-word', margin: 10}}>
                <h4 style={divStyle}>Post Id:  {this.state.status_id} </h4>
                <p>Likes Num:  {this.state.num_likes} </p>
                <p>Dislikes Num:  {this.state.num_dislikes} </p>
                <p>Comments Num:  {this.state.num_comments} </p>
                <b> Genders distribution </b>
                <p>Males Num:  {this.state.num_male}    ({ maleAll.toFixed(2)}%) </p>
                <p>Females Num:  {this.state.num_female}   ({ femaleAll.toFixed(2)}%) </p>
                <p>Unknown Num:  {this.state.num_unknown}   ({ unknownAll.toFixed(2)}%)</p>
            </div>
                    
            <div style={{width:600, margin: 10}}>
                <div>
                    {data.map((element, i) => (
                        <div key={i}>
                            <span style={{background: element.color}}></span>
                            <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label} : {element.value}
                            </span>
                        </div>
                    ))
                    }
                </div>
                <PieChart
                    data={ data }
                                        expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={2}
                    expandOnHover
                    shrinkOnTouchEnd
                />
            </div>
        </div>
      </section>
    );
  }
}

export default Post;