// import { Color, Polyline, Renderer, Transform, Vec3 } from "ogl";
// import { useEffect } from "react";
// import "./style.scss";

// const CursorRibbon = ({
//     colors = ["#FC8EAC"],
//     baseSpring = 0.03,
//     baseFriction = 0.9,
//     baseThickness = 30,
//     offsetFactor = 0.05,
//     maxAge = 500,
//     pointCount = 50,
//     speedMultiplier = 0.6,
//     enableFade = false,
//     enableShaderEffect = false,
//     effectAmplitude = 2,
//     backgroundColor = [0, 0, 0, 0],
// }) => {
//     useEffect(() => {
//         const renderer = new Renderer({
//             dpr: window.devicePixelRatio || 2,
//             alpha: true,
//         });
//         const gl = renderer.gl;

//         // Set background color
//         if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
//             gl.clearColor(
//                 backgroundColor[0],
//                 backgroundColor[1],
//                 backgroundColor[2],
//                 backgroundColor[3]
//             );
//         } else {
//             gl.clearColor(0, 0, 0, 0);
//         }

//         // Set CSS size only once
//         gl.canvas.style.position = "absolute";
//         gl.canvas.style.top = "0";
//         gl.canvas.style.left = "0";
//         gl.canvas.style.width = "100dvw";
//         gl.canvas.style.height = "100vh";
//         gl.canvas.style.pointerEvents = "none";
//         gl.canvas.style.zIndex = 9999;

//         // Append only if not already in DOM
//         if (!document.body.contains(gl.canvas)) {
//             document.body.appendChild(gl.canvas);
//         }

//         const scene = new Transform();
//         const lines = [];

//         const vertex = `
//             precision highp float;
//             attribute vec3 position;
//             attribute vec3 next;
//             attribute vec3 prev;
//             attribute vec2 uv;
//             attribute float side;
//             uniform vec2 uResolution;
//             uniform float uDPR;
//             uniform float uThickness;
//             uniform float uTime;
//             uniform float uEnableShaderEffect;
//             uniform float uEffectAmplitude;
//             varying vec2 vUV;
//             vec4 getPosition() {
//                 vec4 current = vec4(position, 1.0);
//                 vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
//                 vec2 nextScreen = next.xy * aspect;
//                 vec2 prevScreen = prev.xy * aspect;
//                 vec2 tangent = normalize(nextScreen - prevScreen);
//                 vec2 normal = vec2(-tangent.y, tangent.x);
//                 normal /= aspect;
//                 normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
//                 float dist = length(nextScreen - prevScreen);
//                 normal *= smoothstep(0.0, 0.02, dist);
//                 float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
//                 float pixelWidth = current.w * pixelWidthRatio;
//                 normal *= pixelWidth * uThickness;
//                 current.xy -= normal * side;
//                 if(uEnableShaderEffect > 0.5) {
//                     current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
//                 }
//                 return current;
//             }
//             void main() {
//                 vUV = uv;
//                 gl_Position = getPosition();
//             }
//         `;

//         const fragment = `
//             precision highp float;
//             uniform vec3 uColor;
//             uniform float uOpacity;
//             uniform float uEnableFade;
//             varying vec2 vUV;
//             void main() {
//                 float fadeFactor = 1.0;
//                 if(uEnableFade > 0.5) {
//                     fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
//                 }
//                 gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
//             }
//         `;

//         // Resize handler
//         function resize() {
//             const dpr = window.devicePixelRatio || 1;
//             const width = window.innerWidth;
//             const height = window.innerHeight;
//             gl.canvas.width = width * dpr;
//             gl.canvas.height = height * dpr;
//             renderer.setSize(width - 20, height);
//             // Pass resolution to shaders if needed
//             lines.forEach((line) => {
//                 if (line.polyline && line.polyline.mesh && line.polyline.mesh.program && line.polyline.mesh.program.uniforms.uResolution) {
//                     line.polyline.mesh.program.uniforms.uResolution.value = [width, height];
//                 }
//                 line.polyline.resize();
//             });
//         }
//         window.addEventListener("resize", resize);

//         const center = (colors.length - 1) / 2;
//         colors.forEach((color, index) => {
//             const spring = baseSpring + (Math.random() - 0.5) * 0.05;
//             const friction = baseFriction + (Math.random() - 0.5) * 0.05;
//             const thickness = baseThickness + (Math.random() - 0.5) * 3;
//             const mouseOffset = new Vec3(
//                 (index - center) * offsetFactor + (Math.random() - 0.5) * 0.01,
//                 (Math.random() - 0.5) * 0.1,
//                 0
//             );

