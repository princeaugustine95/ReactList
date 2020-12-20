import React from 'react';

const Cardpanel=(props)=>{

    return(
        <div key={props.id} className="card-panel grey darken-3">
                    <h1 className="center-align white-text">{props.name}</h1>
                    <span class="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
            <button class="btn-floating pulse right">Know More</button>
        </div>
    )

}
export default Cardpanel;