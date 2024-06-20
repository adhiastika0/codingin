import React from 'react';
import Playground from '../Playground';
import * as Blockly from 'blockly/core';
import { toolboxJson } from '@/constants';

function BlockSection({
  updateCode,
  levelId,
  selectedCodeLanguage,
  workspaceRef,
}) {
  return (
    <Playground
      levelId={levelId}
      updateCode={updateCode}
      selectedCodeLanguage={selectedCodeLanguage}
      readOnly={false}
      trashcan={true}
      zoom={{
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true,
      }}
      move={{
        scrollbars: true,
        drag: true,
        wheel: true,
      }}
      grid={{
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true,
      }}
      toolbox={toolboxJson}
      renderer={'thrasos'}
      theme={Blockly.Theme.defineTheme('modest', {
        fontStyle: {
          family: 'Roboto',
          size: 12,
        },
        blockStyles: {
          logic_blocks: {
            colourPrimary: '#D1C4E9',
            colourSecondary: '#EDE7F6',
            colorTertiary: '#B39DDB',
            text: '#000',
          },
          loop_blocks: {
            colourPrimary: '#A5D6A7',
            colourSecondary: '#E8F5E9',
            colorTertiary: '#66BB6A',
          },
          math_blocks: {
            colourPrimary: '#2196F3',
            colourSecondary: '#1E88E5',
            colorTertiary: '#0D47A1',
          },
          text_blocks: {
            colourPrimary: '#FFCA28',
            colourSecondary: '#FFF8E1',
            colorTertiary: '#FF8F00',
          },
          list_blocks: {
            colourPrimary: '#4DB6AC',
            colourSecondary: '#B2DFDB',
            colorTertiary: '#009688',
          },
          variable_blocks: {
            colourPrimary: '#EF9A9A',
            colourSecondary: '#FFEBEE',
            colorTertiary: '#EF5350',
          },
          variable_dynamic_blocks: {
            colourPrimary: '#EF9A9A',
            colourSecondary: '#FFEBEE',
            colorTertiary: '#EF5350',
          },
          procedure_blocks: {
            colourPrimary: '#D7CCC8',
            colourSecondary: '#EFEBE9',
            colorTertiary: '#BCAAA4',
          },
        },
      })}
    />
  );
}

export default BlockSection;
