import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import CursorEffects from './cursor/Effects/CursorEffects';
import Cursor from './cursor/Shape/Cursor';
import CursorRibbon from './cursor/Shape/CursorRibbon/CursorRibbon';
import useCursorVisibility from './hooks/useCursorVisibility';
import { useFilterCursorData } from './hooks/useFilterCursorData';
import useWPAjax from './utils/useWPAjax';
// const { createRoot } = window.ReactDOM;

import "./style.scss";
import { isSet } from './utils/common';

const CustomCursor = ({ cursorInfo}) => {
  const { data, isLoading } = useWPAjax('csb_get_adv_scrollbar_cursor_data_settings', { nonce: window.csbAdvScrollbarCursorConfig?.nonce });
  const [cursorData, setCursorData] = useState(null);
  const isCursorVisible = useCursorVisibility();
  const [state, setState] = useState(cursorInfo);

  useEffect(() => {
    document.addEventListener('advScrCursorCustomEventOnCursor', function (e) {
      setState(e.detail.data);
    });
  }, [])
  const filteredData = useFilterCursorData(state, cursorData);
  const { enableCursor = true } = filteredData || {};

  useEffect(() => {
    if (!isLoading && data) {
      setCursorData(data);
    }
  }, [data, isLoading]);

  const cursorCssVar = {
    ...((isSet(filteredData?.shape?.customImg?.img) && filteredData?.source == "predefined") && { cursor: `url(${filteredData?.shape?.customImg?.img}), pointer` }),
    ...(filteredData?.source == "shape" && { cursor: enableCursor ? "auto" : "none" }),
    ...(filteredData?.source == "customUrl" && { cursor: `url(${filteredData?.shape?.customImg?.url}), pointer` }),
  }

  useEffect(() => {
    if (window.self === window.top && cursorCssVar?.cursor) {
      const body = document.body;
      body.style.cursor = cursorCssVar.cursor;
    }
  }, [filteredData])

  return (
    <>
      {
        filteredData?.source == "shape" && <>
        {(filteredData?.shape?.type === 'ribbon' && isCursorVisible) && <CursorRibbon {...filteredData?.shape?.ribbon} domEl={window} eventEl={window} rect={{}} key={filteredData?.shape?.type} />}
  
        {(filteredData?.shape?.type && filteredData?.shape?.type !== 'ribbon' && isCursorVisible) ? <Cursor shape={filteredData?.shape} domEl={window} eventEl={window} rect={{}} key={filteredData?.shape?.type} /> : null}
        </>
      }
      {filteredData?.effect?.type && <CursorEffects effect={filteredData?.effect} key={filteredData?.effect?.type} />}
    </>
  );


};

export default CustomCursor;

document.addEventListener('DOMContentLoaded', () => {

  const cursorEl = document.getElementById('csbAdvScrollBarCursor');

  if (cursorEl) {
    const cursorData = JSON.parse(cursorEl.dataset.cursor);
    const root = createRoot(cursorEl);
    root.render(<CustomCursor cursorInfo={cursorData} />);

  } else {
    // Check if we're in the top-level window (not in an iframe)
    if (window.self === window.top) {
      const dom = document.createElement('div');
      document.body.appendChild(dom);
      const root = createRoot(dom);
      root.render(<CustomCursor />);
    }
  }
})
