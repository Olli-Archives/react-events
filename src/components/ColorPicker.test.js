import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';


describe('ColorPicker component', ()=>{
  it('checks colorpicker snapshot', ()=>{
    const wrapper = shallow(<ColorPicker color='green'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
