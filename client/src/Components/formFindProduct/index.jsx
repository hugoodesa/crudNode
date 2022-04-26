import { useState } from "react";
import { getMethod, putMethod } from "../../service";
import { isProductValid, isRequestValid } from "../../validations/index";

const { styledDiv, mainDiv } = require("../forms");
const { InputField } = require("../inputField");

export const FormFindProduct = () => {
  //CSS
  const mainDivMod = { ...mainDiv, backgroundColor: "forestGreen" };
  const styledDivFindProduct = { ...styledDiv, backgroundColor: "forestGreen" };
  const styledDivFindRequest = { ...styledDiv, backgroundColor: "tomato" };
  const styledDivMadeRequest = { ...styledDiv, backgroundColor: "grey" };

  //STATES
  const [productName, setProductName] = useState("");
  const [userName, setUserName] = useState("");

  const [userNameRequest, setUserNameRequest] = useState("");
  const [idProduct, setIdProduct] = useState("");

  //FIND USER METHOD
  const findRawProduct = async () => {
    const param = `name=${productName.toLowerCase()}`;

    try {
      const data = await getMethod("rawMaterials", param);

      if (isProductValid(data)) {
        alert(JSON.stringify(data));
      }
    } catch (error) {
      alert(error);
    }
  };

  //FIND REQUEST METHOD
  const findUser = async () => {
    console.log("findUSer");
    const param = `user=${userName.toLowerCase()}`;

    console.log(param);

    try {
      const data = await getMethod("rawMaterials", param);

      if (isRequestValid(data)) {
        alert(JSON.stringify(data));
      }

    } catch (error) {
      alert(error);
    }
  };

  //REGISTER A RAWPRODUCT REQUEST
  const registerRequest = async () => {
    try {
      const data = await putMethod(`rawMaterials/${idProduct}/request`, {user: userNameRequest});
      if(data.message==="sucess"){
        alert("Sucefully inserted !");
      }else{
        alert("Something went Wrong ! , possible the product ID it isn't correct ");
      }
    } catch (error) {
      alert(error);
    }
  };

  //JSX
  return (
    <>
      {/* Find product by name*/}
      <div className="main" style={mainDivMod}>
        <h5 style={{ color: "white" }}>Find product by name</h5>
        <div style={styledDivFindProduct}>
          <InputField
            label="Product name to Find"
            type="text"
            setter={setProductName}
          />
          <button className="btn btn-primary" onClick={findRawProduct}>
            Search Product
          </button>
        </div>
      </div>

      {/* Find request by user name */}
      <div className="main" style={{ ...mainDivMod, background: "tomato" }}>
        <h5 style={{ color: "white" }}>Find request by user name</h5>
        <div style={styledDivFindRequest}>
          <InputField
            label="Find request by user"
            type="text"
            setter={setUserName}
          />
          <button className="btn btn-primary" onClick={findUser}>
            Search Request
          </button>
        </div>
      </div>

     {/* made request */}
     <div className="main" style={{ ...mainDivMod, background: "grey" }}>
        <h5 style={{ color: "white" }}>Made request</h5>
        <div style={styledDivMadeRequest}>
        <InputField
            label="Product id"
            type="number"
            setter={setIdProduct}
          />
          <InputField
            label="User that order the request"
            type="text"
            setter={setUserNameRequest}
          />
          <button className="btn btn-primary" onClick={registerRequest}>
            Search Request
          </button>
        </div>
      </div>

    </>
  );
};
