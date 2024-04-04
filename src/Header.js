import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import basket from './basket.png'
import { Link } from 'react-router-dom';
import { DataContext } from './Context';



export default function Header({ user, onLogin }) {
  const navigate = useNavigate();
  const { cartItems } = useContext(DataContext);
  
  function logout() {
    onLogin(null); 
    navigate('/');
  }

  const headerStyle = {
    backgroundColor: '#704d76', 
    padding: '8px 0', 
    height:'45px'
  };

  const linkStyle = {
    color: '#ffff', 
    textDecoration: 'none', 
    margin: '0 20px', 
    fontWeight: 'bold'
  };

  const badgeStyle = {
    position: 'absolute',
    top: '-16px', 
    right: '9px', 
    backgroundColor: '#F4AFA0',
    color: '#ffffff',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    transform: 'translate(-19%, 50%)', 
  };

  const buttonStyle = {
    backgroundColor: '#F6AFA7', 
    color: '#ffffff',
    borderRadius: '9999px', 
    padding: '4px 16px', 
    border: 'none', 
    cursor: 'pointer', 
  }
  return (
    <div style={headerStyle}>
      <nav className="container mx-auto flex justify-between items-center">
        <ul style={{ display: 'flex', alignItems: 'center', listStyleType: 'none' }}>
          <li><Link style={linkStyle} to="/">Нүүр хуудас</Link></li>
          <li><Link style={linkStyle} to="/product">Бараанууд</Link></li>
          <li><Link style={linkStyle} to="/order">Захиалга өгөх</Link></li>
          <li><Link style={linkStyle} to="/about">Бидний тухай</Link></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', listStyleType: 'none'}}>
          <li style={{ position: 'relative' }}>
            <Link style={{ ...linkStyle, display: 'flex', alignItems: 'center' }} to="/basket">
              <span style={badgeStyle}>{cartItems.length}</span>
              <img style={{ height: '28px', width: '28px' }} src={basket} alt="Basket"/>
            </Link>
          </li>

          {!user && <Link to='/login'><button style={buttonStyle}>Login</button></Link>}
          {user && <button style={buttonStyle} onClick={logout}>Logout</button>}
        </div>
      </nav>
    </div>
  );
}
