import React,{useState} from "react"
import { postMethod } from "../../service"
import { InputField } from "../inputField"

export const styledDiv = {
  display:"flex",
  width:"50%",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "aliceblue",
}

export const mainDiv = {
  display:"flex",
  width:"100%",
  justifyContent:"center",
  backgroundColor: "aliceblue",
  padding:"10px"
}

export const Forms = () => {

  const handleForm = () => {
    //console.log("Button pressed")
    //console.log(productName,quantity,user)
    const data = {productName,quantity,user}
    postMethod("rawMaterials",data).then(resp=>console.log(resp))
  }

  const [productName, setProductName] = useState(""); 
  const [quantity, setQuantity] = useState(0); 
  const [user, setUser] = useState(""); 

  return (
    <div className="main" style={mainDiv}>
      <h5>Register a Product</h5>
      <div style={styledDiv}>
      
        <InputField label="Product name" type="text" setter={setProductName} />
        <InputField label="Quantity" type="number" setter={setQuantity} />
        <InputField label="User" type="text" setter={setUser} />

        <button className="btn btn-primary" onClick={handleForm}>Register</button>

      </div>
    </div>
  )
}