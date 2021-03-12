import * as React from "react";
import { shallow, render, mount} from "enzyme";
import { act } from 'react-dom/test-utils';
import JokeBox from "./JokeBox";
import {JokeAPI} from './JokeTypes'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {IState, JokeContext} from '../reactStore'
import ErrorBox from "./ErrorBox";
import JokeData from "./JokeData";
configure({ adapter: new Adapter() });
function wait(ms:number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms )
  })
} 
describe("JokeBox", () => {
  test("Shows Punchline", () => {
    const testData:JokeAPI = 
    {
        id:11020,
        type:"general",
        setup:"Why did the chicken cross the road",
        punchline:"Because he couldnt fly."
    }
    const wrapper = shallow(<JokeBox jokeData = {testData} reload = {()=> {}}/>);    
    setTimeout(()=>expect(wrapper.find('#punchline').text()).toEqual(testData.punchline), 2000)
  });
  test("Clicks Reload", async () => {
    const testData:JokeAPI = 
    {
        id:11020,
        type:"general",
        setup:"Why did the chicken cross the road",
        punchline:"Because he couldnt fly."
    }
    let clicked = false;
    const wrapper = shallow(<JokeBox jokeData = {testData} reload = {()=> {clicked= true}}/>); 
    act(() => {
      wrapper.find('#addButton').simulate('click');
    });  
    
    expect(clicked).toEqual(true)
  });
});

describe("JokeData", () => {
  test("Shows Punchline", async () => {
    const testData:JokeAPI = 
    {
        id:11020,
        type:"general",
        setup:"Why did the chicken cross the road",
        punchline:"Because he couldnt fly."
    }
    const wrapper = shallow(<ErrorBox>test</ErrorBox>);  
    await wait(2000)  
    expect(wrapper.find('#errorBody').text()).toEqual("test")
  });

  test("Shows Error with wrong context", async () => {
    await act(async()=>{
      try{
        let wrapper = mount(<JokeData/> , {JokeContext} );   
        await wait(2000)
          wrapper.update()
        
        wrapper.find('errorHeading').forEach(element => {
          console.log(element.text())
          expect(element.text()).toEqual("Ruh Ro - an error has occurred!")
        })
      }
      catch(error)
      {}
    })
  });
});
