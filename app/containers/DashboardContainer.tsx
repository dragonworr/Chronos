<<<<<<< HEAD
import React, { useEffect, useContext } from 'react';
=======
import React from 'react';
>>>>>>> 34d5b92b074c6324c6560538253e08b64f450e51
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './MainContainer';
import SidebarContainer from './SidebarContainer';
import HealthContextProvider from '../context/HealthContext';
import CommsContextProvider from '../context/CommsContext';
import ApplicationContextProvider from '../context/ApplicationContext';
import DashboardContextProvider from '../context/DashboardContext';
import DockerContextProvider from '../context/DockerContext';
import '../stylesheets/Dashboard.scss';
// import { DashboardContext } from '../context/DashboardContext';

const DashboardContainer = React.memo(() => (
  <Router>
    <div className="dash">
      <ApplicationContextProvider>
        <DashboardContextProvider>
          <CommsContextProvider>
            <DockerContextProvider>
              <HealthContextProvider>
                <SidebarContainer />
                <MainContainer />
              </HealthContextProvider>
            </DockerContextProvider>
          </CommsContextProvider>
        </DashboardContextProvider>
      </ApplicationContextProvider>
    </div>
  </Router>
));

export default DashboardContainer;
