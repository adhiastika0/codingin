import { inject } from 'blockly';

function createWorkspace(blocklyDiv, props) {
  const workspace = inject(blocklyDiv, { ...props });

  return workspace;
}

export default createWorkspace;
