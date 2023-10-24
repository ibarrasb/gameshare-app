import React, {useContext, useState} from 'react';
import {GlobalState} from '../../../GlobalState'

function Home() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [name] = state.UserAPI.name
    const [consoles] = state.UserAPI.consoles

    const loggedRouter = () => {
        return(
            <div className="container">
            <div>Welcome</div>
            <div>{name}</div>
          </div>
          
        )
    }
    
    return (
        <div>
            <h1> {isLogged ? loggedRouter() : ''}</h1>
            <div>
                {consoles.map((console, index) => (
                    <h1 key={index}>{console}</h1>
                ))}
            </div>
        </div>
    );
}

export default Home;