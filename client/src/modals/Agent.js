/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

const FormData = require('form-data');


class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  fileSelectedHandler(e) {
    this.setState({
      selectedFile: e.target.files[0],
    });
  }

  fileUploadHandler() {
    const { selectedFile } = this.state;
    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    console.log(formData.get('image'));
    axios.post('/agent', { image: formData })
      .then((res) => {
        console.log(res);
      });
  }

  agent() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler.bind(this)} />
        <button className="btn btn-success" onClick={this.fileUploadHandler.bind(this)}>Upload</button>
      </div>
    );
  }

  render() {
    return (
      this.agent()
    );
  }
}

export default Agent;
