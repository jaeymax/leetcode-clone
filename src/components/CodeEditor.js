import React from 'react'
// import { Editor } from '@monaco-editor/react'
import CodeMirror from '@uiw/react-codemirror';
import { monokai } from '@uiw/codemirror-theme-monokai';
import {StreamLanguage} from '@codemirror/language'
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import {rust} from '@codemirror/lang-rust';
import { java } from '@codemirror/lang-java';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { githubLight } from '@uiw/codemirror-theme-github';
import { githubDark } from '@uiw/codemirror-theme-github';

const CodeEditor = ({language}) => {
  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  }; 
  return (
    // <div className='editor' >
      <div className="editor">
        <CodeMirror className='code-mirror'  theme={githubDark} value='' extensions={[python()]} />
      </div>
    // </div>
  )
}

export default CodeEditor
