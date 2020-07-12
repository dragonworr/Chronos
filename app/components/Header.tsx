import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ApplicationContext } from '../context/ApplicationContext';

export interface HeaderProps {
  app: string;
  service: string;
  live: boolean;
  setLive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.SFC<HeaderProps> = ({ app, service, setLive, live }) => {
  const history = useHistory();

  const { servicesData } = useContext(ApplicationContext);

  return (
    <div>
      <h1>{app}</h1>
      <h3>{service} data</h3>
      <select name="microservice" value={service} onChange={e => history.replace(e.target.value)}>
        {servicesData.map(({ _id, microservice }: any) => (
          <option key={_id} value={`${microservice}`} selected={service === microservice}>
            {microservice}
          </option>
        ))}
        <option value="communications" selected={service === 'communications'}>
          communications
        </option>
      </select>
      <button onClick={() => setLive(!live)}>
        {live ? (
          <div>
            <span className="dot"></span>Live
          </div>
        ) : (
          <div>Gather Live Data</div>
        )}
      </button>
      <button onClick={() => history.goBack()}>
        Return to Applications
      </button>
    </div>
  );
};

export default Header;
