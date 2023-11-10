import { useState } from 'react'
import './App.css'
import { marked } from 'marked';

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3

  [title](https://www.example.com)

  \`code\`

  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
  `);
  marked.setOptions({
    breaks:true,
  })
  return (
    <div>
      <h1 className='title'>Markdown Previewer</h1>
      <div className='container'>
        <div className='e-container'>
        <h4 className='des'>Editor</h4>
        <textarea name='editor' id='editor'
        onChange={(d) => {
          setText(d.target.value);
        }}
        value={text}></textarea>
        </div>
        <div className='p-container'>
        <h4 className='des'>Previewer</h4>
        <div id='preview' 
        dangerouslySetInnerHTML={{
        __html: marked(text),
        }}></div>
        </div>
      </div>
    </div>
  )
}

export default App
