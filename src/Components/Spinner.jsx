import React from 'react'
import Spinner from '../assets/Svg/spinner.svg'

export default function Spinnerr() {
  return (
    <div className='bg-black bg-opacity-50 flex items-center justify-center fixed
    left-0 right-0 bottom-0 top-0 z-40'>
      <div>
        <img src={Spinner} alt='loading...' className='h-24'/>
      </div>
    </div>
  )
}
