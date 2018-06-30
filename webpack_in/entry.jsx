//  This file 'entry.jsx' is part of an example for building a multi-widget React front-end app
//  step by step as outlined in the tutorial blog at
//  http://maratbn.com/blogs/2018/07/02/react-multi-widget/


console.log("JSX entry logic.");


import React from 'react';
import ReactDOM from 'react-dom';


const objStyleCommon = {
    margin:     '1em',
    border:     'solid 2px green',
    textAlign:  'center'
  };

const objStyleContent = {
    padding:    '1em'
  };


class HelloWidget extends React.Component {
    render() {
        return (
            <div style={{ ...objStyleCommon, ...objStyleContent }}>
              Hello!  I'm a React app!!
            </div>
          );
      }
}

class TextWidget extends React.Component {
    render() {
        return (
            <div style={ objStyleCommon }>
              <div style={ objStyleContent }>Some text here....</div>
              <button style={{ margin: '1em'}}>Change text...</button>
            </div>
          );
      }
}

class ListWidget extends React.Component {
    render() {
        return (
            <div style={ objStyleCommon }>
              <div style={ objStyleContent }>
                <ul style={{ display: 'inline-block' }}>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              <div>
                <button style={{ margin: '1em'}}>Add new item...</button>
                <button style={{ margin: '1em'}}>Edit item...</button>
                <button style={{ margin: '1em'}}>Remove item...</button>
              </div>
            </div>
          );
      }
}


ReactDOM.render(
    <div>
      <HelloWidget />
      <TextWidget />
      <ListWidget />
    </div>,
    document.getElementById('react-app'));
