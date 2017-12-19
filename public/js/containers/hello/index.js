import React, { Component } from 'react';
import './scss/hello.scss';
import './scss/hello.less';

export default class Hello extends Component {
  constructor() {
    super();
    this.list = [
      'HELLO WORLD!',
      'THX FOR USING REACT_CLI'
    ];
  }
  render() {
    return (
      <div>
        {
          this.list.map(item => <div>{item}</div>)
        }
      </div>
    );
  }
}