import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import { phpGenerator } from 'blockly/php';
import { luaGenerator } from 'blockly/lua';
import { dartGenerator } from 'blockly/dart';

export function BlocklyCodeGenerator(workspace, selectedCodeLanguage) {
  let code;
  console.log(workspace);
  switch (selectedCodeLanguage) {
    case 'JavaScript':
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

      break;
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
    default:
      code = 'No code snippets to display.';
  }
  return code;
}
