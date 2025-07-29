import EffectStyleOptions from './EffectStyleOptions';
import ShapeStyleOptions from './ShapeStyleOptions';

const Style = ({ crblData, setCrblData }) => {
  return <>
    {(crblData?.shape?.type && crblData?.shape?.type !== 'none') && <ShapeStyleOptions initialOpen={crblData?.effect?.type === 'none' ? true : false} value={crblData?.shape || {}} onChange={(val) => setCrblData({ ...crblData, shape: val })} />}

    {crblData?.effect?.type &&crblData?.effect?.type !== 'none' && <EffectStyleOptions initialOpen={crblData?.shape?.type === 'none' ? true : false} value={crblData?.effect} onChange={val => setCrblData({ ...crblData, effect: val })} />}
    </>
};

export default Style;