import React from "react";

function Keypad(){
    function changes(){
        console.log('Entering password...')
    }
    return(
        <input type='password'
            onChange={changes}/>
    )
}




export default Keypad;