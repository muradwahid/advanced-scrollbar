import { useEffect, useRef, useState } from "react";

export const useScrollbar = (railRef = null, thumbRef = null, isShowScrollbar = false, wheelStep = 40) => {
    const isClick = true, isDrag = true;
    const [isActive, setIsActive] = useState(false);
    const startY = useRef(0);
    const startScrollTop = useRef(0);
    const [isDragging, setIsDragging] = useState(false);
    const [thumbHeight, setThumbHeight] = useState("");
    const [thumbPosition, setThumbPosition] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isWheel, setIsWheel] = useState(true);

    const html = document.documentElement;




    // Function to handle thumb dragging and update position
    const handleThumbDrag = (clientY) => {
        // 1. Get current metrics
        const totalScrollableHeight = html.scrollHeight - html.clientHeight;
        if (totalScrollableHeight <= 0) return; // No scrolling needed

        // 2. Calculate drag distance and scroll ratio
        const dragDistanceY = clientY - startY.current;
        const availableTrackHeight = html.clientHeight - thumbHeight;

        // 3. Calculate new scroll position with boundaries
        const scrollRatio = dragDistanceY / availableTrackHeight;
        const unboundedScrollTop = startScrollTop.current + (scrollRatio * totalScrollableHeight);
        const boundedScrollTop = Math.max(0, Math.min(unboundedScrollTop, totalScrollableHeight));

        // 4. Update scroll position immediately
        html.scrollTop = boundedScrollTop;

        // 5. Calculate and set thumb position
        const scrollProgress = boundedScrollTop / totalScrollableHeight;
        const newThumbPosition = scrollProgress * availableTrackHeight;

        // Use direct assignment if possible, or ensure setThumbPosition is synchronous
        // thumbRef.current.style.top= `${newThumbPosition}px`;
        // Alternatively:  
        setThumbPosition(newThumbPosition);
    };

    useEffect(() => {
        setIsActive(isShowScrollbar);

        if (!isShowScrollbar) return;

        html.classList.add('csb-scrollbar-active');

        const updateScrollbar = () => {
            if (!thumbRef.current) return;

            const scrollableHeight = html.scrollHeight - html.clientHeight;
            if (scrollableHeight <= 0) return;

            // Calculate thumb height (minimum 20px)
            const newThumbHeight = Math.max(
                (html.clientHeight / html.scrollHeight) * html.clientHeight,
                20
            );
            setThumbHeight(newThumbHeight);

            // Update thumb position
            const scrollPercentage = html.scrollTop / scrollableHeight;
            const maxThumbPosition = html.clientHeight - newThumbHeight;
            setThumbPosition(scrollPercentage * maxThumbPosition);
        };

        const handleMouseMove = (e) => {
            // e.preventDefault();
            if (!isDragging || !thumbRef?.current || !isDrag) return;
            handleThumbDrag(e.clientY);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';

        };

        const handleMouseClick = (e) => {
            // e.preventDefault();
            // if (!railRef.current || !thumbRef.current || typeof thumbHeight !== 'number' || !isClick) return;

            // const scrollableHeight = html.scrollHeight - html.clientHeight;
            // if (scrollableHeight <= 0) return;

            // const railHeight = html.clientHeight;
            // const clickY = e.clientY;

            // // Center the thumb on the click position
            // const newThumbTop = clickY - (thumbHeight / 2);
            // const thumbTrackHeight = railHeight - thumbHeight;

            // // Clamp the thumb position to stay within the track
            // const clampedThumbTop = Math.max(0, Math.min(newThumbTop, thumbTrackHeight));

            // const scrollRatio = thumbTrackHeight > 0 ? (clampedThumbTop / thumbTrackHeight) : 0;

            // // Set the new scroll position of the page
            // // html.scrollTop = scrollRatio * scrollableHeight;
            // window.scrollTo({
            //     top: scrollRatio * scrollableHeight,
            //     behavior: 'smooth'
            // });

            e.preventDefault();
            if (!railRef.current || !thumbRef.current || !isClick) return;

            const scrollableHeight = html.scrollHeight - html.clientHeight;
            if (scrollableHeight <= 0) return;

            const viewportHeight = html.clientHeight;
            const currentScrollTop = html.scrollTop;
            const thumbRect = thumbRef.current.getBoundingClientRect();

            let newScrollTop;

            if (e.clientY < thumbRect.top) {
                // Clicked above the thumb, scroll up by one page (100dvh)
                newScrollTop = currentScrollTop - viewportHeight;
            } else if (e.clientY > thumbRect.bottom) {
                // Clicked below the thumb, scroll down by one page (100dvh)
                newScrollTop = currentScrollTop + viewportHeight;
            } else {
                // Clicked on the thumb itself, do nothing.
                return;
            }

            // Clamp the new scroll position to stay within the valid range.
            const boundedScrollTop = Math.max(0, Math.min(newScrollTop, scrollableHeight));
            window.scrollTo({
                top: boundedScrollTop,
                behavior: 'smooth',
            });
        };

        let wheelId;

        const handleWheel = (e) => {
            // This handler is only attached if wheelStep is a truthy number.
            e.preventDefault();
            setIsWheel(false)
            const totalScrollableHeight = html.scrollHeight - html.clientHeight;
            if (totalScrollableHeight <= 0) return; // No scrolling needed

            const currentScrollTop = html.scrollTop;
            // Use Math.sign to determine direction and apply the step.
            const scrollAmount = Math.sign(e.deltaY) * wheelStep;

            const newScrollTop = currentScrollTop + scrollAmount;

            // Clamp the new scroll position to stay within the valid range.
            const boundedScrollTop = Math.max(0, Math.min(newScrollTop, totalScrollableHeight));

            // Programmatically scroll the page.
            html.scrollTop = boundedScrollTop;
            window.scroll({
                top: e.deltaY * 600,
                left: 0,
                behavior: 'smooth'
            });

            wheelId = setTimeout(() => {
                setIsWheel(true);
            }, 500);

        };

        // Initial setup
        updateScrollbar();
        window.addEventListener('resize', updateScrollbar);
        window.addEventListener('scroll', updateScrollbar);

        // Drag events
        thumbRef.current?.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            setIsDragging(true);
            startY.current = e.clientY;
            startScrollTop.current = html.scrollTop;
            // document.body.style.cursor = 'grabbing';
            // document.body.style.userSelect = 'none';
        });


        const handleThumbClick = (e) => {
            e.stopPropagation();
        }
        // click event on the rail
        railRef?.current?.addEventListener('click', handleMouseClick);
        thumbRef.current?.addEventListener('click', handleThumbClick);


        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('load', () => {
            updateScrollbar();
            setIsLoading(false);
        });

        // Add wheel event listener if wheelStep is provided
        // if (wheelStep) {
        //     document.addEventListener('wheel', handleWheel, { passive: false });
        // }
        document.addEventListener('wheel', handleWheel, { passive: false });


        // document.addEventListener('scrollend', () => { 
        //     setIsWheel(true);
        // })

        return () => {
            html.classList.remove('csb-scrollbar-active');
            window.removeEventListener('resize', updateScrollbar);
            window.removeEventListener('scroll', updateScrollbar);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('load', updateScrollbar);
            railRef?.current?.removeEventListener('click', handleMouseClick)
            thumbRef.current?.removeEventListener('click', handleThumbClick);
            if (wheelStep) {
                document.removeEventListener('wheel', handleWheel);
            }
            clearTimeout(wheelId);
        };
    }, [isLoading, isShowScrollbar, railRef.current, thumbRef.current, thumbHeight, isDragging]);
    return { isLoading, isActive, thumbHeight, thumbPosition, isDragging, isWheel };
};