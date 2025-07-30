import { RangeControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { ColorControl } from "../../../../../bpl-tools/Components";
import { updateData } from "../../../../../bpl-tools/utils/functions";
import { effectSparkEasingOptions } from "../../utils/options";

const EffectStyleOptions = ({ value, onChange }) => {
  const { spark = {}, sparkSimple = {}, starburst = {}, radial = {}, explosion = {}, rippleCircle = {}, rippleDouble = {}, rippleWave = {}, ripplePulse = {} } = value || {}

  return (
    <>
      {
        value?.type === 'spark' && <>
          <RangeControl label="Spark Size" value={parseInt(spark?.size) >= 0 ? parseInt(spark?.size) : 12} onChange={val => onChange(updateData(value, val, 'spark', 'size'))} min={0} max={100} step={1} />

          <ColorControl label="Color" value={spark?.color ?? '#ff0000'} onChange={val => onChange(updateData(value, val, 'spark', 'color'))} />

          <RangeControl label="Lines Count" value={parseInt(spark?.sparkCount) >= 0 ? parseInt(spark?.sparkCount) : 8} onChange={val => onChange(updateData(value, val, 'spark', 'sparkCount'))} min={0} max={100} step={1} />

          <RangeControl label="Radius" value={parseInt(spark?.sparkRadius) >= 0 ? parseInt(spark?.sparkRadius) : 15} onChange={val => onChange(updateData(value, val, 'spark', 'sparkRadius'))} min={0} max={100} step={1} />

          <RangeControl label="Extra Scale" value={Number(spark?.extraScale)} onChange={val => onChange(updateData(value, val, 'spark', 'extraScale'))} min={0} max={5} step={0.1} />

          <RangeControl label="Duration (s)" value={Number(spark?.duration) >= 0 ? Number((Number(spark?.duration) / 1000).toFixed(2)) : 0.4} onChange={val => onChange(updateData(value, val * 1000, 'spark', 'duration'))} min={0} max={10} step={0.05} />

          <SelectControl label={__('Easing', 'b-blocks')} labelPosition="edge" value={spark?.easing} onChange={val => onChange(updateData(value, val, 'spark', 'easing'))} options={effectSparkEasingOptions} />
        </>
      }

      { 
        value?.type === 'sparkSimple' && <>
          <RangeControl label="Spark Size" value={parseInt(sparkSimple?.size) >= 0 ? parseInt(sparkSimple?.size) : 40} onChange={val => onChange(updateData(value, val, 'sparkSimple', 'size'))} min={0} max={300} step={1} />
          
          <ColorControl label="Color" value={sparkSimple?.color ?? '#ff6b6b'} onChange={val => onChange(updateData(value, val, 'sparkSimple', 'color'))} />
          <RangeControl label="Duration (s)" value={Number(sparkSimple?.duration) >= 0 ? Number((Number(sparkSimple?.duration) / 1000).toFixed(2)) : 0.8} onChange={val => onChange(updateData(value, val * 1000, 'sparkSimple', 'duration'))} min={0} max={10} step={0.05} />

          <SelectControl label={__('Easing', 'b-blocks')} labelPosition="edge" value={sparkSimple?.easing} onChange={val => onChange(updateData(value, val, 'sparkSimple', 'easing'))} options={effectSparkEasingOptions} />
        </>
      }

      {
        value?.type === 'starburst' && <>
          <RangeControl label="Starburst Size" value={parseInt(starburst?.size) >= 0 ? parseInt(starburst?.size) : 60} onChange={val => onChange(updateData(value, val, 'starburst', 'size'))} min={0} max={300} step={1} />

          <ColorControl label="Color" value={starburst?.color ?? '#ff9a8b'} onChange={val => onChange(updateData(value, val, 'starburst', 'color'))} />

          <RangeControl label="Duration (s)" value={Number(starburst?.duration) >= 0 ? Number(starburst?.duration) : 1.0} onChange={val => onChange(updateData(value, val, 'starburst', 'duration'))} min={0} max={10} step={0.05} />
        </>
      }

      {
        value?.type === 'radial' && <>
          <RangeControl label="Radial Size" value={parseInt(radial?.size) >= 0 ? parseInt(radial?.size) : 80} onChange={val => onChange(updateData(value, val, 'radial', 'size'))} min={0} max={300} step={1} />

          <ColorControl label="Color" value={radial?.color ?? '#74ebd5'} onChange={val => onChange(updateData(value, val, 'radial', 'color'))} />

          <RangeControl label="Duration (s)" value={Number(radial?.duration) >= 0 ? Number(radial?.duration) : 1.2} onChange={val => onChange(updateData(value, val, 'radial', 'duration'))} min={0} max={10} step={0.05} />
        </>
      }
      {
        value?.type === 'explosion' && <>
          <RangeControl label="Explosion Size" value={parseInt(explosion?.size) >= 0 ? parseInt(explosion?.size) : 100} onChange={val => onChange(updateData(value, val, 'explosion', 'size'))} min={0} max={400} step={1} />

          <ColorControl label="Color" value={explosion?.color ?? '#ffb347'} onChange={val => onChange(updateData(value, val, 'explosion', 'color'))} />

          <RangeControl label="Duration (s)" value={Number(explosion?.duration) >= 0 ? Number(explosion?.duration) : 1.5} onChange={val => onChange(updateData(value, val, 'explosion', 'duration'))} min={0} max={10} step={0.05} />
          
          <RangeControl label="Delay (s)" value={Number(explosion?.delay) >= 0 ? Number(explosion?.delay) : 0.05} onChange={val => onChange(updateData(value, val, 'explosion', 'delay'))} min={0} max={2} step={0.05} />
        </>
      }

      {
        value?.type === 'rippleCircle' && <>
          <RangeControl label="Ripple Circle Size" value={parseInt(rippleCircle?.size) >= 0 ? parseInt(rippleCircle?.size) : 100} onChange={val => onChange(updateData(value, val, 'rippleCircle', 'size'))} min={0} max={500} step={1} />

          <RangeControl label="Duration (s)" value={Number(rippleCircle?.duration) >= 0 ? Number(rippleCircle?.duration) : 1.0} onChange={val => onChange(updateData(value, val, 'rippleCircle', 'duration'))} min={0} max={10} step={0.05} />

          <ColorControl label="Background" value={rippleCircle?.background ?? '#7d7dff33'} onChange={val => onChange(updateData(value, val, 'rippleCircle', 'background'))} />

          <RangeControl label="Border Width" value={Number(rippleCircle?.borderWidth) >= 0 ? Number(rippleCircle?.borderWidth) : 2} onChange={val => onChange(updateData(value, val, 'rippleCircle', 'borderWidth'))} min={0} max={10} step={1} />

          <ColorControl label="Border Color" value={rippleCircle?.borderColor ?? '#7d7dff80'} onChange={val => onChange(updateData(value, val, 'rippleCircle', 'borderColor'))} />
        </>
      }

      {
        value?.type === 'rippleDouble' && <>
          <RangeControl label="Ripple Double Size" value={parseInt(rippleDouble?.size) >= 0 ? parseInt(rippleDouble?.size) : 100} onChange={val => onChange(updateData(value, val, 'rippleDouble', 'size'))} min={0} max={500} step={1} />

          <RangeControl label="Duration (s)" value={Number(rippleDouble?.duration) >= 0 ? Number(rippleDouble?.duration) : 1.0} onChange={val => onChange(updateData(value, val, 'rippleDouble', 'duration'))} min={0} max={10} step={0.05} />

          <RangeControl label="Border Width" value={Number(rippleDouble?.borderWidth) >= 0 ? Number(rippleDouble?.borderWidth) : 2} onChange={val => onChange(updateData(value, val, 'rippleDouble', 'borderWidth'))} min={0} max={10} step={1} />

          <ColorControl label="First Background" value={rippleDouble?.background ?? '#ff6b6b1a'} onChange={val => onChange(updateData(value, val, 'rippleDouble', 'background'))} />

          <ColorControl label="Second Background" value={rippleDouble?.secondaryBgColor ?? '#6b6bff1a'} onChange={val => onChange(updateData(value, val, 'rippleDouble', 'secondaryBgColor'))} />


          <ColorControl label="First Border Color" value={rippleDouble?.borderColor ?? '#ff6b6b80'} onChange={val => onChange(updateData(value, val, 'rippleDouble', 'borderColor'))} />

          <ColorControl label="Second Border Color" value={rippleDouble?.secondaryBorderColor ?? '#6b6bff80'} onChange={val => onChange(updateData(value, val, 'rippleDouble', 'secondaryBorderColor'))} />
        </>
      }
      {
        value?.type === 'rippleWave' && <>
          <RangeControl label="Ripple Wave Size" value={parseInt(rippleWave?.size) >= 0 ? parseInt(rippleWave?.size) :150} onChange={val => onChange(updateData(value, val, 'rippleWave', 'size'))} min={0} max={400} step={1} />

          <RangeControl label="Duration (s)" value={Number(rippleWave?.duration) >= 0 ? Number(rippleWave?.duration) : 1.5} onChange={val => onChange(updateData(value, val, 'rippleWave', 'duration'))} min={0} max={10} step={0.05} />

          <RangeControl label="Border Width" value={Number(rippleWave?.borderWidth) >= 0 ? Number(rippleWave?.borderWidth) : 2} onChange={val => onChange(updateData(value, val, 'rippleWave', 'borderWidth'))} min={0} max={10} step={1} />

          <ColorControl label="Wave 1 Border Color" value={rippleWave?.borderColor ?? '#61dbfbcc'} onChange={val => onChange(updateData(value, val, 'rippleWave', 'borderColor'))} />

          <ColorControl label="Wave 2 Border Color" value={rippleWave?.secondaryBorderColor ?? '#82e6b4cc'} onChange={val => onChange(updateData(value, val, 'rippleWave', 'secondaryBorderColor'))} />

          <ColorControl label="Wave 3 Border Color" value={rippleWave?.tertiaryBorderColor ?? '#ffca69cc'} onChange={val => onChange(updateData(value, val, 'rippleWave', 'tertiaryBorderColor'))} />
        </>
      }

      {
        value?.type === 'ripplePulse' && <>
          <RangeControl label="Ripple Pulse Size" value={parseInt(ripplePulse?.size) >= 0 ? parseInt(ripplePulse?.size) : 100} onChange={val => onChange(updateData(value, val, 'ripplePulse', 'size'))} min={0} max={500} step={1} />
          
          <ColorControl label="Background" value={ripplePulse?.background ?? '#3b83f6cc'} onChange={val => onChange(updateData(value, val, 'ripplePulse', 'background'))} />

          <RangeControl label="Duration (s)" value={Number(ripplePulse?.duration) >= 0 ? Number(ripplePulse?.duration) : 1.5} onChange={val => onChange(updateData(value, val, 'ripplePulse', 'duration'))} min={0} max={10} step={0.05} />

          <RangeControl label="Border Width" value={Number(ripplePulse?.borderWidth) >= 0 ? Number(ripplePulse?.borderWidth) : 0} onChange={val => onChange(updateData(value, val, 'ripplePulse', 'borderWidth'))} min={0} max={10} step={1} />

          <ColorControl label="Border Color" value={ripplePulse?.borderColor ?? '#3b83f6cc'} onChange={val => onChange(updateData(value, val, 'ripplePulse', 'borderColor'))} />
        </>
      }

    </>
  );
};

export default EffectStyleOptions;