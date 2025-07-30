import { Flex, RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Label } from '../../../../../bpl-tools/Components';

const CursorImgShape = ({ csbAvScrData, setCsbAvScrData }) => {

  const { dirUrl } = window.csbAdvScrollbarCursorConfig;

  return (
    <div className='mt20'>
      <Flex align="flex-start" justify="space-between" width="100%" gap="60px">
        <Label className="whiteSpaceNoWrap mt20">{__("Select Cursor Image", "advanced-scrollbar")}</Label>
        <RadioControl
          help="Select any option for showing cursor"
          selected={csbAvScrData?.shape?.customImg?.img}
          options={[
            { label: <img src={dirUrl + "img/cursor1.png"}></img>, value: `${dirUrl}img/cursor1.png` },
            { label: <img src={dirUrl + "img/cursor2.png"}></img>, value: `${dirUrl}img/cursor2.png` },
            { label: <img src={dirUrl + "img/cursor3.png"}></img>, value: `${dirUrl}img/cursor3.png` },
            { label: <img src={dirUrl + "img/cursor4.png"}></img>, value: `${dirUrl}img/cursor4.png` },
          ]}
          onChange={(value) => setCsbAvScrData({ ...csbAvScrData, shape: { ...csbAvScrData?.shape, customImg: { ...csbAvScrData?.shape?.customImg, img: value } } })}
        />
      </Flex>
    </div>
  );
};

export default CursorImgShape;