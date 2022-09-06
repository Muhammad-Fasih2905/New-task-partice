import React from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios";

const Features = () => {

  const [list, setList] = useState([])

  let navigation = useNavigate();

  useEffect(() => {

    let config = {
      method: 'get',
      url: 'https://fortnite-api.com/v1/map',
      headers: {
        "content-type": "application/json"
      }
    }

    axios(config)
      .then((response) => {

        console.log(response)
        setList(response.data.data.pois)
        setMapImage(response.data.data.images.blank )
      })
      .catch((err) => {
        alert('The error is', err)
      })

    }, [])
const [mapImage,setMapImage] = useState("")
  return (
    <div className='main-text'>

      {list.map((each, index) => {

        let {pois,} = each
         
        if(index >=1) 
        return null
        else
          return (
            <div > 
              <img src={mapImage} />
              <div className='main-text'>
                 <p>{pois}</p>
              </div>
            </div>
          )
      })}
    </div>
  )
}















// const Features = () =>{
//     let navigation = useNavigate(); 

//   return (
//     <div>Hello World</div>
//   )
// }

export default Features