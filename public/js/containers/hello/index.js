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
    const demo1 = 1, demo2 = 2;
    if(demo1 === 1 && demo2 === 2) {
      this.demo = true;
      console.log('asdf');
    }
  }

  render() {
    return (
      <div>
        {
          this.list.map((item, index) => <div key={index}>{item}</div>)
        }
      </div>
    );
  }
}
