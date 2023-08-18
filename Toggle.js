import React, { useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import {TbTriangleInvertedFilled, TbTriangleFilled} from 'react-icons/tb'
function Toggle() {
    const [check,setCheck] = useState(false)
    const [price, setPrice] = useState({})
    const [priceVisibility, setPriceVisibility] = useState("hidden");
    useEffect(()=>{
        fetch(
            "https://raw.githubusercontent.com/nishaaanth2/sample-repo/master/mock.json")
                        .then((res) => res.json())
                        .then((json) => {
                            setPrice(json)
                        })
    });
    const fireAPI = (e) =>{
        if(e){
            setPriceVisibility("visible")
        }else{
            setPriceVisibility("hidden")
        }
    }
    console.log(price)
  return (
    <div>
        <ReactSwitch
    checked = {check}
    onChange = { (e) => {
        setCheck(e)
        fireAPI(e)
    }}
    />
    <h2 style={{display: 'inline-block', margin: '1em', visibility: priceVisibility}}>{price["expected_close_value"]}</h2>

    <h3 style={{display: 'inline-block',
                margin: '1em',
                visibility: priceVisibility}}>
                    {price["change_value"]>0?<TbTriangleFilled style={{marginRight: '1em', color: "green"}}/>:<TbTriangleInvertedFilled style={{marginRight: '1em', color: "red"}}/>}(<span style={{color: price["change_value"]<0?"red":"green"}}>{price["change_value"]}</span>) USD
    </h3>
    </div>
    
  )
}

export default Toggle