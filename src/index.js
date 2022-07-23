import React from 'react';
import ReactDom from 'react-dom';

class Car{
    constructor(name){
        this.brand = name;
    }

    present(){
        return 'I have a ' + this.brand;
    }
}

function Index(props){

  const mycar = new Car("Ford");

  return (
      <div className="body">
          {mycar.present()}
    </div>
    );
}

ReactDom.render(<Index/>, document.getElementById('root'));

