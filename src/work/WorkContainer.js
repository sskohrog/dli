import React, { useContext, useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { GlobalContext } from '../services/GlobalContext';
import './Work.scss';

function WorkContainer({ id }) {
  const { getWorkItem } = useContext(GlobalContext);
  const [work, setWork] = useState();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    (async () => {
      if (id) {
        const workItem = await getWorkItem(id);
        setWork(workItem);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className='work-container'>
      <div className='row'>
        <div className='col-12'>
          <ItemsCarousel
            infiniteLoop
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={window.innerWidth <= 768 ? 1 : 3}
            gutter={20}
            leftChevron={<span className='left-btn'>{'<'}</span>}
            rightChevron={<span className='right-btn'>{'>'}</span>}
            chevronWidth={40}
            classes={{
              wrapper: 'carousel-container',
              itemsInnerWrapper: 'carousel-wrapper'
            }}
          >
            {((work || {}).carousel || []).map((img) => {
              return (
                <img alt='carousel item' className='carousel-img' src={img} />
              );
            })}
          </ItemsCarousel>
        </div>
        <div
          className='col-12'
          style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center'
          }}
        >
          <u
            style={{
              fontSize: '14px',
              fontWeight: 700,
              textAlign: 'center',
              paddingTop: '38px',
              paddingBottom: '12px'
            }}
          >
            {work?.workName}
          </u>
          <div
            style={{
              fontSize: '12px',
              textAlign: 'center',
              width: '500px'
            }}
            dangerouslySetInnerHTML={{
              __html: work?.info
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkContainer;
