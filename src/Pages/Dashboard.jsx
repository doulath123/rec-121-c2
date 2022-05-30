import React from 'react'
import {Link} from 'react-router-dom'
function Dashboard(){
    return (
        <>       
        <Link to={'/'}>Dashboard</Link>
        <Link to={'/register/one'}>RegisterpageOne</Link>
        <Link to={'/register/two'}>RegisterpageTwo</Link>
        
        </>

    )
}

export default Dashboard;

