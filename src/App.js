import React, { Component } from 'react';
import Cardpanel from './Cardpanel/Cardpanel';

import './App.css';

class App extends Component {


  state={
    persons:[{id:1,name:'Prince'},{id:2,name:'Tomin'},{id:3,name:'Vishak'}]
  }


  componentDidMount(){

    let M=window.M;
    document.addEventListener('DOMContentLoaded',function(){

      M.AutoInit();
    })
  
  }


  render() {

    let message;

    message=this.state.persons.map((person)=>{

            return <Cardpanel id={person.id} name={person.name}/>

    })

    return (
      <div className="App">
        <h1>React List</h1>
          <div class="row">
              <div class="column">
                    <div>
                      {message}
                    </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
