
import { SelectControl, TabPanel, ToggleControl } from "@wordpress/components";
import { useEffect, useState } from "react";
import { __ } from "@wordpress/i18n";

import CursorShape from "./General/CursorShape";
import CursorEffect from "./ClickEffect/CursorEffect";

import { debounce } from "../../../../../../bpl-tools/utils/functions";

import { cursorSourceOptions } from "../../../../customCursor/utils/options";
import { shapeAndEffectOptions } from "../utils/options";
import useWPAjax from "../../../utils/useWPAjax";
import CursorImgShape from "./General/CursorImgShape";
import { InlineMediaUpload } from "../../../../components/InlineMediaUpload";

const Settings = ({ dataInfo }) => {
  const { dirUrl, nonce } = dataInfo;
  const [csbAvScrData, setCsbAvScrData] = useState(null);

  // fetch token from bplugins server using ajax
  const { data, isLoading, saveData } = useWPAjax('csb_adv_scrollbar_cursor_data_settings', { nonce }); //authorize

  useEffect(() => {
    if (!isLoading && data && !csbAvScrData) {
      setCsbAvScrData(data);
    }
    // console.log({ data });
  }, [isLoading])


  const saveInformation = () => {
    saveData({ csbAvScrData: JSON.stringify(csbAvScrData), save: true });
  }

  useEffect(() => {
    // saveInformation();
    // console.log(csbAvScrData)
    window.dispatchEvent(new CustomEvent("csbAdvScrollbarCursorSettings", {
      detail: {
        data: csbAvScrData
      }
    }));
    debounce(saveInformation, 600)();
  }, [JSON.stringify(csbAvScrData)]);

  return (
    <div className='custom-cursor-settings-container'>
      <h3 className='custom-cursor-title'>Settings</h3>
      <div className='custom-cursor-settings'>
        <TabPanel className="bPlTabPanel" activeClass='activeTab' tabs={shapeAndEffectOptions}>
          {tab => <>

            {tab.name == "shape" && <>
              <SelectControl className="mt10" label={__("Select Cursor Source", "advanced-scrollbar")} labelPosition="edge" options={cursorSourceOptions} value={csbAvScrData?.source} onChange={value => setCsbAvScrData({ ...csbAvScrData, source: value })} />
              {csbAvScrData?.source === "shape" && <CursorShape {...{ csbAvScrData, setCsbAvScrData }} />}
              {csbAvScrData?.source === "predefined" && <CursorImgShape {...{ csbAvScrData, setCsbAvScrData, dirUrl }} />}
              {csbAvScrData?.source === "customUrl" && <InlineMediaUpload label={__("Choose Cursor Image", "advanced-scrollbar")} value={csbAvScrData?.shape?.customImg?.url} onChange={value => setCsbAvScrData({ ...csbAvScrData, shape: { ...csbAvScrData?.shape, customImg: { ...csbAvScrData?.shape?.customImg, url: value } } })} />}
              
            </>}
            {tab.name == "effect" && <CursorEffect {...{ csbAvScrData, setCsbAvScrData }} />}
          </>}
        </TabPanel>

      </div>
    </div>
  );
};

export default Settings;