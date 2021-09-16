import React, { useContext, useState } from 'react';
import { GlobalContext } from '../services/GlobalContext';
import './Landing.scss';

function LandingContainer() {
  const { landingData } = useContext(GlobalContext);
  const [project, setProject] = useState(null);

  return (
    <div className='landing-container'>
      {project && (
        <div className='project-container'>
          <h4 className='project-name'>{(project || {}).name}</h4>
          <h4 className='project-name'>{(project || {}).client}</h4>
        </div>
      )}
    </div>
  );
}

export default LandingContainer;
