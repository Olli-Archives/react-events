import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired
  }


  clickHandler =  ()=>{
    console.log('you clicked', this.props.color);
  }

  render(){
    return (
      <>
      <button onClick={this.clickHandler} style={
        { background:this.props.color, width: '300px', height:'100px' }
      }>{this.props.color}</button>
      
      </>
    );
  }
}
