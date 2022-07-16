// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){
    function focusFun(){
        console.log('Good!');
    }
    function blurFun(){
        console.log('Hey! Eyes on me!');
    }

    return(
        <button onFocus= {focusFun} onBlur ={blurFun}>Eyes on me</button>
        );
}




export default EyesOnMe;