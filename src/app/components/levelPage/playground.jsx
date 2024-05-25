"use client";

import React from "react";
import { useEffect, useRef } from "react";
// Import Blockly core.
import * as Blockly from "blockly/core";
// Import the default blocks.
import * as libraryBlocks from "blockly/blocks";
// Import a generator.
import { javascriptGenerator } from "blockly/javascript";
// Import a message file.
import * as En from "blockly/msg/en";

Blockly.setLocale(En);

function Playground(props) {
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  useEffect(() => {
    const { initialXml, children, ...rest } = props;

    if (!primaryWorkspace.current) {
      primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox.current,
        ...rest,
      });
    }

    if (initialXml) {
      Blockly.Xml.clearWorkspaceAndLoadFromXml(
        Blockly.utils.xml.textToDom(initialXml),
        primaryWorkspace.current
      );
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <>
      <div ref={blocklyDiv} id="blocklyDiv" className=" h-full" />
      <div style={{ display: "none" }} ref={toolbox}>
        {props.children}
      </div>
    </>
  );
}

export default Playground;
