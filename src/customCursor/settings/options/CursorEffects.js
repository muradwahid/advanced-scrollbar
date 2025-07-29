import { SelectControl } from '@wordpress/components';
import React from 'react';
import { cursorEffectsOptions } from '../../utils/options';

const CursorEffects = ({value, onChange}) => {
  return (
    <>
      <SelectControl className='mt10' label="Effect Type" labelPosition='edge' value={value?.type} onChange={(val) => onChange({ ...value, type: val })} options={cursorEffectsOptions} />
    </>
  );
};

export default CursorEffects;