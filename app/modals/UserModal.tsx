/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import { DashboardContext } from '../context/DashboardContext';
import { guestUser } from '../context/helpers';
import '../stylesheets/UserModal.scss';
import { Button } from '@material-ui/core';

const { ipcRenderer } = window.require('electron');

interface UserModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserModal: React.FC<UserModalProps> = React.memo(({ setOpen }) => {
  const { user, setUser, setApplications, setMode } = useContext(DashboardContext);

  const navigate = useNavigate();
  
  return (
    <div className="add-container">
      <div className="add-header">
        <div>
          <h2>Hello {user}</h2> <PersonIcon className="navIcon" id="personIcon" />
        </div>
        {user === 'guest' ?
        <>
          <Button variant='contained' color='primary' onClick={() => navigate('/login')}>Log In</Button>
          <br></br><br></br>
          <Button variant="outlined" color='primary' onClick={() => navigate('/signup')}>Sign Up</Button>
          <br></br><br></br>
        </>
        :
        <>
          <Button variant='outlined' color='primary' onClick={handleSignout}>Log Out</Button>
          <br></br><br></br>
        </>

        }
        <Button variant='outlined' onClick={() => setOpen(false)}>Close</Button>
      </div>
    </div>
  );

  function handleSignout() {
    setUser(guestUser.username);
    setApplications(guestUser.services);
    setMode(guestUser.mode);
    ipcRenderer.sendSync('signOut');
    setOpen(false);
  }
});

export default UserModal;
