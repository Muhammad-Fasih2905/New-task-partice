import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Text/community.css";


// const banner = (props) =>{

//   let { name, desc } = useParams()
//   let navigation = useNavigate();

//   const [list, setList] = useState([])
//    useEffect(() => {
//      let config = {
//       method: 'get',
//       url: 'https://fortnite-api.com/v1/banners',
//       header:{
//         "content-type":"application/jason"
//       }
//      }
//      axios(config)
//     .then((response) => {
//       setList(response.data.data.id)
//     })
//     .catch((err) =>{
//       alert(err)
//     })
//    }, [])
//    return(

//         list.map((each, index) => {
//             return (
//               <>
//                 <img src={each.images.Community} />
//                 <p>{name}</p>
//                 <p>{desc}</p>
//               </>
//             )
//           })

//    )
// }








const Community = (props) => {
  let navigation = useNavigate();

  const [list, setList] = useState([])
  useEffect(() => {
    let config = {
      method: 'get',
      url: 'https://fortnite-api.com/v1/banners',
      header: {
        "content-type": "application/jason"
      }
    }
    axios(config)
      .then((response) => {
        setList(response.data.data)
      })
      .catch((err) => {
        alert(err)
      })
  }, [])
  return (
    <>
      {list.map((each, index) => {
   
        return (
          <>
            <img src={each.images.Community} />
            <p>{each.name}</p>
            <p>{each.desc}</p>
          </>
        )
      })}
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
    </>
  )
  // return (
  //   <div className='Navbar'>
  //   <div className='Card-list' onClick={() => navigation("/home/cards")}>
  //   <p>Home</p>
  // </div>
  // <div className='Community-text' onClick={() => navigation("/Community")}>
  //   <p>Community</p>
  //   </div>
  //   <div className='features' onClick={() => navigation("/Features")}>
  //     <p>Features</p>
  //   </div>
  // </div>
  // )
}

export default Community
