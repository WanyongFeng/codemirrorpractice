import React from "react";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
require("codemirror/mode/javascript/javascript");
require("codemirror/theme/abcdef.css");
require('codemirror/addon/selection/active-line');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/edit/closebrackets');

function CodeMirrorTemplate() {
  return (
    <CodeMirror
     value = 'console.log("The speaker said welcome")'
     selection = {{
       activeLine: true
      }}
      options={{
        mode: "javascript",
        theme: "abcdef",
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        autoCloseBrackets: true
      }}
      
      onChange={(editor, data, value) => {}}
    />
  );
}

export default CodeMirrorTemplate;
