import { RangeControl, SelectControl, TextareaControl, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { updateData } from '../../../../../bpl-tools/utils/functions';
import { MediaArea } from "../../../../../bpl-tools/Components";

import { cursorOptions, glitchBlendModeOptions, glitchSpeedOptions, magneticTargetElDefaults } from '../../utils/options';

const CursorShape = (props) => {
  const { value = {}, onChange } = props;
  return <>
    <SelectControl className='mt10' label={__('Cursor Shape', 'b-blocks')} labelPosition='edge' value={value?.type} onChange={(val) => onChange(updateData(value, val, 'type'))} options={cursorOptions} />
    {value?.type === "follow" && <>
      <RangeControl label={__('Cursor Duration', 'b-blocks')} value={value?.follow?.duration >= 0 ? value?.follow?.duration : 0.6} defaultValue={0.6} resetFallbackValue={0.6} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'follow', 'duration'))} />

      <RangeControl label={__('Inner Cursor Duration', 'b-blocks')} value={value?.follow?.innerDuration >= 0 ? value?.follow?.innerDuration : 0.1} defaultValue={0.1} resetFallbackValue={0.1} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'follow', 'innerDuration'))} />
    </>}

    {
      value?.type === "blob" && <>

        <SelectControl label={__('Blob Type', 'b-blocks')} labelPosition='edge' value={value?.blob?.blobType || 'circle'} onChange={(val) => onChange(updateData(value, val, 'blob', 'blobType'))} options={[{ label: __('Circle', 'b-blocks'), value: 'circle' }, { label: __('Square', 'b-blocks'), value: 'square' }]} />
      </>
    }

    {value?.type === "dot" && <>
      <RangeControl label={__('Cursor Duration', 'b-blocks')} value={value?.dot?.duration >= 0 ? value?.dot?.duration : 0.1} defaultValue={0.1} resetFallbackValue={0.1} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'dot', 'duration'))} />
    </>}

    {
      value?.type === "elastic" && <>
        <RangeControl label={__('Cursor Duration', 'b-blocks')} value={value?.elastic?.duration >= 0 ? value?.elastic?.duration : 0.5} defaultValue={0.5} resetFallbackValue={0.5} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'elastic', 'duration'))} />

        <RangeControl label={__('Inner Cursor Duration', 'b-blocks')} value={value?.elastic?.innerDuration >= 0 ? value?.elastic?.innerDuration : 0.1} defaultValue={0.1} resetFallbackValue={0.1} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'elastic', 'innerDuration'))} />
      </>
    }

    {value?.type === "digital" && <GlitchCursorOptions blendMode='multiply' speed='fast' intensity='high' value={value?.digital} onChange={(val) => onChange(updateData(value, val, 'digital'))} />}

    {value?.type === "analog" && <GlitchCursorOptions blendMode='normal' speed='slow' intensity='medium' value={value?.analog} onChange={(val) => onChange(updateData(value, val, 'analog'))} />}

    {value?.type === "cyberpunk" && <GlitchCursorOptions blendMode='normal' speed='medium' intensity='medium' value={value?.cyberpunk} onChange={(val) => onChange(updateData(value, val, 'cyberpunk'))} />}

    {value?.type === "matrix" && <GlitchCursorOptions blendMode='normal' speed='fast' intensity='high' value={value?.matrix} onChange={(val) => onChange(updateData(value, val, 'matrix'))} />}


    {value?.type === "glow" && <>

      <RangeControl label={__('Cursor Duration', 'b-blocks')} value={Number(value?.glow?.duration) >= 0 ? value?.glow?.duration:0.5 } defaultValue={0.5} resetFallbackValue={0.5} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'glow', 'duration'))} />

      <RangeControl label={__('Pulse Speed', 'b-blocks')} value={Number(value?.glow?.pulseSpeed) >= 0 ? value?.glow?.pulseSpeed : 1.5} defaultValue={1.5} resetFallbackValue={1.5} min={0} max={10} step={0.1} onChange={(val) => onChange(updateData(value, val, 'glow', 'pulseSpeed'))} />

    </>}

    {value?.type === "gradient" && <>
      <RangeControl label={__('Cursor Duration', 'b-blocks')} value={parseInt(value?.gradient?.duration) >= 0 ? value?.gradient?.duration : 0.5} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'gradient', 'duration'))} />

      <RangeControl label={__('Rotation Speed', 'b-blocks')} value={value?.gradient?.rotationSpeed >= 0 ? value?.gradient?.rotationSpeed : 60} defaultValue={60} resetFallbackValue={60} min={0} max={60} step={1} onChange={(val) => onChange(updateData(value, val, 'gradient', 'rotationSpeed'))} />
    </>}

    {value?.type === "image" && <MediaArea height='100%' width='100%' value={value?.image?.img} onChange={(val) => onChange(updateData(value, val, 'image', 'img'))} />}

    {value?.type === "magnetic" && <>
      <TextareaControl label={__('Target Selector', 'b-blocks')} value={value?.magnetic?.targetedEl || magneticTargetElDefaults} onChange={(val) => onChange(updateData(value, val, 'magnetic', 'targetedEl'))} />
    </>}

    {value?.type === "neon" && <>
      <RangeControl label={__('Cursor Duration', 'b-blocks')} value={value?.neon?.duration >= 0 ? value?.neon?.duration : 0.2} defaultValue={0.2} resetFallbackValue={0.2} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'neon', 'duration'))} />
    </>}

    {value?.type === "pixelated" && <>
      <RangeControl label={__('Cursor Duration', 'b-blocks')} value={value?.pixelated?.duration >= 0 ? value?.pixelated?.duration : 0.15} defaultValue={0.15} resetFallbackValue={0.15} min={0} max={5} step={0.05} onChange={(val) => onChange(updateData(value, val, 'pixelated', 'duration'))} />
    </>}

    {value?.type === 'ribbon' && <>
      
      {/* <RangeControl label={__('Ribbon Elasticity', 'b-blocks')} value={value?.ribbon?.baseSpring >= 0 ? value?.ribbon?.baseSpring : 0.03} min={0} max={2} step={0.01} onChange={val => onChange(updateData(value, val, 'ribbon', 'baseSpring'))} /> */}

      {/* <RangeControl label={__('Ribbon Smoothness', 'b-blocks')} value={value?.ribbon?.baseFriction >= 0 ? value?.ribbon?.baseFriction : 0.9} min={0} max={10} step={0.05} onChange={val => onChange(updateData(value, val, 'ribbon', 'baseFriction'))} /> */}

      <RangeControl label={__('Ribbon Thickness', 'b-blocks')} value={value?.ribbon?.baseThickness >= 0 ? value?.ribbon?.baseThickness : 30} min={0} max={300} step={1} onChange={val => onChange(updateData(value, val, 'ribbon', 'baseThickness'))} />
      
      {/* <RangeControl label={__('Ribbon Spread', 'b-blocks')} value={value?.ribbon?.offsetFactor >= 0 ? value?.ribbon?.offsetFactor : 0.05} min={0} max={3} step={0.01} onChange={val => onChange(updateData(value, val, 'ribbon', 'offsetFactor'))} /> */}

      <RangeControl label={__('Ribbon Trail Length', 'b-blocks')} value={value?.ribbon?.maxAge >= 0 ? value?.ribbon?.maxAge : 500} min={400} max={1000} step={1} onChange={val => onChange(updateData(value, val, 'ribbon', 'maxAge'))} />
      
      {/* <RangeControl label={__('Ribbon Detail', 'b-blocks')} value={value?.ribbon?.pointCount >= 0 ? value?.ribbon?.pointCount : 50} min={0} max={1000} step={1} onChange={val => onChange(updateData(value, val, 'ribbon', 'pointCount'))} />
      
      <RangeControl label={__('Ribbon Speed', 'b-blocks')} value={value?.ribbon?.speedMultiplier >= 0 ? value?.ribbon?.speedMultiplier : 0.6} min={0} max={5} step={0.05} onChange={val => onChange(updateData(value, val, 'ribbon', 'speedMultiplier'))} /> */}
      
      <ToggleControl label={__('Enable Trail Fade', 'b-blocks')} value={value?.ribbon?.enableFade} checked={value?.ribbon?.enableFade} onChange={val => onChange(updateData(value, val, 'ribbon', 'enableFade'))} />

      <ToggleControl className='mt10' label={__('Enable Wavy Effect', 'b-blocks')} value={value?.ribbon?.enableShaderEffect} checked={value?.ribbon?.enableShaderEffect} onChange={val => onChange(updateData(value, val, 'ribbon', 'enableShaderEffect'))} />
      
      {value?.ribbon?.enableShaderEffect && <RangeControl className='mt10' label={__('Wave Intensity', 'b-blocks')} value={value?.ribbon?.effectAmplitude >= 0 ? value?.ribbon?.effectAmplitude : 2} min={0} max={10} step={1} onChange={val => onChange(updateData(value, val, 'ribbon', 'effectAmplitude'))} />}
      
    </>}

    {value?.type === "ring" && <>
      <RangeControl label={__('Cursor Duration', 'b-blocks')} value={value?.ring?.duration >= 0 ? value?.ring?.duration : 0.2} defaultValue={0.2} resetFallbackValue={0.2} min={0} max={5} step={0.05} onChange={(val) => onChange(updateData(value, val, 'ring', 'duration'))} />
    </>}

    {value?.type === "sketch" && <>
      <RangeControl label={__('Trail Width', 'b-blocks')} value={value?.sketch?.trailWidth >= 0 ? value?.sketch?.trailWidth : 3} defaultValue={3} resetFallbackValue={3} min={0} max={10} step={1} onChange={(val) => onChange(updateData(value, val, 'sketch', 'trailWidth'))} />

      <RangeControl label={__('Trail Length', 'b-blocks')} value={value?.sketch?.trailLength >= 0 ? value?.sketch?.trailLength : 50} defaultValue={50} resetFallbackValue={50} min={0} max={400} step={1} onChange={(val) => onChange(updateData(value, val, 'sketch', 'trailLength'))} />
    </>}

    {value?.type === "text" && <>
      <TextControl label={__('Cursor Custom Text', 'b-blocks')} value={value?.text?.cursorText} onChange={(val) => onChange(updateData(value, val, 'text', 'cursorText'))} />

      <RangeControl label={__('Cursor Duration', 'b-blocks')} value={value?.text?.duration >= 0 ? value?.text?.duration : 0.2} defaultValue={0.2} resetFallbackValue={0.2} min={0} max={5} step={0.1} onChange={(val) => onChange(updateData(value, val, 'text', 'duration'))} />
    </>}

  </>
};

export default CursorShape;


const GlitchCursorOptions = ({ value = {}, onChange, speed, blendMode }) => {
  return <> 
    <RangeControl label={__('Cursor Tail', 'b-blocks')} value={Number(value?.tailLength) >= 0 ? Number(value?.tailLength) : 8 } defaultValue={8} min={0} max={50} step={1} onChange={(val) => onChange(updateData(value, val, 'tailLength'))} resetFallbackValue={8} />

    {/* <SelectControl className='mt10' label={__('Cursor Intensity', 'b-blocks')} labelPosition='edge' value={value?.intensity || intensity} onChange={(val) => onChange(updateData(value, val, 'intensity'))} options={glitchIntensityOptions} /> */}

    <SelectControl className='mt10' label={__('Cursor Speed', 'b-blocks')} labelPosition='edge' value={value?.speed || speed} onChange={(val) => onChange(updateData(value, val, 'speed'))} options={glitchSpeedOptions} />

    <SelectControl className='mt10' label={__('Cursor Blend Mode', 'b-blocks')} labelPosition='edge' value={value?.blendMode || blendMode} onChange={(val) => onChange(updateData(value, val, 'blendMode'))} options={glitchBlendModeOptions} />
  </>
}