import { createRoot } from 'react-dom/client';
import "./style.scss";
import { isSet } from '../utils/function';
import { useEffect, useRef } from 'react';
import { useScrollbar } from '../hooks/useScrollbar';
const Scrollbar = ({ scrollbarData }) => {
    const thumbRef = useRef(null);
    const railRef = useRef(null);
    const showScrollbar = JSON.parse(scrollbarData?.asb_showscrollbar);
    const { isLoading, isActive, thumbHeight, thumbPosition } = useScrollbar(railRef,thumbRef, showScrollbar);

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
        ...(showScrollbar && { "--csb-scrollbar-display-property": 'block' }),
        ...(isSet(thumbPosition) && {"--csb-scrollbar-position": thumbPosition+"px"}),
        ...(isSet(thumbHeight) && { "--csb-scrollbar-height": thumbHeight + "px" }),

        
    };

    if (isLoading) return;

    return (
        <div ref={railRef} className='csb-scrollbar-rail' style={{ ...styles}}>
            <div className='csb-scrollbar-rail-thumb' ref={thumbRef} key={isActive}/>
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



