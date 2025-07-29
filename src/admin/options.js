export const options = {
    id: "admin-dashboard-secondssm",
    title: "Admin Dashboard",
    saveType: "serialized",
    sections: [
        {
            "name": "basic_settings",
            "title": "Scrollbar_basic_settings",
            "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='15px'><path d='M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z' /></svg>",
            fields: [
                {
                    id: "asb_showscrollbar",
                    field: "radio",
                    title: "Show Scrollbar?",
                    after: "Select show option to show scrollbar",
                    options: {
                        'true': "Show",
                        'false': "Hide",
                    },
                    default: 'false'
                },
                {
                    id: "asb_color",
                    title: "Scrollbar Color",
                    after: "Change Scrollbar Color.",
                    field: "color",
                    default: "#46b3e6"
                },
                {
                    id: "asb_background",
                    title: "Scrollbar Rail Background Color",
                    after: "Change the Rail Background Color.",
                    field: "color"
                },
                {
                    id: "asb_mousescrollstep",
                    title: "Mouse Scroll Step",
                    field: "text",
                    after: "scrolling speed with mouse wheel, default value is 40 (pixel)",
                    attributes: {
                        style: {
                            width: "50%"
                        }
                    },
                    default: "40"
                },
                {
                    id: "asb_autohidemode",
                    field: "radio",
                    title: "Auto Hide",
                    after: "how hide the scrollbar works",
                    options: {
                        true: "On",
                        false: "Off",
                        cursor: "Cursor Only"
                    },
                    default: false

                },
                {
                    id: "asb_scrollspeed",
                    title: "Scroll Speed",
                    field: "text",
                    after: "Change the speed of scrollbar during scroll.",
                    attributes: {
                        style: {
                            width: "50%"
                        }
                    }
                },
                {
                    id: "asb_railalign",
                    field: "radio",
                    title: "Rail Align",
                    after: "Alignment of vertical rail",
                    options: {
                        "right": "Right",
                        "left": "Left"
                    },
                    default: "right"

                },
                {
                    id: "asb_touchbehavior",
                    field: "checkbox",
                    title: "Enable Touch Behavior",
                    label: "enable cursor-drag scrolling like touch devices in desktop computer (default:Off)",
                    default: 0
                },
                {
                    id: "asb_dynamic_height_scrollbar",
                    field: "radio",
                    title: "Dynamic Full Height Scrollbar",
                    after: "Select on option for showing dynamic scrollbar",
                    isPremium: true,
                    options: {
                        "on": "On",
                        "off": "Off"
                    },
                    default: "off"

                },
                {
                    id: "asb_gradient_color",
                    field: "color_group",
                    title: "Full Height Scrollbar Gradient Color",
                    subtitle: "Change Scrollbar Color.",
                    isPremium: true,
                    options: {
                        "color-1": "Color 1",
                        "color-2": "Color 2",
                        "color-3": "Color 3"
                    },
                    default: {
                        "color-1": "#ffce4b",
                        "color-2": "#ff395e",
                        "color-3": "#833ab4"
                    }
                },
                {
                    id: "asb_floating_scrollbar",
                    field: "radio",
                    title: "Show Floating Scrollbar?",
                    after: "Select on option for showing floating scrollbar",
                    isPremium: true,
                    options: {
                        "on": "On",
                        "off": "Off"
                    },
                    default: "off"

                },
                {
                    id: "asb_floating_scrollbar_bg_color",
                    title: "Floating Scrollbar BG Color",
                    after: "Change Scrollbar BG Color",
                    field: "color",
                    default: "#9837bf"
                },
                {
                    id: "asb_floating_scrollbar_text_color",
                    title: "Floating Scrollbar Text Color",
                    after: "Change Scrollbar Text Color",
                    field: "color",
                    default: "#ffffff"
                },
            ]
        },
        {
            "name": "custom_style_settings",
            "title": "Scrollbar Custom Style Settings",
            "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='15px'><path d='M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z' /></svg>",
            fields: [
                {
                    id: "asb_width",
                    title: "Scrollbar width",
                    field: "spinner",
                    unit: "px",
                    after: "Change the width of the scrollbar. Enter a value in pixel",
                    attributes: {
                        style: {
                            width: "50%"
                        }
                    },
                    default: "10"
                },
                {
                    id: "asb_border",
                    title: "Scrollbar Border CSS",
                    field: "border",
                    after: "Css definition for cursor border",
                    all:true,
                    // default: {
                    //     top: "1",
                    //     right: "1",
                    //     bottom: "1",
                    //     left: "1",
                    //     style: "solid",
                    //     color: "#fff"
                    // }
                },
                {
                    id: "asb_border_radius",
                    title: "Scrollbar Border Radius",
                    field: "spinner",
                    // unit: "px",
                    after: "border radius in pixel",
                    default: "4"
                }
            ]
        },
        {
            "name": "cursor_settings",
            "title": "Custom Style",
            "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='15px'><path d='M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z' /></svg>",
            fields: [
                {
                    id: "asb_cursor_source",
                    field: "radio",
                    title: "Select Cursor Source",
                    after: "Select any option for showing cursor",
                    options: {
                        "cursor": "Cursor Only",
                        "predefined": "Pre Defined",
                        "customUrl": "Custom Url"
                    },
                    default: "cursor"
                },
                {
                    id: "asb_cursor_image",
                    field: "media",
                    title: "Custom Cursor image",
                    after: "Change the default cursor",
                    library: "image",
                    ulr: true,
                    attributes: {
                        style: {
                            width: "50%"
                        }
                    }
                },
                {
                    id: "asb_predefined_img",
                    field: "radio",
                    title: "Select Cursor Source",
                    after: "Select any option for showing cursor",
                    options: [
                        "opt-1",
                        "opt-2",
                        "opt-3"
                    ]
                },
            ]
        }
    ]
}




