'use client'
import React from 'react'
import { Navbar } from './components/navigation/top-nav'
import Footer from './components/navigation/footer'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <title>Pitchfork Eatery</title>
      <meta name="description" content="Newest Local Eatery serving up your favorite Country Style dishes!" />
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}