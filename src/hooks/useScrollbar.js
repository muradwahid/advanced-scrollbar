// import { useEffect, useRef, useState } from "react";

// export const useScrollbar = (railRef = null, thumbRef = null, isShowScrollbar = false) => {
//     const [isActive, setIsActive] = useState(false);
//     const startY = useRef(0);
//     const startScrollTop = useRef(0);
//     const [isDragging, setIsDragging] = useState(false);
//     const [thumbHeight, setThumbHeight] = useState("");
//     const [thumbPosition, setThumbPosition] = useState(0);
//     const [isLoading, setIsLoading] = useState(true);

//     const html = document.documentElement;
//     useEffect(() => {
//         setIsActive(isShowScrollbar);

//         if (!isShowScrollbar) return;
//         // const html = document.documentElement;
//         html.classList.add('csb-scrollbar-active');
//         const updateScrollbar = () => {
//             if (!thumbRef.current) return;

//             const scrollableHeight = html.scrollHeight - html.clientHeight;
//             if (scrollableHeight <= 0) return;

//             // Calculate thumb height (minimum 20px)
//             const thumbHeight = Math.max(
//                 (html.clientHeight / html.scrollHeight) * html.clientHeight,
//                 20
//             );
//             // thumbRef.current.style.height = `${thumbHeight}px`;
//             setThumbHeight(thumbHeight);

//             // Update thumb position
//             const scrollPercentage = html.scrollTop / scrollableHeight;
//             const maxThumbPosition = html.clientHeight - thumbHeight;
//             setThumbPosition(scrollPercentage * maxThumbPosition);
//             // thumbRef.current.style.transform = `translateY(${scrollPercentage * maxThumbPosition}px)`;
//         };

//         const handleMouseMove = (e) => {
//             if (!isDragging) return;

//             const deltaY = e.clientY - startY.current;
//             const scrollableHeight = html.scrollHeight - html.clientHeight;
//             const thumbTrackHeight = html.clientHeight - parseFloat(thumbRef.current.style.height);

//             html.scrollTop = startScrollTop.current + (deltaY / thumbTrackHeight) * scrollableHeight;
//         };

//         const handleMouseUp = () => {
//             setIsDragging(false)
//             // document.body.style.cursor = '';
//             // document.body.style.userSelect = '';
//         };

//         // Initial setup
//         updateScrollbar();
//         window.addEventListener('resize', updateScrollbar);
//         window.addEventListener('scroll', updateScrollbar);

//         // Drag events
//         thumbRef.current?.addEventListener('mousedown', (e) => {
//             setIsDragging(true)
//             startY.current = e.clientY;
//             startScrollTop.current = html.scrollTop;
//             document.body.style.cursor = 'grabbing';
//             document.body.style.userSelect = 'none';
//         });

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);
//         window.addEventListener('load', () => {
//             updateScrollbar();
//             setIsLoading(false);
//         })

//         return () => {
//             html.classList.remove('csb-scrollbar-active');
//             window.removeEventListener('resize', updateScrollbar);
//             window.removeEventListener('scroll', updateScrollbar);
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//             window.removeEventListener('load', updateScrollbar)
//         };
//     }, [isLoading, isShowScrollbar, railRef.current, thumbRef.current]);
//     useEffect(() => {
//         console.log(isDragging)
//     }, [isDragging])
//     return { isLoading, isActive, thumbHeight, thumbPosition };
// }


import { useEffect, useRef, useState } from "react";

export const useScrollbar = (railRef = null, thumbRef = null, isShowScrollbar = false) => {
    const [isActive, setIsActive] = useState(false);
    const startY = useRef(0);
    const startScrollTop = useRef(0);
    const [isDragging, setIsDragging] = useState(false);
    const [thumbHeight, setThumbHeight] = useState("");
    const [thumbPosition, setThumbPosition] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const html = document.documentElement;

    // Function to handle thumb dragging and update position
    const handleThumbDrag = (clientY) => {
        // 1. Calculate drag distance and scroll metrics
        const dragDistanceY = clientY - startY.current;
        const totalScrollableHeight = html.scrollHeight - html.clientHeight;
        const availableTrackHeight = html.clientHeight - thumbHeight;

        // 2. Calculate new scroll position
        const scrollRatio = dragDistanceY / availableTrackHeight;
        const unboundedScrollTop = startScrollTop.current + (scrollRatio * totalScrollableHeight);

        // 3. Apply boundaries to scroll position
        const boundedScrollTop = Math.max(
            0,
            Math.min(unboundedScrollTop, totalScrollableHeight)
        );

        // 4. Update DOM scroll position
        html.scrollTop = boundedScrollTop;

        // 5. Calculate and update thumb position
        const scrollProgress = boundedScrollTop / totalScrollableHeight;
        const maxThumbOffset = html.clientHeight - thumbHeight;
        const newThumbPosition = scrollProgress * maxThumbOffset;

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
            console.log(e)
            if (!isDragging || !thumbRef?.current) return;
            handleThumbDrag(e.clientY, isDragging);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        };

        // Initial setup
        updateScrollbar();
        window.addEventListener('resize', updateScrollbar);
        window.addEventListener('scroll', updateScrollbar);

        // Drag events
        thumbRef.current?.addEventListener('mousedown', (e) => {
            setIsDragging(true);
            startY.current = e.clientY;
            startScrollTop.current = html.scrollTop;
            // document.body.style.cursor = 'grabbing';
            // document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('load', () => {
            updateScrollbar();
            setIsLoading(false);
        });

        return () => {
            html.classList.remove('csb-scrollbar-active');
            window.removeEventListener('resize', updateScrollbar);
            window.removeEventListener('scroll', updateScrollbar);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('load', updateScrollbar);
        };
    }, [isLoading, isShowScrollbar, railRef.current, thumbRef.current, thumbHeight, isDragging]);

    useEffect(() => {
        console.log(isDragging)
    }, [isDragging])
    return { isLoading, isActive, thumbHeight, thumbPosition, isDragging };
};