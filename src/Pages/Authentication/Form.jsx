import { red } from "@mui/material/colors"
import { color, style } from "@mui/system"
import React, { useState } from "react"



const Form = () => {

    const [visible, setVisible] = useState(true)
    const [select, setSelect] = useState([
        {
            name: 'hide',
            isSelected: true,
            index: 0

        },
        {
            name: 'show',
            isSelected: false,
            index: 1
        },
    ])

    const changeState = (obj, index) => {

        if (obj.selected) {
            return
        }

        let newArr = [...select]

        newArr.filter((item, id) => id === index).map(item => item.isSelected = true)
        newArr.filter((item, id) => id !== index).map((item) => item.isSelected = false)

        setSelect(newArr)
    }

    return (
        <div>
            <div style={{ margin: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '250px' }}>
                {
                    select.map((each, index) => {
                        return (
                            <p key={index} onClick={() => changeState(each, index)}
                                style={{
                                    padding: '10px 20px 10px 20px', borderRadius: '20px', cursor: "pointer",
                                    color: each.isSelected ? 'white' : 'purple', background: each.isSelected ? 'purple' : 'white',
                                    border: each.isSelected ? '' : '2px solid purple'
                                }}
                            >{each.name}
                            </p>
                        )
                    })
                }
            </div>
{
    visible === true (
        <div>
            <input type="text" />
        </div>
    )
}

        </div>
    
    )
}

export default Form











{/* //   style = {{ color: "green" ? color:'purple'}} */ }