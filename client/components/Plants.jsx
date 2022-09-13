import React from 'react'
import { useSelector } from 'react-redux'

function Plants() {
  const plants = useSelector((redux) => redux.plants)
  return (
    <>
      {plants.map((e) => (
        <div key={e.id}>
          <img src={e.img} alt="plant" width="400px" height="auto" />
          <p>Common Name: {e.common_name}</p>
          <p>Botanical Name: {e.botanical_name}</p>
        </div>
      ))}
    </>
  )
}
export default Plants
