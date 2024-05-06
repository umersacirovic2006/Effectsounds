import React from 'react'
import Plans from '../_components/plans'
import FAQ from '../_components/faq'
import Contact from '../_components/contact'

const page = () => {
  return (
    <div className='w-full'>
      <Plans />
      <FAQ />
      <Contact />
    </div>
  )
}

export default page