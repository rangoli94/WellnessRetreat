import React from 'react'
import BodyHeader from './BodyHeader'
import MainContent from './MainContent'
import FooterSection from './FooterSection'

export default function BodySection() {
  return (
    <div className='px-2 py-5'>
        <BodyHeader />
        <MainContent />
    </div>
  )
}
