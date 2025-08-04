import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useCursor } from '../../../hooks/useCursor';
import { isSet } from '../../../utils/common';
import "./style.scss";
const CursorFollow = ({ duration = 0.6, innerDuration = 0.1, size, followBg, followBorderColor, followBorderWidth, innerBg, innerBorderColor, innerBorderWidth, domEl = null }) => {

    const cursorRef = useRef(null);
    const innerCursorRef = useRef(null);
    const { cursorPosition } = useCursor(domEl);

    useEffect(() => {
        const cursor = cursorRef.current;
        const innerCursor = innerCursorRef.current;
        // Update main cursor immediately
        gsap.to(cursor, { x: cursorPosition.x, y: cursorPosition.y, duration, ease: 'power3' });
        gsap.to(innerCursor, { x: cursorPosition.x, y: cursorPosition.y, duration: innerDuration, ease: 'power3' });
    }, [cursorPosition]);


    const followCursorStyle = {
        ...(isSet(size) && { "--advScrollbar-follow-cursor-size": size }),
        ...(isSet(followBg) && { "--advScrollbar-follow-cursor-bg": followBg }),
        ...(isSet(followBorderColor) && { "--advScrollbar-follow-cursor-border-color": followBorderColor }),
        ...(isSet(followBorderWidth) && { "--advScrollbar-follow-cursor-border-width": followBorderWidth }),
    };


    const innerCursorStyle = {
        ...(isSet(size) && { "--advScrollbar-follow-cursor-size": size }),
        ...(isSet(innerBg) && { "--advScrollbar-follow-inner-cursor-bg": innerBg }),
        ...(isSet(innerBorderColor) && { "--advScrollbar-follow-inner-cursor-border": innerBorderColor }),
        ...(isSet(innerBorderWidth) && { "--advScrollbar-follow-inner-cursor-border-width": innerBorderWidth }),
    }

    return <>
        <div style={followCursorStyle} className="advScrollbar-follow-cursor" ref={cursorRef}></div>
        <div style={innerCursorStyle} className="advScrollbar-follow-inner-cursor" ref={innerCursorRef}></div>
    </>
};

export default CursorFollow;