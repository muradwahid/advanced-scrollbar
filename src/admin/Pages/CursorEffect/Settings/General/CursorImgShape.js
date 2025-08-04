import { Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { RadioControlPro } from '../../../../../../../bpl-tools/ProControls';

const CursorImgShape = ({ csbAvScrData, setCsbAvScrData, dirUrl, isPremium, isProModalOpen, setIsProModalOpen }) => {

  return (
    <div className='mt20'>


      {/* <BControlPro isPremium={isPremium} setIsProModalOpen={setIsProModalOpen} labelPosition='edge' label={__('Theme', 'image-compare')} value={theme} options={[{ label: "Default", value: "default" }, { label: "Slider", value: "slider" }]} onChange={(val) => setAttributes({ theme: val })} Component={SelectControl} /> */}

      <Flex justify='center'>
        <RadioControlPro
          label={__("Select Cursor Image", "advanced-scrollbar")}
          help="Select any option for showing cursor"
          selected={csbAvScrData?.shape?.customImg?.img}
          options={[
            { label: <img src={dirUrl + "img/cursor1.png"}></img>, value: `${dirUrl}img/cursor1.png` },
            { label: <img src={dirUrl + "img/cursor2.png"}></img>, value: `${dirUrl}img/cursor2.png` },
            { label: <img src={dirUrl + "img/cursor3.png"}></img>, value: `${dirUrl}img/cursor3.png` },
            { label: <img src={dirUrl + "img/cursor4.png"}></img>, value: `${dirUrl}img/cursor4.png` },
          ]}
          onChange={(value) => setCsbAvScrData({ ...csbAvScrData, shape: { ...csbAvScrData?.shape, customImg: { ...csbAvScrData?.shape?.customImg, img: value } } })}
          isProModalOpen={isProModalOpen}
          isPremium={isPremium}
          setIsProModalOpen={setIsProModalOpen}
          labelPosition="left"
        />
      </Flex>
    </div>
  );
};

export default CursorImgShape;