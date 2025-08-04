import { compose } from "@wordpress/compose";
import { withDispatch, withSelect,useSelect } from "@wordpress/data";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import { registerPlugin } from "@wordpress/plugins";
// const { registerPlugin } = wp.plugins;
import { Flex, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "react";

import { debounce } from "../../../bpl-tools/utils/functions";

import OptionSettings from "./settings/OptionSettings";
import { pluginIcon } from "./utils/icons";

import "./editor.scss";
import { Button } from "@wordpress/components";
import useWPAjax from "../settings/hooks/useWPAjax";
// const customEvent = new CustomEvent("dataFetched2");
const Settings = props => {
  const { postMeta, setPostMeta } = props;

  const { data } = useWPAjax('csbAdvScrollbarPremiumChecker', { _wpnonce: window.wpApiSettings.nonce },true);
  const { isPremium = false } = data || {};
  const [isSaving, setIsSaving] = useState(false);
  
  const isSavingPost = useSelect((select) => select('core/editor').isSavingPost(), []);
  const isPublishingPost = useSelect((select) => select('core/editor').isPublishingPost(), []);


  const [csbAvScrData, setCsbAvScrData] = useState(JSON.parse(postMeta?.csbAdvScrollBarCursor || "{}"));

  useEffect(() => {
    debounce(() => {
      if (csbAvScrData) {
          // setPostMeta({ csbAdvScrollBarCursor: JSON.stringify(csbAvScrData) });
        document.dispatchEvent(new CustomEvent("advScrCursorCustomEventOnCursor", {
          detail: {
            data: csbAvScrData
          }
        }));
      }
    }, 600)();
  }, [csbAvScrData]);


  useEffect(() => {
    setIsSaving(isSavingPost || isPublishingPost);
  }, [isSavingPost, isPublishingPost]);



  const handlePublish = async () => {
    setIsSaving(true);
    setPostMeta({ csbAdvScrollBarCursor: JSON.stringify(csbAvScrData) });
    await wp.data.dispatch('core/editor').savePost();
  };

  return <>
    <div>
      <PluginSidebarMoreMenuItem target="advanced-scrollbar-custom-cursor">Advanced Scrollbar</PluginSidebarMoreMenuItem>
      <PluginSidebar name="advanced-scrollbar-custom-cursor" title={__("Advanced Scrollbar - Cursor and Click effect settings.", "advanced-scrollbar")}>
        <PanelBody className="bPlPanelBody" title={__("Cursor", "advanced-scrollbar")} initialOpen={true}>
          <OptionSettings {...{ csbAvScrData, setCsbAvScrData, isPremium }} />

          <Flex className="mt-5" justify="end" width="100%"><Button className="settings-custom-cursor-button" type="button" variant="primary" onClick={handlePublish} disabled={isSaving}>{isSaving ? "Saving..." : "Save"}</Button></Flex>
        </PanelBody>
      </PluginSidebar>
    </div>
  </>
};

const EnhancedSettings = compose([
  withSelect((select) => {
    return {
      postMeta: select('core/editor').getEditedPostAttribute('meta'),
      postType: select('core/editor').getCurrentPostType(),
    };
  }),
  withDispatch((dispatch) => {
    return {
      setPostMeta: (newMeta) => {
        dispatch('core/editor').editPost({ meta: newMeta });
      }
    };
  })
])(Settings);

registerPlugin("advanced-scrollbar-custom-cursor", {
  icon: pluginIcon,
  render: EnhancedSettings,
});
export default EnhancedSettings;