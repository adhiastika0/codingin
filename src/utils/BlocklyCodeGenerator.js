import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import { phpGenerator } from 'blockly/php';
import { luaGenerator } from 'blockly/lua';
import { dartGenerator } from 'blockly/dart';

export function BlocklyCodeGenerator(workspace, selectedLanguage) {
  let code;
  switch (selectedLanguage) {
    case 'JavaScript':
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
