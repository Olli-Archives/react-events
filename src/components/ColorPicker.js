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
      <button className={this.props.color} onClick={this.clickHandler} style={
        {  width: '300px', height:'100px' }
      }>{this.props.color}</button>
      
      </>
    );
  }
}
