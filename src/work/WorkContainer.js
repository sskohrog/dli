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
                <img
                  alt='carousel item'
                  className='carousel-img'
                  src={img.url}
                />
              );
            })}
          </ItemsCarousel>
        </div>
      </div>
    </div>
  );
}

export default WorkContainer;
