import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './CardList.css'
import axios from 'axios'

const CardList = () => {

  const [list, setList] = useState([])

  let navigation = useNavigate();

  useEffect(() => {

    let config = {
      method: 'get',
      url: 'https://fortnite-api.com/v2/cosmetics/br/new/',
      headers: {
        "content-type": "application/json"
      }
    }

    axios(config)
      .then((response) => {

        console.log(response)
        setList(response.data.data.items)
      })
      .catch((err) => {
        alert('The error is', err)
      })

    }, [])

  return (
    <div className='main-card-container'>
        
<div className='Navbar'>
<div className='Card-list' onClick={() => navigation("/home/cards")}>
  <p>Home</p>
</div>
<div className='Community-text' onClick={() => navigation("/Community")}>
  <p>Community</p>
  </div>
  <div className='features' onClick={() => navigation("/Features")}>
    <p>Features</p>
  </div>
</div>
      {list.map((each, index) => {

        let { name, description, images } = each
        if (images.smallIcon === null || images.smallIcon === undefined || images.smallIcon === "" || description === "null")
         return  null
        else
          return (
            <div onClick={()=> navigation(`/home/cards/${name}/${description}`)} className='main-card-each'>
              <img src={images.smallIcon} />
              <div className='main-card-inner'>
                <p>{name}</p>
                <p>{description}</p>
              </div>
            </div>
          )
      })}
    </div>
  )
}


  // useEffect(() => {

  //   setList([{
  //     name: 'rameez',
  //     description: 'react dev'
  //   }, {
  //     name: 'fasih',
  //     description: 'JS dev'
  //   }, {
  //     name: 'arham',
  //     description: 'Php dev'

  //   }, {
  //     name: 'Mike',
  //     description: 'Magenta Dev'
  //   }
  //     , {
  //     name: 'Fravo',
  //     description: 'IOS Dev'
  //   }
  //   ])

  // }, [])


  // return (
  //   <div>
  //     <p>This is my cards collection</p>
  //     <div className='all-cards'>
  //       {
  //         list.map((each,index)=> {
  //           return(
  //             <div onClick={()=> navigation(`/home/cards/${each.name}/${each.description}`)} className='each-card'>
  //               <p>{each.name}</p>
  //               <p>{each.description}</p>
  //             </div>  
  //           )
  //         })
  //       }
  //     </div>
  //     <div className='Back-button' onClick={() => navigation("/home")}>
  //       <p>Back</p>
  //     </div>
  //   </div>
  // )


export default CardList













