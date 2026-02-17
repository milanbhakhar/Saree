import React, { useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', 
    })
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
