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
// const customEvent = new CustomEvent("dataFetched2");
const Settings = props => {
  const { postMeta, setPostMeta } = props;

  const [isSaving, setIsSaving] = useState(false);
  
  const isSavingPost = useSelect((select) => select('core/editor').isSavingPost(), []);
  const isPublishingPost = useSelect((select) => select('core/editor').isPublishingPost(), []);


  const [crblData, setCrblData] = useState(JSON.parse(postMeta?.bBlocksCursor || "{}"));

  useEffect(() => {
    debounce(() => {
      if (crblData) {
        setPostMeta({ bBlocksCursor: JSON.stringify(crblData) });
        document.dispatchEvent(new CustomEvent("bBlocksCustomEventOnCursor", {
          detail: {
            data: crblData
          }
        }));
      }
    }, 600)();
  }, [crblData]);


  useEffect(() => {
    setIsSaving(isSavingPost || isPublishingPost);
  }, [isSavingPost, isPublishingPost]);
  const handleCustomPublish = async () => {
    setIsSaving(true);
    await wp.data.dispatch('core/editor').savePost();
  };

  return <>
    <div>
      <PluginSidebarMoreMenuItem target="advanced-scrollbar-custom-cursor">Advanced Scrollbar</PluginSidebarMoreMenuItem>
      <PluginSidebar name="advanced-scrollbar-custom-cursor" title={__("Advanced Scrollbar - Cursor and Click effect settings.", "b-blocks")}>
        <PanelBody className="bPlPanelBody" title={__("Cursor", "b-blocks")} initialOpen={true}>
          <OptionSettings {...{ crblData, setCrblData }} />

          <Flex justify="end" width="100%"><Button className="settings-custom-cursor-button" type="button" variant="primary" onClick={handleCustomPublish} disabled={isSaving}>{isSaving ? "Saving..." : "Save"}</Button></Flex>
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