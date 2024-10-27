import React from 'react'
import Image from 'next/image'

function learnImage() {
  return (
    <div>
        <Image src = "/img.jpg" alt='nn' width={300} height={300} backdrop />
    </div>
  )
}

export default learnImage