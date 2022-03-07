import React from 'react';
import { Document } from 'react-pdf'
import resume from '../../assets/Resume.pdf'
const Resume = () => {
    return ( 


        <div className="d-flex justify-content-center w-55 h-100" style={{height: "500px"}}>
            <h1 className='text-white'> 

          <Document file={resume}/>
                Resume 
            </h1>
        </div>
        
        

     );
}
 
export default Resume;