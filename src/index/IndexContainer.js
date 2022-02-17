import { navigate } from '@reach/router';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../services/GlobalContext';
import './IndexContainer.scss';

function IndexContainer() {
  const { indexData } = useContext(GlobalContext);
  const [filterType, setFilterType] = useState(undefined);
  const [indexImage, setIndexImage] = useState(undefined);

  return (
    <div className='index-container'>
      <div className='row filter-container'>
        <div className='col'>
          <button
            className='btn btn-link filter-btn'
            onClick={() => setFilterType(undefined)}
          >
            ALL
          </button>
        </div>
        <div className='col'>
          <button
            className='btn btn-link filter-btn'
            onClick={() => setFilterType('setdesign')}
          >
            SET DESIGN
          </button>
          <button
            className='btn btn-link filter-btn'
            onClick={() => setFilterType('architecture')}
          >
            ARCHITECTURE
          </button>
          <button
            className='btn btn-link filter-btn'
            onClick={() => setFilterType('research')}
          >
            RESEARCH
          </button>
        </div>
      </div>
      <div className='row project-list-container'>
        <div className='col-7'>
          {Object.keys(indexData || {}).map((key) => (
            <div
              visibility
              style={{
                visibility:
                  filterType && indexData[key].category !== filterType
                    ? 'hidden'
                    : 'visible'
              }}
              className='index-item'
              onClick={() => navigate(`work/${indexData[key].path}`)}
              dangerouslySetInnerHTML={{
                __html: indexData[key].title
              }}
            />
          ))}
        </div>
        <div className='col-5'>
          <img
            className='danya-img mb-3'
            src={(indexImage || {}).src}
            alt={(indexImage || {}).alt}
          />
        </div>
      </div>
    </div>
  );
}

export default IndexContainer;
