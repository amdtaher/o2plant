import React from 'react'
// import Hero0 from './Hero0/page'
import Hero from './Hero/page'
import Trendy from './Trendy/page'
import BestSeller from './BestSeller/page'
import O2 from './O2/page'
import Feedback from './Feedback/page'

const page = () => {
  return (
    <>
      <menu>
        <div className='bg hero-bg'>
          {/* <Hero0/>  */}
          <Hero/>
          <Trendy/>
        </div>
        <BestSeller/>
        <Feedback/>
        <O2/>
      </menu>
    </>
  )
}

export default page