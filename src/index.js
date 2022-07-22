import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import HelloWorld from './Helloworld';
import './index.css';

function Index(props){

  const myFirstElement = "Testing";
  
  return (
      <div className="body">
          <HelloWorld/>
          <p>{ myFirstElement }</p>
          <h1>Hello World <span>{ myFirstElement }</span> </h1>
          <App />
    </div>
    );
}

ReactDom.render(<Index/>, document.getElementById('root'));

