import { __ } from "@wordpress/i18n";
import { Label } from "../../../bpl-tools/Components";
import { Button, PanelRow, TextControl } from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";

export const InlineMediaUpload = props => {
  const { className, label = '', value, types = ['image'], onChange, placeholder = __('Enter URL') } = props;

  return <div className={className}>
    {label && <Label className='mb5'>{label}</Label>}

    <PanelRow className={`bPlInlineMediaUpload`}>
      <TextControl value={value} onChange={val => onChange(val)} placeholder={placeholder} />

      <MediaUpload
        allowedTypes={types}
        onSelect={val => onChange(val.url)}
        render={({ open }) => <Button  variant="tertiary" onClick={open}>Choose File</Button>}
      />
    </PanelRow>
  </div>
}