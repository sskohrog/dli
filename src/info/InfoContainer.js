import React, { useContext, useState } from 'react';
import SlidingPane from 'react-sliding-pane';
import { GlobalContext } from '../services/GlobalContext';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Info.scss';
import { PRESS, PUBLICATIONS, RESUME } from '../global/PANEL_CATEGORIES';

function InfoContainer() {
  const { aboutData, resumeData, pressData } = useContext(GlobalContext);
  const [state, setState] = useState({
    panelData: null,
    isPanelOpen: false
  });

  let renderContent = () => {
    switch (state.panelData) {
      case RESUME:
        return <ResumePanel resumeData={resumeData} />;
      case PUBLICATIONS:
        return (
          <PublicationPanel publicationData={(resumeData || {}).publication} />
        );
      case PRESS:
        return <PressPanel pressData={pressData} />;
      default:
        return null;
    }
  };

  return (
    <div className='info-container'>
      <div className='row'>
        <div
          className='col-6 about-container'
          dangerouslySetInnerHTML={{ __html: aboutData.description }}
        ></div>
      </div>
      <div className='bottom-container'>
        <div className='content-container'>
          <img
            className='danya-img mb-3'
            src={((aboutData || {}).contact || {}).img}
            alt="Danya's Avatar"
          />
          <b>CONTACT</b>
          <a href={`mailto:${((aboutData || {}).contact || {}).email}`}>
            {((aboutData || {}).contact || {}).email}
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={`${((aboutData || {}).contact || {}).instagram}`}
          >
            {((aboutData || {}).contact || {}).instagram}
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={`${((aboutData || {}).contact || {}).linkedin}`}
          >
            {((aboutData || {}).contact || {}).linkedin}
          </a>
        </div>
        <div className='nav-panel-container'>
          <a
            className='btn btn-link menu-btn'
            target='_blank'
            rel='noreferrer'
            href='google.com'
          >
            <b>VISIT PHOTOGRAPHY PAGE</b>
          </a>
          <button
            className='btn btn-link menu-btn'
            onClick={() => setState({ panelData: RESUME, isPanelOpen: true })}
          >
            <b>RESUME</b>
          </button>
          <button
            className='btn btn-link menu-btn'
            onClick={() =>
              setState({ panelData: PUBLICATIONS, isPanelOpen: true })
            }
          >
            <b>PUBLICATIONS</b>
          </button>
          <button
            className='btn btn-link menu-btn'
            onClick={() => setState({ panelData: PRESS, isPanelOpen: true })}
          >
            <b>PRESS</b>
          </button>
        </div>
      </div>

      <SlidingPane
        closeIcon={
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.4429 19.7286L19.5 1.67148'
              stroke='black'
              stroke-width='4'
            />
            <line
              x1='2.55704'
              y1='1.72864'
              x2='20.557'
              y2='19.7286'
              stroke='black'
              stroke-width='4'
            />
          </svg>
        }
        isOpen={state.isPanelOpen}
        from='right'
        onRequestClose={() => setState({ panelData: null, isPanelOpen: false })}
      >
        {renderContent()}
      </SlidingPane>
    </div>
  );
}

function ResumePanel({ resumeData }) {
  return (
    <div className='panel-content-container'>
      <b className='mb-3'>EDUCATION</b>
      {((resumeData || {}).education || []).map((edu) => (
        <b>
          <i>
            {(edu || {}).school}
            <br />
            {(edu || {}).focus}
          </i>
        </b>
      ))}
      <b className='mt-5 mb-3'>PROFESSIONAL EXPERIENCE</b>
      {((resumeData || {}).experience || []).map((exp) => (
        <b>
          <i>
            {(exp || {}).jobtitle}
            <br />
            {(exp || {}).client}
            <br />
            {(exp || {}).location}
          </i>
        </b>
      ))}
    </div>
  );
}

function PublicationPanel({ publicationData }) {
  return (
    <div className='panel-content-container'>
      <b className='mb-3'>PUBLICATIONS</b>
      {(publicationData || []).map((pub) => (
        <b>
          <i>{pub}</i>
        </b>
      ))}
    </div>
  );
}

function PressPanel({ pressData }) {
  return (
    <div className='panel-content-container'>
      <b className='mb-3'>PRESS</b>
      {Object.keys(pressData || {}).map((key) => (
        <a className='panel-links mb-3' href={(pressData[key] || {}).url}>
          <b>{(pressData[key] || {}).title}</b>
        </a>
      ))}
    </div>
  );
}

export default InfoContainer;
