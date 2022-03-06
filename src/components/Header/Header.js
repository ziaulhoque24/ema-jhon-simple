import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';
const Header = () => {
    const [loggedUser , setLoggedUser] = useContext(UserContext);

    const signOut = ()=>{

        handleSignOut()
        .then(res =>{
          setLoggedUser(res);
        })    
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order review</NavLink>
                <NavLink to="/processed">Processed</NavLink>
                {loggedUser.name && <span><span style={{color : "red"}}>{loggedUser?.name}</span>
                <button onClick={signOut}>Sign Out</button> </span>}
            </nav>
        </div>
    );
};

export default Header;