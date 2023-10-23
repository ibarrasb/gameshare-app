import React, {useContext} from 'react';
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged

    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = "/"
    }

    const loggedRouter = () => {
        return(
            <div>
            <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </div>
        )
    }

    return (
    <header>

        <div className='logo'>
            <h1>
                    Gameshare
            </h1>
        </div>

        <ul>
                        
            {
                isLogged ? loggedRouter() : ''
            } 

        </ul>   
    </header>
    );
}

export default Header;