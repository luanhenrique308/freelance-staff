import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Routers = ()=>{
    return(
        <Router>
            <Routes>
                <Route  path="/" element={<>
                    <p>teste</p>
                </>}/>
            </Routes>
        </Router>
    )
}

export default Routers;