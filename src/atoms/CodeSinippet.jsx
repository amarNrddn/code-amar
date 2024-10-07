import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark as themeColor } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { FaRegCopy } from "react-icons/fa";
import Clipboard from 'clipboard';

const CodeSinippet = ({ code }) => {
   const [copied, setCopied] = useState(false)

   const handleCopy = () => {
      const clipboard = new Clipboard('.btn-copy', {
         text: () => code
      })

      clipboard.on('success', () => {
         setCopied(true)
         setTimeout(() => setCopied(false), 2000)
         clipboard.destroy()
      })
   }
   return (
      <div className='relative '>
         <button
            onClick={handleCopy}
            className='btn-copy absolute top-2 right-2 border-[1px] border-gray-500  text-sm p-3 rounded-md'
         >
            {copied ? 'copied!' : <FaRegCopy className='text-gray-500' />}
         </button>
      
         <SyntaxHighlighter language='javascript' style={themeColor}>
            {code}
         </SyntaxHighlighter>
      </div>
   )
}

export default CodeSinippet