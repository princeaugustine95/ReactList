import React from 'react';
import './Cardpanel.css';

const Cardpanel=(props)=>{
            let id=props.id;
            let nclass=props.changecolor?'headcolor':'';
            
    return(
        <div  className="card-panel grey darken-3">
                    <h1 className={`${nclass} center-align white-text`}>{props.name}</h1>
                    <span className="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
            <button className="btn-floating pulse right" onClick={()=>props.delete(id)}><i className="material-icons">delete</i></button>
        </div>
    )

}
export default Cardpanel;