//             const line = {
//                 spring,
//                 friction,
//                 mouseVelocity: new Vec3(),
//                 mouseOffset,
//             };

//             const count = pointCount;
//             const points = [];
//             for (let i = 0; i < count; i++) {
//                 points.push(new Vec3());
//             }
//             line.points = points;

//             line.polyline = new Polyline(gl, {
//                 points,
//                 vertex,
//                 fragment,
//                 uniforms: {
//                     uColor: { value: new Color(color) },
//                     uThickness: { value: thickness },
//                     uOpacity: { value: 1.0 },
//                     uTime: { value: 0.0 },
//                     uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
//                     uEffectAmplitude: { value: effectAmplitude },
//                     uEnableFade: { value: enableFade ? 1.0 : 0.0 },
//                     uResolution: { value: [window.innerWidth, window.innerHeight] },
//                     uDPR: { value: window.devicePixelRatio || 1 },
//                 },
//             });
//             line.polyline.mesh.setParent(scene);
//             lines.push(line);
//         });

//         resize();

//         const mouse = new Vec3();
//         function updateMouse(e) {
//             let x, y;
//             if (e.changedTouches && e.changedTouches.length) {
//                 x = e.changedTouches[0].clientX;
//                 y = e.changedTouches[0].clientY;
//             } else {
//                 x = e.clientX;
//                 y = e.clientY;
//             }
//             mouse.set(
//                 (x / window.innerWidth) * 2 - 1,
//                 (y / window.innerHeight) * -2 + 1,
//                 0
//             );
//         }
//         window.addEventListener("mousemove", updateMouse);
//         window.addEventListener("touchstart", updateMouse);
//         window.addEventListener("touchmove", updateMouse);

//         const tmp = new Vec3();
//         let frameId;
//         let lastTime = performance.now();
//         function update() {
//             frameId = requestAnimationFrame(update);
//             const currentTime = performance.now();
//             const dt = currentTime - lastTime;
//             lastTime = currentTime;

//             lines.forEach((line) => {
//                 tmp
//                     .copy(mouse)
//                     .add(line.mouseOffset)
//                     .sub(line.points[0])
//                     .multiply(line.spring);
//                 line.mouseVelocity.add(tmp).multiply(line.friction);
//                 line.points[0].add(line.mouseVelocity);

//                 for (let i = 1; i < line.points.length; i++) {
//                     if (isFinite(maxAge) && maxAge > 0) {
//                         const segmentDelay = maxAge / (line.points.length - 1);
//                         const alpha = Math.min(1, (dt * speedMultiplier) / segmentDelay);
//                         line.points[i].lerp(line.points[i - 1], alpha);
//                     } else {
//                         line.points[i].lerp(line.points[i - 1], 0.9);
//                     }
//                 }
//                 if (line.polyline.mesh.program.uniforms.uTime) {
//                     line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
//                 }
//                 line.polyline.updateGeometry();
//             });

//             renderer.render({ scene });
//         }
//         update();

//         return () => {
//             window.removeEventListener("resize", resize);
//             window.removeEventListener("mousemove", updateMouse);
//             window.removeEventListener("touchstart", updateMouse);
//             window.removeEventListener("touchmove", updateMouse);
//             cancelAnimationFrame(frameId);
//             if (gl.canvas && gl.canvas.parentNode === document.body) {
//                 document.body.removeChild(gl.canvas);
//             }
//         };
//     }, [
//         colors,
//         baseSpring,
//         baseFriction,
//         baseThickness,
//         offsetFactor,
//         maxAge,
//         pointCount,
//         speedMultiplier,
//         enableFade,
//         enableShaderEffect,
//         effectAmplitude,
//         backgroundColor,
//     ]);

//     return null;
// };

// export default CursorRibbon;

import { Color, Polyline, Renderer, Transform, Vec3 } from "ogl";
import { useEffect } from "react";
import "./style.scss";

