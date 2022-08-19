import React from 'react';

export class Animal extends React.Component {
  constructor(name) {
    super()
    this.name = name;
  }

  introduce() {
    return `I am a ${this.name}`;
  }
}