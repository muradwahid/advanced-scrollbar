import $ from 'jquery';
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
// import 'jquery.nicescroll'; 
// import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useMovePosition } from '../hooks/useMovePosition';
import { generateGradient, getBorderCSS, isSet } from '../utils/function';
import "./style.scss";
const Scrollbar = ({ scrollbarData }) => {
    const { asb_showscrollbar, asb_color = '#46b3e6', asb_background = '', asb_mousescrollstep = 40, asb_autohidemode = false, asb_railalign = "right", asb_scrollspeed = 60, asb_touchbehavior, asb_dynamic_height_scrollbar = 'off', asb_floating_scrollbar = "off", asb_gradient_color = {
        "color-1": "#ffce4b",
        "color-2": "#ff395e",
        "color-3": "#833ab4"
    }, asb_floating_scrollbar_bg_color = "#9837bf", asb_floating_scrollbar_text_color = "#ffffff", asb_width = { spinner: 10, unit: "px" }, asb_border = {}, asb_border_radius = { spinner: 12 } } = scrollbarData;

    const floatingRef = useRef(null);

    const touchBehavior = JSON.parse(asb_touchbehavior) == 1 ? true :  false;
    const showScrollbar = JSON.parse(asb_showscrollbar);
    const autoHideMode = asb_autohidemode === "cursor" ? "cursor" : JSON.parse(asb_autohidemode);
    // console.log(getBorderCSS(asb_border))
    const isShowScrollBar = asb_dynamic_height_scrollbar == "off" && asb_floating_scrollbar == "off" && showScrollbar

    const { cursorPosition, scrollPercentage } = useMovePosition(asb_floating_scrollbar)

    useEffect(() => {
        if (isShowScrollBar) {
            $("html").niceScroll({
                hwacceleration: true,
                cursorcolor: asb_color,
                cursorwidth: asb_width?.spinner+"px",
                cursorborder: getBorderCSS(asb_border),
                cursorborderradius: asb_border_radius?.spinner+"px",
                scrollspeed: asb_scrollspeed,
                railalign: asb_railalign,
                background: asb_background,
                touchbehavior: touchBehavior,
                grabcursorenabled: true,
                mousescrollstep: asb_mousescrollstep,
                autohidemode: autoHideMode,
            });
        }

        // Cleanup function
        return () => {
            if ($("html").getNiceScroll()) {
                $("html").getNiceScroll().remove();
            }
        };
    }, [
        showScrollbar,
        asb_dynamic_height_scrollbar,
        asb_floating_scrollbar,
        asb_color,
        asb_width?.spinner,
        getBorderCSS(asb_border),
        asb_border_radius?.spinner,
        asb_scrollspeed,
        asb_scrollspeed,
        asb_railalign,
        asb_background,
        touchBehavior,
        asb_mousescrollstep,
        autoHideMode
    ]);

    const dynamicHeightStyle = {
        ...(isSet(scrollPercentage) && { "--csb-scrollbar-rail-dynamic-height": scrollPercentage + "%" }),
    }
    const floatingStyle = {
        ...(isSet(asb_floating_scrollbar_bg_color) && { "--csb-scrollbar-floating-bg-color": asb_floating_scrollbar_bg_color }),
        ...(isSet(asb_floating_scrollbar_text_color) && { "--csb-scrollbar-floating-text-color": asb_floating_scrollbar_text_color }),
    }

    // if (isLoading ) return;

    return <>
        {
            asb_dynamic_height_scrollbar == "on" && <div className={`csb-scrollbar-dynamic-height`} style={{ background: generateGradient(asb_gradient_color), ...dynamicHeightStyle }} ></div>
        }

        {
            asb_floating_scrollbar == "on" && <div ref={floatingRef} className={`csb-scrollbar-floating`} style={{ top: cursorPosition.y + 20, left: (cursorPosition.x + 20), ...floatingStyle }} >Page Scrolled {scrollPercentage} %</div>
        }

    </>
};

export default Scrollbar;

document.addEventListener('DOMContentLoaded', () => {
    const scrollbarEl = document.getElementById("csbScrollbar");
    const scrollbarData = JSON.parse(scrollbarEl.dataset.scrollbar);
    const root = createRoot(scrollbarEl);
    root.render(<Scrollbar scrollbarData={scrollbarData} />);
    scrollbarEl.removeAttribute('data-scrollbar')
});



