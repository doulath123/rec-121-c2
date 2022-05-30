import React from 'react'
import {Link} from 'react-router-dom'
function RegisterPageTwo(){
    return(
        <>
        <input type="text" placeholder='ENTER ADDRESS'/>
        <input type="number" placeholder='PHONE'/>
        <Link to={'/register/one'}><button>PREV</button></Link>
        <button>SUBMIT</button>
        </>
    )

}
export default RegisterPageTwo;