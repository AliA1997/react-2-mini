import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: true,
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
    }
    this.updateColor = this.updateColor.bind(this);
  }
  // updateColor
  updateColor(val) {
    this.setState(() => {
      return {
        fontColor: val, 
      }
    })
  }
  // updateSize
  updateSize(val) {
    //When this is undefined by a error.
    //Bind the function in the constructor function.
    this.setState(() => {
      return {
        fontSize: val,
      }
    })
  }
  // updateFamily

  // updateEditStatus

  render() {
      //When passing down function no need for a parameter
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          <ColorChanger fontColor={this.state.fontColor} update={this.updateColor} />
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          <TextContainer 
          fontColor={this.state.fontColor}
          fontSize={this.state.fontSize}
          fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
