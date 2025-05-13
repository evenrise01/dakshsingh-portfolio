import AnimatedProjects from '@/components/Projects'
import React from 'react'
import Image from 'next/image'
import Contact from '@/components/Contact'
import { Footer } from '@/components/footer'
const WorkPage = () => {
  return (
    <>
    <AnimatedProjects/>
    <Contact/>
    <Footer  copyright="Copyright © 2025 Daksh Singh. All rights reserved."/>
    </>
  )
}

export default WorkPage
