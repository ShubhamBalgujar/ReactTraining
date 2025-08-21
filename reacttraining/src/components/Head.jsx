import React from 'react';
import burgerlogo from "../images/burgerlogo.png";
import { Link } from 'react-router-dom';


const Head = () => {

  //console.log('header ')
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 1000,
      background: '#f5f5f5',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      padding: 0
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: '60px',
        padding: '10px 20px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Left: Menu */}
        <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
          <img
            src={burgerlogo}
            alt="Burger Bar Logo"
            style={{
              height: 30,
              cursor: 'pointer',
            }}
            onClick={() => toggleMenuHandler()}
          />
        </div>

        {/* Middle: Search */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              maxWidth: '500px',
              padding: '8px 12px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Right: User Icon */}
        <Link to="/user">
          <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
            <span style={{
              display: 'inline-block',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#ddd',
              textAlign: 'center',
              lineHeight: '32px',
              fontSize: '18px',
              color: '#555'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#555" strokeWidth="2" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#555" strokeWidth="2" />
              </svg>
            </span>
          </div>
        </Link>

      </div>
    </header>
  );
};

export default Head;