'use client'

import React from 'react'
import { ScrollRestoration } from 'react-router-dom'



export default function ScrollRestorationComp() {
  return (
    <>
        <ScrollRestoration  getKey={(location, matches) => {
        return location.pathname
      }}/>
    </>
  )
}
