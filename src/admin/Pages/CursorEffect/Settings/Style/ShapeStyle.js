import { Button, Flex, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { BButtonGroup, ColorControl, Label, SolidBackground } from "../../../../../../../bpl-tools/Components";

import { useState } from "react";

const ShapeStyle = ({ value, onChange }) => {

  const [followTab, setFollowTab] = useState('follow');

  const { ribbon } = value;
  const gradientColors = value?.gradient?.colors !== "" && Array.isArray(value?.gradient?.colors) ? value?.gradient?.colors : ['#f97316', '#f59e0b', '#facc15'];

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  const ribbonColors = ribbon?.colors || ["#FC8EAC"];
  return  <>
      {
        value?.type === 'follow' && <>
          <RangeControl label="Cursor Size" labelPosition="edge" value={parseInt(value?.follow?.size) >= 0 ? parseInt(value?.follow?.size) : 40} onChange={val => onChange(updateData(value, val + "px", 'follow', 'size'))} />
          <BButtonGroup label='' value={followTab} onChange={setFollowTab} options={[
            { value: 'follow', label: __("Follow Cursor", 'b-blocks') },
            { value: 'inner', label: __("Inner Cursor", 'b-blocks') }
          ]} />

                {followTab === "follow" && <>

                  <SolidBackground label="Cursor Color" value={value?.follow?.followBg ?? "#f59f0b94"} onChange={val => onChange(updateData(value, val, 'follow', 'followBg'))} />

                  <ColorControl label="Border Color" value={value?.follow?.followBorderColor ?? "#f59f0b94"} onChange={val => onChange(updateData(value, val, 'follow', 'followBorderColor'))} />

                  <RangeControl label="Border Width" value={parseInt(value?.follow?.followBorderWidth) >= 0 ? parseInt(value?.follow?.followBorderWidth) : 1} defaultValue={1} resetFallbackValue={1} min={0} max={10} step={1} onChange={(val) => onChange(updateData(value, val + "px", 'follow', 'followBorderWidth'))} />

                </>}
                {
                  followTab === "inner" && <>
                    <SolidBackground label="Cursor Color" value={value?.follow?.innerBg ?? "#f974167c"} onChange={val => onChange(updateData(value, val, 'follow', 'innerBg'))} />

                    <ColorControl label="Border Color" value={value?.follow?.innerBorderColor ?? "#f974167c"} onChange={val => onChange(updateData(value, val, 'follow', 'innerBorderColor'))} />

                    <RangeControl label="Border Width" value={parseInt(value?.follow?.innerBorderWidth) >= 0 ? parseInt(value?.follow?.innerBorderWidth) : 1} defaultValue={1} resetFallbackValue={1} min={0} max={10} step={1} onChange={(val) => onChange(updateData(value, val + "px", 'follow', 'innerBorderWidth'))} />

                  </>
                }

        </>
      }

      {
        value?.type === 'blob' && <>
          <RangeControl label={__('Blob Size', 'b-blocks')} value={parseInt(value?.blob?.blobSize) >= 0 ? parseInt(value?.blob?.blobSize) : 125} onChange={val => onChange(updateData(value, val, 'blob', 'blobSize'))} min={0} max={600} step={1} />

          <ColorControl label={__('Blob Color', 'b-blocks')} value={value?.blob?.fillColor ?? '#00f0ff'} onChange={val => onChange(updateData(value, val, 'blob', 'fillColor'))} />

        </>
      }

      {
        value?.type === 'dot' && <>
          <RangeControl label="Cursor Size" value={Number(value?.dot?.size) >= 0 ? Number(value?.dot?.size) : 12} onChange={val => onChange(updateData(value, val, 'dot', 'size'))} min={0} max={30} step={1} />

          <SolidBackground label="Cursor Color" value={value?.dot?.color ?? '#3B82F6'} onChange={val => onChange(updateData(value, val, 'dot', 'color'))} />
        </>
      }

      {
        value?.type === 'elastic' && <>
          <RangeControl label="Cursor Size" value={parseInt(value?.elastic?.size) >= 0 ? parseInt(value?.elastic?.size) : 40} onChange={val => onChange(updateData(value, val, 'elastic', 'size'))} min={0} max={150} step={1} />

          <ColorControl label="Cursor Color" value={value?.elastic?.color ?? '#EF4444'} onChange={val => onChange(updateData(value, val, 'elastic', 'color'))} />

          <RangeControl label="Border Width" value={parseInt(value?.elastic?.borderWidth) >= 0 ? parseInt(value?.elastic?.borderWidth) : 2} onChange={val => onChange(updateData(value, val + "px", 'elastic', 'borderWidth'))} min={1} max={10} step={1} />

        </>
      }

      {
        value?.type === 'digital' && <GlitchCursorOptions value={value?.digital} onChange={(val) => onChange(updateData(value, val, 'digital'))} size={20} primaryColor='#ff4040' secondaryColor='#40ff40' tertiaryColor='#4040ff' />
      }
      {
        value?.type === 'analog' && <GlitchCursorOptions value={value?.analog} onChange={(val) => onChange(updateData(value, val, 'analog'))} size={20} primaryColor='#ffffff' secondaryColor='#ff4444' tertiaryColor='#4444ff' />
      }
      {
        value?.type === 'cyberpunk' && <GlitchCursorOptions value={value?.cyberpunk} onChange={(val) => onChange(updateData(value, val, 'cyberpunk'))} size={20} primaryColor='#ff0080' secondaryColor='#00ffff' tertiaryColor='#ff0000' />
      }
      {
        value?.type === 'matrix' && <GlitchCursorOptions value={value?.matrix} onChange={(val) => onChange(updateData(value, val, 'matrix'))} size={20} primaryColor='#00ff00' secondaryColor='#40ff40' tertiaryColor='#80ff80' />
      }

      {
        value?.type === 'glow' && <>
          <RangeControl label="Cursor Size" value={Number(value?.glow?.size) >= 0 ? Number(value?.glow?.size) : 50} onChange={val => onChange(updateData(value, val, 'glow', 'size'))} min={0} max={200} step={1} />

          <RangeControl label="Inner Cursor Size" value={Number(value?.glow?.innerSize) >= 0 ? Number(value?.glow?.innerSize) : 10} onChange={val => onChange(updateData(value, val, 'glow', 'innerSize'))} min={0} max={150} step={1} />

          <ColorControl label={__('Cursor Color', 'b-blocks')} value={value?.glow?.color ?? '#F97316'} onChange={val => onChange(updateData(value, val, 'glow', 'color'))} />
        </>
      }

      {
        value?.type === 'gradient' && <>
          <RangeControl label="Cursor Size" value={parseInt(value?.gradient?.size) >= 0 ? parseInt(value?.gradient?.size) : 50} onChange={val => onChange(updateData(value, val, 'gradient', 'size'))} min={0} max={200} step={1} />
          {
            gradientColors.map((color, index) => <Flex key={index} gap={5} align="center" justify="space-between" >
              <Label className='whiteSpaceNoWrap'>{`Color ${index + 1}`}</Label>
              <Flex gap={5} align="center" justify="end">
                <ColorControl
                  label=""
                  value={color}
                  onChange={val => {
                    const newColors = [...gradientColors];
                    newColors[index] = val;
                    onChange(updateData(value, newColors, 'gradient', 'colors'));
                  }}
                />

                <Button className="gradientBtn-delete" icon="trash" onClick={() => { const newColors = [...gradientColors]; newColors.splice(index, 1); onChange(updateData(value, newColors, 'gradient', 'colors')); }} />

              </Flex>
            </Flex>)
          }
          <Flex justify="center">
            <Button className="mt10" isPrimary onClick={() => onChange(updateData(value, [...gradientColors, getRandomColor()], 'gradient', 'colors'))}>Add Color</Button>
          </Flex>

        </>
      }

      {
        value?.type === 'image' && <>
          <RangeControl label="Cursor Size" value={parseInt(value?.image?.size) >= 0 ? parseInt(value?.image?.size) : 80} onChange={val => onChange(updateData(value, val, 'image', 'size'))} min={0} max={200} step={1} />

          <RangeControl label="Border Radius" value={parseInt(value?.image?.rounded) >= 0 ? parseInt(value?.image?.rounded) : 8} onChange={val => onChange(updateData(value, val + "px", 'image', 'rounded'))} min={0} max={400} step={1} />
        </>
      }

      {
        value?.type === 'magnetic' && <>
          <RangeControl label="Cursor Size" value={parseInt(value?.magnetic?.size) >= 0 ? parseInt(value?.magnetic?.size) : 40} onChange={val => onChange(updateData(value, val, 'magnetic', 'size'))} min={0} max={200} step={1} />

          <ColorControl label={__('background Color', 'b-blocks')} value={value?.magnetic?.backgroundColor ?? '#f59e0b1a'} onChange={val => onChange(updateData(value, val, 'magnetic', 'backgroundColor'))} />

          <ColorControl label={__('Border Color', 'b-blocks')} value={value?.magnetic?.borderColor ?? '#F59E0B'} onChange={val => onChange(updateData(value, val, 'magnetic', 'borderColor'))} />

          <RangeControl label="Border Width" value={parseInt(value?.magnetic?.borderWidth) >= 0 ? parseInt(value?.magnetic?.borderWidth) : 2} onChange={val => onChange(updateData(value, val, 'magnetic', 'borderWidth'))} min={0} max={30} step={1} />

        </>
      }
      {
        value?.type === 'neon' && <>
          <RangeControl label="Cursor Size" value={parseInt(value?.neon?.size) >= 0 ? parseInt(value?.neon?.size) : 30} onChange={val => onChange(updateData(value, val, 'neon', 'size'))} min={0} max={200} step={1} />

          <ColorControl label={__('Color', 'b-blocks')} value={value?.neon?.color ?? '#08F7FE'} onChange={val => onChange(updateData(value, val, 'neon', 'color'))} />

          {/* <RangeControl label="Shadow Size" value={Number(value?.neon?.shadowSize) >= 0 ? Number(value?.neon?.shadowSize) : 20} onChange={val => onChange(updateData(value, val, 'neon', 'shadowSize'))} min={0} max={250} step={1} /> */}

        </>
      }
      {
        value?.type === 'ribbon' && <>
          {
            ribbonColors.map((color, index) => <Flex key={index} gap={5} align="center" justify="space-between" >
              <Label className='whiteSpaceNoWrap'>{`Color ${index + 1}`}</Label>
              <Flex gap={5} align="center" justify="end">
                <ColorControl
                  label=""
                  value={color}
                  onChange={val => {
                    const newColors = [...ribbonColors];
                    newColors[index] = val;
                    onChange(updateData(value, newColors, 'ribbon', 'colors'));
                  }}
                />

                {ribbonColors?.length > 1 && <Button className="gradientBtn-delete" icon="trash" onClick={() => { const newColors = [...ribbonColors]; newColors.splice(index, 1); onChange(updateData(value, newColors, 'ribbon', 'colors')); }} />}

              </Flex>
            </Flex>)
          }
          <Flex justify="center">
            <Button className="mt10" isPrimary onClick={() => onChange(updateData(value, [...ribbonColors, getRandomColor()], 'ribbon', 'colors'))}>Add Color</Button>
          </Flex>


        </>
      }
      {/* size = 60,
      pixelSize = 6,
      color = '#0EA5E9', */}
      {
        value?.type === 'pixelated' && <>
          <RangeControl label="Cursor Size" value={parseInt(value?.pixelated?.size) >= 0 ? parseInt(value?.pixelated?.size) : 60} onChange={val => onChange(updateData(value, val, 'pixelated', 'size'))} min={0} max={250} step={1} />

          <RangeControl label="Pixel Size" value={parseInt(value?.pixelated?.pixelSize) >= 0 ? parseInt(value?.pixelated?.pixelSize) : 6} onChange={val => onChange(updateData(value, val, 'pixelated', 'pixelSize'))} min={0} max={150} step={1} />

          <SolidBackground label={__('Color', 'b-blocks')} value={value?.pixelated?.color ?? 'linear-gradient(135deg, #fecda5 0%, #fe2d2d 50%, #6b003e 100%)'} onChange={val => onChange(updateData(value, val, 'pixelated', 'color'))} />

          {/* <RangeControl label="Shadow Size" value={Number(value?.neon?.shadowSize) >= 0 ? Number(value?.neon?.shadowSize) : 20} onChange={val => onChange(updateData(value, val, 'neon', 'shadowSize'))} min={0} max={250} step={1} /> */}

        </>
      }

      {
        value?.type === 'ring' && <>
          <RangeControl label={__("Cursor Size", 'b-blocks')} value={parseInt(value?.ring?.size) >= 0 ? parseInt(value?.ring?.size) : 40} onChange={val => onChange(updateData(value, val, 'ring', 'size'))} min={0} max={250} step={1} />

          <ColorControl label={__('Border Color', 'b-blocks')} value={value?.ring?.borderColor ?? '#10B981'} onChange={val => onChange(updateData(value, val, 'ring', 'borderColor'))} />

          <RangeControl label={__("Border Size", 'b-blocks')} value={parseInt(value?.ring?.borderWidth) >= 0 ? parseInt(value?.ring?.borderWidth) : 2} onChange={val => onChange(updateData(value, val, 'ring', 'borderWidth'))} min={0} max={20} step={1} />
        </>
      }

      {
        value?.type === 'sketch' && <>
          <ColorControl label={__('Color', 'b-blocks')} value={value?.sketch?.color ?? '#000000'} onChange={val => onChange(updateData(value, val, 'sketch', 'color'))} />
        </>
      }

      {
        value?.type === 'spotlight' && <>
          <RangeControl label={__("Cursor Size", 'b-blocks')} value={parseInt(value?.spotlight?.size) >= 0 ? parseInt(value?.spotlight?.size) : 150} onChange={val => onChange(updateData(value, val, 'spotlight', 'size'))} min={0} max={500} step={1} />

          <ColorControl label={__('Color', 'b-blocks')} value={value?.spotlight?.color ?? '#ff0000'} onChange={val => onChange(updateData(value, val, 'spotlight', 'color'))} />
        </>
      }

      {
        value?.type === 'splash' && <>

          <RangeControl label={__("Cursor Size", 'b-blocks')} value={Number(value?.splash?.size) >= 0 ? Number(value?.splash?.size) : 0.2} onChange={val => onChange(updateData(value, val, 'splash', 'size'))} min={0} max={1} step={0.01} />

        </>
      }

      {
        value?.type === 'text' && <>
          <RangeControl label={__("Cursor Size", 'b-blocks')} value={parseInt(value?.text?.size) >= 0 ? parseInt(value?.text?.size) : 80} onChange={val => onChange(updateData(value, val, 'text', 'size'))} min={0} max={1000} step={1} />

          <SolidBackground label={__('Background Color', 'b-blocks')} value={value?.text?.backgroundColor ?? '#3b82f6'} onChange={val => onChange(updateData(value, val, 'text', 'backgroundColor'))} />

          <ColorControl label={__('Text Color', 'b-blocks')} value={value?.text?.textColor ?? '#ffffff'} onChange={val => onChange(updateData(value, val, 'text', 'textColor'))} />

        </>
      }

    </>
};

export default ShapeStyle;

const GlitchCursorOptions = ({ value = {}, onChange, size, primaryColor, secondaryColor, tertiaryColor }) => {

  return <>
    <RangeControl label="Cursor Size" value={parseInt(value?.size) >= 0 ? parseInt(value?.size) : size} onChange={val => onChange(updateData(value, val, 'size'))} min={0} max={100} step={1} />

    <ColorControl label="Primary Color" value={value?.primaryColor ?? primaryColor} onChange={val => onChange(updateData(value, val, 'primaryColor'))} />

    <ColorControl label="Secondary Color" value={value?.secondaryColor ?? secondaryColor} onChange={val => onChange(updateData(value, val, 'secondaryColor'))} />

    <ColorControl label="Tertiary Color" value={value?.tertiaryColor ?? tertiaryColor} onChange={val => onChange(updateData(value, val, 'tertiaryColor'))} />
  </>

}