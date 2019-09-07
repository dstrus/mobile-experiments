import React from 'react'

import Item from './Item'

import './ItemList.css'

function ItemList() {
  const data = [
    { id: 1, phone: 'XXX-XX4-7609' },
    { id: 2, phone: 'XXX-XX4-7609' },
    { id: 3, phone: 'XXX-XX4-7609' },
    { id: 4, phone: 'XXX-XX4-7609' },
    { id: 5, phone: 'XXX-XX4-7609' },
    { id: 6, phone: 'XXX-XX4-7609' },
    { id: 7, phone: 'XXX-XX4-7609' },
    { id: 8, phone: 'XXX-XX4-7609' },
    { id: 9, phone: 'XXX-XX4-7609' },
    { id: 10, phone: 'XXX-XX4-7609' },
  ]
  return (
    <div className="ItemList">
      {
        data.map(dino => <Item data={dino} key={dino.id} />)
      }
    </div>
  )
}

export default ItemList
