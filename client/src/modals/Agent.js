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
  }


  fileUploadHandler(e) {
    e.preventDefault();
    const photo = e.target.portrait.files[0];
    const fullName = e.target.fullName.value;
    const formData = new FormData();
    formData.append('image', photo, photo.name);
    formData.append('fullName', fullName);
    axios.post('/agent', formData)
      .then((res) => {
        console.log(res);
      });
  }

  agent() {
    return (
      <div className="container">
        {/* <form action="/agent" method="POST" encType="multipart/form-data"> */}
        <form onSubmit={this.fileUploadHandler.bind(this)}>
          <input type="text" name="fullName" />
          <input name="portrait" type="file" />
          <input type="submit" value="Submit" />

        </form>
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
