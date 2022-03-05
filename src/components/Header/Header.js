import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/processed">Processed</Link>
                {loggedUser.name && <span><span style={{color : "red"}}>{loggedUser?.name}</span>
                <button onClick={signOut}>Sign Out</button> </span>}
            </nav>
        </div>
    );
};

export default Header;