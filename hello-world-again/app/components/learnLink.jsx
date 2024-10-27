import Link from 'next/link'
import React from 'react'

function LearnLink() {
  const id = "dhiskaooo";
  return (
    <>
    <Link href="../colorBox">Go to colorBox</Link>
    <Link href={`../user/profiles/${id}`}>Go to user profile</Link>
    </>
  )
}

export default LearnLink