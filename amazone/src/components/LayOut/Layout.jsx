import React from 'react'
import Header from '../Header/Header'

function Layout({childlen}) {
  return (
    <div>
      <Header />
      {childlen}
    </div>
  )
}

export default Layout