const CursorRibbon = ({
    colors = ["#FC8EAC"],
    baseSpring = 0.03,
    baseFriction = 0.9,
    baseThickness = 30,
    offsetFactor = 0.05,
    maxAge = 500,
    pointCount = 50,
    speedMultiplier = 0.6,
    enableFade = false,
    enableShaderEffect = false,
    effectAmplitude = 2,
    backgroundColor = [0, 0, 0, 0],
    domEl = document.body,
    eventEl = window,
    rect = { width: window.innerWidth, height: window.innerHeight },
}) => {
    useEffect(() => {
        const renderer = new Renderer({
            dpr: window.devicePixelRatio || 2,
            alpha: true,
        });
        const gl = renderer.gl;

        // Set background color
        if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
            gl.clearColor(
                backgroundColor[0],
                backgroundColor[1],
                backgroundColor[2],
                backgroundColor[3]
            );
        } else {
            gl.clearColor(0, 0, 0, 0);
        }

        // Set CSS size only once
        gl.canvas.style.position = "absolute";
        gl.canvas.style.top = "0";
        gl.canvas.style.left = "0";
        gl.canvas.style.width = "100%";
        gl.canvas.style.height = "100%";
        gl.canvas.style.pointerEvents = "none";
        gl.canvas.style.zIndex = 9999;

        // Determine parent element
        // const parentEl = isDashboard && dashboardRef?.current ? dashboardRef.current : document.body;

        // Append only if not already in DOM
        if (!domEl.contains(gl.canvas)) {
            domEl.appendChild(gl.canvas);
        }

        const scene = new Transform();
        const lines = [];

        const vertex = `
            precision highp float;
            attribute vec3 position;
            attribute vec3 next;
            attribute vec3 prev;
            attribute vec2 uv;
            attribute float side;
            uniform vec2 uResolution;
            uniform float uDPR;
            uniform float uThickness;
            uniform float uTime;
            uniform float uEnableShaderEffect;
            uniform float uEffectAmplitude;
            varying vec2 vUV;
            vec4 getPosition() {
                vec4 current = vec4(position, 1.0);
                vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
                vec2 nextScreen = next.xy * aspect;
                vec2 prevScreen = prev.xy * aspect;
                vec2 tangent = normalize(nextScreen - prevScreen);
                vec2 normal = vec2(-tangent.y, tangent.x);
                normal /= aspect;
                normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
                float dist = length(nextScreen - prevScreen);
                normal *= smoothstep(0.0, 0.02, dist);
                float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
                float pixelWidth = current.w * pixelWidthRatio;
                normal *= pixelWidth * uThickness;
                current.xy -= normal * side;
                if(uEnableShaderEffect > 0.5) {
                    current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
                }
                return current;
            }
            void main() {
                vUV = uv;
                gl_Position = getPosition();
            }
        `;

        const fragment = `
            precision highp float;
            uniform vec3 uColor;
            uniform float uOpacity;
            uniform float uEnableFade;
            varying vec2 vUV;
            void main() {
                float fadeFactor = 1.0;
                if(uEnableFade > 0.5) {
                    fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
                }
                gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
            }
        `;

        // Resize handler
        function resize() {
            const dpr = window.devicePixelRatio || 1;
            let width, height;
            // if (isDashboard && dashboardRef?.current) {
            //     const rect = dashboardRef.current.getBoundingClientRect();
            //     width = rect.width;
            //     height = rect.height;
            // } else {
            //     width = window.innerWidth;
            //     height = window.innerHeight;
            // }

            width = rect.width;
            height = rect.height;

            gl.canvas.width = width * dpr;
            gl.canvas.height = height * dpr;
            renderer.setSize(width, height);
            // Pass resolution to shaders if needed
            lines.forEach((line) => {
                if (line.polyline && line.polyline.mesh && line.polyline.mesh.program && line.polyline.mesh.program.uniforms.uResolution) {
                    line.polyline.mesh.program.uniforms.uResolution.value = [width, height];
                }
                line.polyline.resize();
            });
        }

        // Mouse event handler
        const mouse = new Vec3();
        function updateMouse(e) {
            let x, y;
            if (e.changedTouches && e.changedTouches.length) {
                x = e.changedTouches[0].clientX;
                y = e.changedTouches[0].clientY;
            } else {
                x = e.clientX;
                y = e.clientY;
            }
            let width, height, left = 0, top = 0;
            // if (isDashboard && dashboardRef?.current) {
            //     const rect = dashboardRef.current.getBoundingClientRect();
            //     width = rect.width;
            //     height = rect.height;
            //     left = rect.left;
            //     top = rect.top;
            //     x = x - left;
            //     y = y - top;
            // } else {
            //     width = window.innerWidth;
            //     height = window.innerHeight;
            // }

            width = rect.width;
            height = rect.height;

            if (rect.top) {
                top = rect.top;
                y = y - top;
            }
            if (rect.left) {
                left = rect.left;
                x = x - left;
            }

            mouse.set(
                (x / width) * 2 - 1,
                (y / height) * -2 + 1,
                0
            );
        }

        // Attach events
        // if (isDashboard && dashboardRef?.current) {
        //     dashboardRef.current.addEventListener("mousemove", updateMouse);
        //     dashboardRef.current.addEventListener("touchstart", updateMouse);
        //     dashboardRef.current.addEventListener("touchmove", updateMouse);
        // } else {
        //     window.addEventListener("mousemove", updateMouse);
        //     window.addEventListener("touchstart", updateMouse);
        //     window.addEventListener("touchmove", updateMouse);
        // }

        eventEl.addEventListener("mousemove", updateMouse);
        eventEl.addEventListener("touchstart", updateMouse);
        eventEl.addEventListener("touchmove", updateMouse);

        window.addEventListener("resize", resize);

        // Create lines/ribbons
        const center = (colors.length - 1) / 2;
        let width, height;
        // if (isDashboard && dashboardRef?.current) {
        //     const rect = dashboardRef.current.getBoundingClientRect();
        //     width = rect.width;
        //     height = rect.height;
        // } else {
        //     width = window.innerWidth;
        //     height = window.innerHeight;
        // }

        width = rect.width;
        height = rect.height;

        colors.forEach((color, index) => {
            const spring = baseSpring + (Math.random() - 0.5) * 0.05;
            const friction = baseFriction + (Math.random() - 0.5) * 0.05;
            const thickness = baseThickness + (Math.random() - 0.5) * 3;
            const mouseOffset = new Vec3(
                (index - center) * offsetFactor + (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.1,
                0
            );

            const line = {
                spring,
                friction,
                mouseVelocity: new Vec3(),
                mouseOffset,
            };

            const count = pointCount;
            const points = [];
            for (let i = 0; i < count; i++) {
                points.push(new Vec3());
            }
            line.points = points;

            line.polyline = new Polyline(gl, {
                points,
                vertex,
                fragment,
                uniforms: {
                    uColor: { value: new Color(color) },
                    uThickness: { value: thickness },
                    uOpacity: { value: 1.0 },
                    uTime: { value: 0.0 },
                    uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
                    uEffectAmplitude: { value: effectAmplitude },
                    uEnableFade: { value: enableFade ? 1.0 : 0.0 },
                    uResolution: { value: [width, height] }, // <-- use dashboard size
                    uDPR: { value: window.devicePixelRatio || 1 },
                },
            });
            line.polyline.mesh.setParent(scene);
            lines.push(line);
        });

        resize();

        const tmp = new Vec3();
        let frameId;
        let lastTime = performance.now();
        function update() {
            frameId = requestAnimationFrame(update);
            const currentTime = performance.now();
            const dt = currentTime - lastTime;
            lastTime = currentTime;

            lines.forEach((line) => {
                tmp
                    .copy(mouse)
                    .add(line.mouseOffset)
                    .sub(line.points[0])
                    .multiply(line.spring);
                line.mouseVelocity.add(tmp).multiply(line.friction);
                line.points[0].add(line.mouseVelocity);

                for (let i = 1; i < line.points.length; i++) {
                    if (isFinite(maxAge) && maxAge > 0) {
                        const segmentDelay = maxAge / (line.points.length - 1);
                        const alpha = Math.min(1, (dt * speedMultiplier) / segmentDelay);
                        line.points[i].lerp(line.points[i - 1], alpha);
                    } else {
                        line.points[i].lerp(line.points[i - 1], 0.9);
                    }
                }
                if (line.polyline.mesh.program.uniforms.uTime) {
                    line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
                }
                line.polyline.updateGeometry();
            });

            renderer.render({ scene });
        }
        update();

        return () => {
            // if (isDashboard && dashboardRef?.current) {
            //     dashboardRef.current.removeEventListener("mousemove", updateMouse);
            //     dashboardRef.current.removeEventListener("touchstart", updateMouse);
            //     dashboardRef.current.removeEventListener("touchmove", updateMouse);
            // } else {
            //     window.removeEventListener("mousemove", updateMouse);
            //     window.removeEventListener("touchstart", updateMouse);
            //     window.removeEventListener("touchmove", updateMouse);
            // }

            eventEl.removeEventListener("mousemove", updateMouse);
            eventEl.removeEventListener("touchstart", updateMouse);
            eventEl.removeEventListener("touchmove", updateMouse);

            window.removeEventListener("resize", resize);
            cancelAnimationFrame(frameId);
            if (gl.canvas && gl.canvas.parentNode === domEl) {
                domEl.removeChild(gl.canvas);
            }
        };
    }, [
        colors,
        baseSpring,
        baseFriction,
        baseThickness,
        offsetFactor,
        maxAge,
        pointCount,
        speedMultiplier,
        enableFade,
        enableShaderEffect,
        effectAmplitude,
        backgroundColor,
        domEl
    ]);

    return null;
};

export default CursorRibbon;