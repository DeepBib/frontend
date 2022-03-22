import React, { useState } from "react";
const CheckBoxAPI =({label, value, onChange})=> {

    const [checked, setChecked] = useState(false);

    const handleChange =(label)=>{
        setChecked(!checked);
        console.log("ici :",label);
    };

   return(
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" checked={checked} onChange={()=>handleChange(label)}/>
            <label className="form-check-label">{label}</label>
        </div>
   )
}

export default CheckBoxAPI;
