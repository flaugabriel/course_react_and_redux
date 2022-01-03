import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props =>{
  return (
    <Card title="Sorteio de um número" purple>
      <div className=''>
        <span>
          <strong>Resultado: </strong>
          <span>3</span>
        </span>
      </div>
    </Card>
  )
}