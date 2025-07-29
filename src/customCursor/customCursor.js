import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import CursorEffects from './cursor/Effects/CursorEffects';
import Cursor from './cursor/Shape/Cursor';
import CursorRibbon from './cursor/Shape/CursorRibbon/CursorRibbon';
import useCursorVisibility from './hooks/useCursorVisibility';
import useWPAjax from './utils/useWPAjax';
import { useFilterCursorData } from './hooks/useFilterCursorData';
// const { createRoot } = window.ReactDOM;

const CustomCursor = ({ cursorInfo }) => {
  const { data, isLoading } = useWPAjax('csb_get_adv_scrollbar_cursor_data_settings', { nonce: window.crblCursorConfig?.nonce });
  const [cursorData, setCursorData] = useState(null);
  const isCursorVisible = useCursorVisibility();
  const [state, setState] = useState(cursorInfo);

  useEffect(() => {
    document.addEventListener('bBlocksCustomEventOnCursor', function (e) {
      setState(e.detail.data);
    });
  }, [])

  // useEffect(() => {
  //   const dataFetched = (e) => {
  //     const { data } = e.detail || {};
  //     setCursorData(data);
  //   };

  //   window.addEventListener('dataFetched2', dataFetched);

  //   return () => {
  //     window.removeEventListener('dataFetched2', dataFetched);
  //   };
  // }, []);

  const filteredData = useFilterCursorData(state,cursorData);


  useEffect(() => {
    if (!isLoading && data) {
      setCursorData(data);
      // console.log("custom cursor data : ", data);
    }
  }, [data, isLoading]);

  return (
    <>
      {(filteredData?.shape?.type === 'ribbon' && isCursorVisible) && <CursorRibbon {...filteredData?.shape?.ribbon} />}

      {(filteredData?.shape?.type !== 'none' && filteredData?.shape?.type !== 'ribbon' && isCursorVisible) ? <Cursor shape={filteredData?.shape} domEl={window} eventEl={window} rect={{}} /> : null}

      {filteredData?.effect?.type && <CursorEffects effect={filteredData?.effect} key={filteredData?.effect?.type} />}
    </>
  );


};

export default CustomCursor;

document.addEventListener('DOMContentLoaded', () => {
  // const dom = document.createElement('div');
  // document.body.appendChild(dom);
  // // document.querySelector('body').appendChild(dom);
  // const root = createRoot(dom);
  // root.render(<CustomCursor />);
  // Check if we're in the top-level window (not in an iframe)

  const cursorEl = document.getElementById('csbAdvScrollBarCursor');

  if (cursorEl) {
    const cursorData = JSON.parse(cursorEl.dataset.cursor);
    const root = createRoot(cursorEl);
    root.render(<CustomCursor cursorInfo={cursorData} />);

  } else {
    // Check if we're in the top-level window (not in an iframe)
    if (window.self === window.top) {
      const dom = document.createElement('div');
      // dom.style.position = 'relative';
      document.body.appendChild(dom);
      const root = createRoot(dom);
      root.render(<CustomCursor />);
    }
  }
})
