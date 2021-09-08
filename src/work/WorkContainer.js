import React, { useContext } from 'react'
import { GlobalContext } from '../services/GlobalContext'
import './Work.scss'

function WorkContainer({ id }) {
  const { workItems } = useContext(GlobalContext)
  return (
    <div className='work-container'>
      TEST
    </div>
  )
}

export default WorkContainer
