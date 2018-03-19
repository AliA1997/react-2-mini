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
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
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
    //Only use this if not needing the prevState parameter 
    //this.setState({stateProperty: newValue })
  }
  // updateFamily
  updateFamily(val) {
    this.setState(() => {
      return {
        fontFamily: val,
      }
    })
  }
  // updateEditStatus
  updateEditStatus(val) {
    this.setState(() => {
      return {
        allowEdit: val,
      }
    })
  }
  render() {
      //When passing down function no need for a parameter
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          <EditToggle allowEdit={this.state.allowEdit} update={this.updateEditStatus}/>
          { /* Render ColorChanger */ }
          <ColorChanger fontColor={this.state.fontColor} update={this.updateColor} />
          { /* Render SizeChanger */ }
          <SizeChanger allowEdit={this.state.allowEdit}
           fontSize={this.state.fontSize}
           update={this.updateSize} />
          { /* Render FamilyChanger */ }

          <FamilyChanger fontFamily={this.state.fontFamily} update={this.updateFamily} />
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
