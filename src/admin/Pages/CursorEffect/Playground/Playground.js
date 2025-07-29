import { useEffect, useRef, useState } from 'react';

import { useWPAjax } from "../../../../../../bpl-tools/hooks";

import CursorEffects from '../../../../customCursor/cursor/Effects/CursorEffects';
import Cursor from '../../../../customCursor/cursor/Shape/Cursor';
import CursorRibbon from '../../../../customCursor/cursor/Shape/CursorRibbon/CursorRibbon';
import useCursorVisibility from "../../../../customCursor/hooks/useCursorVisibility";
import Card from './Card';
import { cardOptions } from './options';
// import CursorEffects from '../../../../src/settings/options/CursorEffects';
const Playground = ({ dataInfo }) => {
  const { dirUrl, nonce } = dataInfo;

  const { data, isLoading } = useWPAjax('csb_get_adv_scrollbar_cursor_data_settings', {nonce }); //authorize
  const [cursorData, setCursorData] = useState(null);
  const isCursorVisible = useCursorVisibility();
  const dashboardRef = useRef(null);


  useEffect(() => {
    const dataFetched = (e) => {
      const { data } = e.detail || {};
      setCursorData(data);
    };


    window.addEventListener('csbAdvScrollbarCursorSettings', dataFetched);

    return () => {
      window.removeEventListener('csbAdvScrollbarCursorSettings', dataFetched);
    };

  }, []);

  useEffect(() => {
    if (!isLoading && data) {
      setCursorData(data);
    }
  }, [data, isLoading]);
  const baseLink = 'https://b-blocks.com';

  return <div className='custom-cursor-playground-container' >
    <h3 className='custom-cursor-title'>Playground</h3>
    <div className='custom-cursor-playground' ref={dashboardRef}>
      <div className='custom-cursor-playground-contents-wrapper'>
        <h2 className='custom-cursor-playground-contents-title'>B Blocks – The ultimate block collection<br /> and Gutenberg page builder.</h2>
        <p className='custom-cursor-playground-contents-description'><a href={baseLink} target='_blank' rel="noreferrer" className='cursorPlaygroundLink'>B Blocks</a> is a lightweight and flexible Gutenberg plugin that transforms the native block editor into a powerful page builder for WordPress. Designed with performance and usability in mind, B Blocks extends the capabilities of core blocks by adding 30+ custom elements, pre-built Gutenberg templates, and flexible layout options—all without the need for bulky third-party tools.</p>

        <div className='custom-cursor-playground-contents-button-wrapper'>
          <a href={`${baseLink}/#demos`} target='_blank' rel="noreferrer" className='bPlDashboardPrimaryBtn'>See Demo</a>
          <a href={`${baseLink}/#pricing`} target='_blank' rel="noreferrer" className='bPlDashboardSecondBtn'>Buy Now</a>
        </div>

        <div className='custom-cursor-playground-contents-features'>
          {cardOptions.map((value, i) => <Card key={i} {...value} />)}
        </div>

      </div>
      {/* <button style={{height:"50px",width:"100px",marginInline:"auto"}}>Hover me</button> */}
      {(cursorData?.shape?.type === 'ribbon' && isCursorVisible) && <CursorRibbon {...cursorData?.shape?.ribbon} domEl={dashboardRef.current} eventEl={dashboardRef.current} rect={dashboardRef.current.getBoundingClientRect()} key={cursorData?.shape?.type} />}

      {(cursorData?.shape?.type && cursorData?.shape?.type !== 'ribbon' && isCursorVisible) ? <Cursor shape={cursorData?.shape} domEl={dashboardRef.current} eventEl={dashboardRef.current} rect={dashboardRef.current.getBoundingClientRect()} key={cursorData?.shape?.type} /> : null}

      {cursorData?.effect?.type && <CursorEffects domEl={dashboardRef.current} effect={cursorData?.effect} key={cursorData?.effect?.type} />}
      {/* {cursorData?.effect?.type !== 'none' && <CursorEffects effect={cursorData?.effect} key={cursorData?.effect?.type} isDashboard={true} />} */}
    </div>
  </div>
};

export default Playground;