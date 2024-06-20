'use client';

import React, { useEffect, useRef } from 'react';
import * as En from 'blockly/msg/en';
import { ZoomToFitControl } from '@blockly/zoom-to-fit';
import { inject, serialization, setLocale, VerticalFlyout } from 'blockly';
import { BlocklyCodeGenerator } from '@/utils/BlocklyCodeGenerator';

setLocale(En);

function Playground({ updateCode, ...props }) {
  const blocklyDiv = useRef(null);

  useEffect(() => {
    //* Blockly Config
    VerticalFlyout.prototype.getFlyoutScale = function () {
      return 1;
    };

    const workspace = inject(blocklyDiv.current, {
      ...props,
    });
    const zoomToFit = new ZoomToFitControl(workspace);
    zoomToFit.init();

    const saveWorkspace = () => {
      const state = serialization.workspaces.save(workspace);
      localStorage.setItem('workspace-state', JSON.stringify(state));
    };

    const loadWorkspace = () => {
      const state = localStorage.getItem('workspace-state');
      if (state) {
        serialization.workspaces.load(JSON.parse(state), workspace);
      }
    };

    const generateCode = (event) => {
      if (workspace.isDragging()) return;
      const code = BlocklyCodeGenerator(workspace, 'PHP');

      updateCode(code);
    };

    workspace.addChangeListener(generateCode);

    loadWorkspace();

    workspace.addChangeListener(saveWorkspace);

    return () => {
      workspace.dispose();
      workspace.removeChangeListener(saveWorkspace);
    };
  }, [props, updateCode]);

  return <div ref={blocklyDiv} id='blocklyDiv' className='size-full '></div>;
}

export default Playground;
