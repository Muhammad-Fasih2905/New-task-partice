import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress } from '@mui/material'

const Card = (props) => {

  let [list, setList] = useState([])
  let { name, desc } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)

    let config = {
      method: 'get',
      url: 'https://fortnite-api.com/v2/cosmetics/br/new',
      headers: {
        "content-type": "application/json"
      }
    }

    axios(config)
      .then((response) => {


        let array = [...response.data.data.items]

        array = array.filter((each) => each.name === name)

        setList(array)
        setLoading(false)
      })
      .catch((error) => {
        alert(error)
        setLoading(false)
      })

  }, [])


  console.log('the loading is', loading)


  return (
    <div>
      {
        loading ?
          (<CircularProgress />) :

          list.map((each, index) => {
            return (
              <>
                <img src={each?.images?.featured} />
                <p>{name}</p>
                <p>{desc}</p>
              </>
            )
          })
      }

    </div>
  )

}

export default Card