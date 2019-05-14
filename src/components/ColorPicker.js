import React, { PureComponent, fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  
  clickHandler =  ()=>{
    console.log('you clicked', this.props.color);
  }
  
  render(){
    const { color } = this.props;

    return (
      <section className={styles.ColorPicker}>
        <button className={styles[color]} onClick={this.clickHandler} >{this.props.color}</button> 
      </section>
    );
  }
}
