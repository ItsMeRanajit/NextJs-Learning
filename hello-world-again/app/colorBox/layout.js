import React from 'react'

export default function layout({children , leftBar, rightBar}) {
  const element = false;
  return (
    <div>
        {children}
        {element ? leftBar : rightBar}
    </div>
  )
}
// this is how the parallel routes are used conditionally