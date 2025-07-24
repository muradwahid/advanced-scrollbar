import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { useScrollbar } from '../hooks/useScrollbar';
import { isSet } from '../utils/function';
import "./style.scss";
const Scrollbar = ({ scrollbarData }) => {
    const { asb_showscrollbar, asb_color = '', asb_background = '', asb_mousescrollstep = 40, asb_autohidemode= false, asb_railalign="right"    } = scrollbarData;
    // console.log(scrollbarData)
    const thumbRef = useRef(null);
    const railRef = useRef(null);
    const showScrollbar = JSON.parse(asb_showscrollbar);

    const autoHideMode = asb_autohidemode === "coursor" ? "coursor" : JSON.parse(asb_autohidemode);

    const { isWheel, isLoading, thumbHeight, thumbPosition } = useScrollbar(railRef, thumbRef, showScrollbar, Number(asb_mousescrollstep));
    useEffect(() => {
        if (window.self === window.top && showScrollbar) {
            document.documentElement.classList.add('csb-scrollbar-active');
        } else {
            document.documentElement.classList.remove('csb-scrollbar-active');
        }

        // Cleanup function to remove the class when the component unmounts
        return () => {
            document.documentElement.classList.remove('csb-scrollbar-active');
        };
    }, [showScrollbar]);

    const styles = {
        ...(showScrollbar && { "--csb-scrollbar-rail-display-property": 'block' }),
        ...(isSet(asb_background) && { "--csb-scrollbar-rail-background-color": asb_background }),


    };
    const thumbStyles = {
        ...(isSet(thumbHeight) && { "--csb-scrollbar-thumb-height": thumbHeight + "px" }),
        ...(isSet(thumbPosition) && { "--csb-scrollbar-thumb-position": thumbPosition + "px" }),
        ...(isSet(asb_color) && { "--csb-scrollbar-thumb-color": asb_color }),
    }

    // const dynamicClassRail = autoHideMode === "cursor" ? "csb-scrollbar-rail-cursor" : autoHideMode ? isWheel ?"csb-scrollbar-auto-hide":"":""

    let dynamicClassRail = '';
        if (autoHideMode == 'coursor') {
            // This class shows the scrollbar on hover
            dynamicClassRail = 'csb-scrollbar-rail-cursor-hover';
        } else if (autoHideMode) {

            // This class hides the scrollbar when not actively wheel-scrolling
            dynamicClassRail = 'csb-scrollbar-auto-hide';
        }


    if (isLoading) return;

    return (
        <div ref={railRef} className={`csb-scrollbar-rail railAlign${asb_railalign} ${isWheel ? dynamicClassRail : ""}`} style={{ ...styles }}>
            <div className='csb-scrollbar-rail-thumb' ref={thumbRef} style={{ ...thumbStyles }} />
        </div>
    );
};

export default Scrollbar;

document.addEventListener('DOMContentLoaded', () => {
    const scrollbarEl = document.getElementById("csbScrollbar");
    const scrollbarData = JSON.parse(scrollbarEl.dataset.scrollbar);
    const root = createRoot(scrollbarEl);
    root.render(<Scrollbar scrollbarData={scrollbarData} />);
    scrollbarEl.removeAttribute('data-scrollbar')
});



