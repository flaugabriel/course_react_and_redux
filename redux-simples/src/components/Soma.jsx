import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props =>{
  return (
    <Card title="Soma dos Números" blue>
      <div className=''>
        <span>
          <strong>Resultado: </strong>
          <span>2</span>
        </span>
      </div>
    </Card>
  )
}