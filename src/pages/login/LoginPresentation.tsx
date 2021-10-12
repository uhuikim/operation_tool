import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';

const LoginPresentation = ({}) => {
  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <div
        style={{
          width: '35vw',
          height: '100vh',
          backgroundColor: '#004369',
        }}
      >
        <div>
          <IoSettingsSharp
            style={{
              width: '150px',
              height: '150px',
              color: 'white',
            }}
          />
          <IoSettingsSharp
            style={{
              width: '200px',
              height: '200px',
              color: 'white',
            }}
          />
          <IoSettingsSharp
            style={{
              width: '100px',
              height: '100px',
              color: 'white',
            }}
          />
          <p
            style={{
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              fontSize: '2rem',
            }}
          >
            Operation Tool
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPresentation;
