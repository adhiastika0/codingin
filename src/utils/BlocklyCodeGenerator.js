import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import { phpGenerator } from 'blockly/php';
import { luaGenerator } from 'blockly/lua';
import { dartGenerator } from 'blockly/dart';

export function BlocklyCodeGenerator(workspace, selectedCodeLanguage) {
  let code, javascript;

  javascriptGenerator.forBlock['text_print'] = function (block) {
    const argument0 =
      javascriptGenerator.valueToCode(
        block,
        'TEXT',
        javascriptGenerator.ORDER_NONE
      ) || '""';
    return 'console.log(' + argument0 + ');\n';
  };

  code = javascriptGenerator.workspaceToCode(workspace);
  javascript = code;

  switch (selectedCodeLanguage) {
    case 'Python':
      code = pythonGenerator.workspaceToCode(workspace);
      break;
    case 'PHP':
      code = phpGenerator.workspaceToCode(workspace);
      break;
    case 'Lua':
      code = luaGenerator.workspaceToCode(workspace);
      break;
    case 'Dart':
      code = dartGenerator.workspaceToCode(workspace);
      break;
  }
  return [code, javascript];
}
