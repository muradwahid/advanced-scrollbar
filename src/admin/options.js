export const options = {
    id: "asb-advanced-scrollbar-thirds",
    title: "Advanced Scrollbar",
    saveType: "serialized",
    sections: [
        {
            "name": "basic_settings",
            "title": "Scrollbar Basic Settings",
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
                    default: "false"

                },
                {
                    id: "asb_scrollspeed",
                    title: "Scroll Speed",
                    field: "text",
                    after: "Change the speed of scrollbar during scroll.",
                    default: "60",
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
                    default: "#9837bf",
                    isPremium: true
                },
                {
                    id: "asb_floating_scrollbar_text_color",
                    title: "Floating Scrollbar Text Color",
                    after: "Change Scrollbar Text Color",
                    field: "color",
                    default: "#ffffff",
                    isPremium: true
                },
            ]
        },
        {
            "name": "custom_style_settings",
            "title": "Scrollbar Custom Style Settings",
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
                    default: {
                        spinner: 10
                    }
                },
                {
                    id: "asb_border",
                    title: "Scrollbar Border CSS",
                    field: "border",
                    after: "Css definition for cursor border",
                    all: true,
                    default: {
                        top: "1",
                        right: "1",
                        bottom: "1",
                        left: "1",
                        style: "solid",
                        color: "#fff"
                    }
                },
                {
                    id: "asb_border_radius",
                    title: "Scrollbar Border Radius",
                    field: "spinner",
                    // unit: "px",
                    after: "border radius in pixel",
                    default: {
                        spinner: 4
                    }
                }
            ]
        }
    ]
}




