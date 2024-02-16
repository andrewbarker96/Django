'use client'
import React from 'react'
import Footer from './components/navigation/footer.tsx'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: RootLayoutProps) {
  return (
    <>
      <title>Pitchfork Eatery</title>
      <meta name="description" content="Newest Local Eatery serving up your favorite Country Style dishes!" />
      <main className="home">{children}</main>
      <Footer />
    </>
  )
}