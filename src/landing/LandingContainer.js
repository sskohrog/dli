import React, { useContext } from 'react'
import { GlobalContext } from '../services/GlobalContext'
import './Landing.scss'

function LandingContainer() {
  const { landingData } = useContext(GlobalContext)
  return (
    <div className='landing-container'>
      TEST
    </div>
  )
}

export default LandingContainer
