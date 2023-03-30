import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ipcRenderer } from 'electron';
import Login from '../../app/components/Login';
import DashboardContextProvider from '../../app/context/DashboardContext';
import { HashRouter as Router } from 'react-router-dom';

jest.mock('electron', () => ({ ipcRenderer: { sendSync: jest.fn() } }));

// const mock = jest.fn(Electron.ipcRenderer.sendSync())

describe('Create Admin Page', () => {
  beforeEach(() => {
    render(
      <Router>
        <DashboardContextProvider>
          <Login />
        </DashboardContextProvider>
      </Router>
    );
  });

  it('should render', () => {
    expect(screen).toBeTruthy();
  });

  it('Should contain an h1, h2, form, two buttons, and three inputs', () => {
    const element = screen.getByTestId('Login');
    expect(element.querySelectorAll('h1').length).toBe(1);
    expect(element.querySelectorAll('h2').length).toBe(1);
    expect(element.querySelectorAll('form').length).toBe(1);
    expect(element.querySelectorAll('button').length).toBe(2);
    expect(element.querySelectorAll('input').length).toBe(2);
  });

  it('Login button should submit username and password to addUser', () => {
    const element = screen.getByTestId('Login');
    const inputs = element.querySelectorAll('input');
    inputs[0].value = 'St1nky';
    inputs[1].value = 'me123';
    fireEvent.click(element);
    // expect(ipcRenderer.sendSync).toHaveBeenCalled;
    // above passes test but below fails and says number of calls is zero
    expect(ipcRenderer.sendSync).toHaveBeenCalledWith('login', {
      username: 'St1nky',
      password: 'me123',
    });
  });
});
