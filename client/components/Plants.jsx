import React from 'react'
import { useSelector } from 'react-redux'

function Plants(props) {
  const Plants = useSelector((redux) => redux.plants)
  return (
    <>
      {props.plants.map((e) => (
        <div key={e.id}>
          <p>Common Name: {e.common_name}</p>
          <p>Botanical Name: {e.botanical_name}</p>
          <img src={e.img} alt="plant image" />
        </div>
      ))}
    </>
  )
}
export default Plants
