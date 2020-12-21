import React, { Component } from 'react';
import Cardpanel from './Cardpanel/Cardpanel';

import './App.css';

class App extends Component {


  state={
    fname:'',
    persons:[{id:1,name:'Prince'},{id:2,name:'Tomin'},{id:3,name:'Vishak'}],
    
  }


  componentDidMount(){

    let M=window.M;
    document.addEventListener('DOMContentLoaded',function(){

      M.AutoInit();
    })
  
  }

  submitHandler=(e)=>{
      e.preventDefault();

      const newItem={
        id:this.state.persons.length+1,
        name:this.state.fname,

      }

      let arr=[];

      arr=[...this.state.persons];

      arr.push(newItem);

      this.setState({
        persons:arr
      })

  }

  deleteHandler=(id)=>{

    console.log(id);
    let arr=[...this.state.persons];

    const newarr=arr.filter(p=>{
      return p.id!==id;
    })

    this.setState({
      persons:newarr
    })

  }
  fnameHandler=(e)=>{
      this.setState({
        fname:e.target.value
      })
  }
  render() {

    let status=false;
    let message;
      if(this.state.persons.length===1)
      {
        status=true;
      }
    message=this.state.persons.map((person)=>{

            return <Cardpanel changecolor={status} key={person.id} id={person.id} name={person.name} delete={this.deleteHandler}/>

    })

    return (
      <div className="App">
        <h1>React List</h1>
          <div className="row">
              <div className="column">
                    <div>
                      <form onSubmit={this.submitHandler}>
                      <div className="input-field col s6" >
                          <input type="text" id="first_name" onChange={this.fnameHandler}/>
                          <label htmlFor="first_name">First Name</label>
                          <button className="btn-small teal darken-5">Submit</button>
                      </div>
                      </form>
                  
                      
                    </div>
              </div>
              <div className="column">
                      {message}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
