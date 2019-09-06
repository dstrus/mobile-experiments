import React from 'react'

import Item from './Item'

import './ItemList.css'

function ItemList() {
  const data = [
    { id: 1, name: 'Tyrannosaurus' },
    { id: 2, name: 'Velociraptor' },
    { id: 3, name: 'Brontosaurus' },
    { id: 4, name: 'Ankylosaurus' },
    { id: 5, name: 'Tyrannosaurus' },
    { id: 6, name: 'Velociraptor' },
    { id: 7, name: 'Brontosaurus' },
    { id: 8, name: 'Ankylosaurus' },
    { id: 9, name: 'Tyrannosaurus' },
    { id: 10, name: 'Velociraptor' },
    { id: 11, name: 'Brontosaurus' },
    { id: 12, name: 'Ankylosaurus' },
    { id: 13, name: 'Tyrannosaurus' },
    { id: 14, name: 'Velociraptor' },
    { id: 15, name: 'Brontosaurus' },
    { id: 16, name: 'Ankylosaurus' },
    { id: 17, name: 'Tyrannosaurus' },
    { id: 18, name: 'Velociraptor' },
    { id: 19, name: 'Brontosaurus' },
    { id: 20, name: 'Ankylosaurus' },
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
