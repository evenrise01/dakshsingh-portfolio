import React from 'react'
import BucketListPage from './bucket-list'
import Contact from '@/components/Contact'
import { Footer } from '@/components/footer'

const BucketMainPage = () => {
  return (
    <>
      <BucketListPage/>
      <Contact/>
      <Footer  copyright="Copyright © 2025 Daksh Singh. All rights reserved."/>
    </>
  )
}

export default BucketMainPage
