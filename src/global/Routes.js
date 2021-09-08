import { Router } from '@reach/router';
import React from 'react';
import LandingContainer from '../landing/LandingContainer';
import WorkContainer from '../work/WorkContainer';

function Routes() {
  return (
    <Router className='row'>
      <LandingContainer path='/' />
      <WorkContainer path='/work/:id' />
    </Router>
  );
}

export default Routes;
