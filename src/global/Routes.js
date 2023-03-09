import { Router } from '@reach/router';
import React from 'react';
import IndexContainer from '../index/IndexContainer';
import InfoContainer from '../info/InfoContainer';
import LandingContainer from '../landing/LandingContainer';
import WorkContainer from '../work/WorkContainer';

function Routes() {
  return (
    <Router className='row'>
      <LandingContainer path='/' />
      <InfoContainer path='/info' />
      <IndexContainer path='/index' />
      <WorkContainer path='/work/:id' />
    </Router>
  );
}

export default Routes;
