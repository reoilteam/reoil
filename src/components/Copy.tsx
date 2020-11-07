import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useCopyToClipboard } from 'react-use'

// Props
export interface CopyProps {
  /**Scope of copy */
  type?: 'innerText' | 'innerHTML' | 'outerHTML'
  /**Callback function with copiedStirng param exported */
  onCopyTriggered?: (copiedString: string)=>void
}

const Copy: React.FC<CopyProps> = ({children, type='innerText', onCopyTriggered, ...props}) => {
  // Hooks
  const [copied, copyToClipboard] = useCopyToClipboard()
  const [copyString, setCopyString] = useState<string>('')

  // Refs
  const copy = useRef<HTMLDivElement>(null)

  // Update copystring
  useEffect(()=>{
    const copyDOM = copy.current
    copyDOM && setCopyString(type==='innerText' ? copyDOM?.innerText : type==='innerHTML' ? copyDOM?.innerHTML : type==='outerHTML' ? copyDOM?.outerHTML : '')
  }, [copyString])

  // Click to copy
  const handleClick = ()=>{
    if(copyString) copyToClipboard(copyString)
  }

  // onCopyTriggered callback
  useEffect(()=>{
    copied.value && onCopyTriggered && onCopyTriggered(copyString)
  }, [copied])

  return(
    <div ref={copy} onClick={handleClick} {...props}>
      {children}
    </div>
  )
}

export default Copy
