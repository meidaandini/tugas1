import React from 'react';
import './style.css';
import image from './gambar/gmbr.jpg'

const Jumbotron = () => {
    return(
       <div>
           <div className='jumbotron jumbotron-fluid'>
               <div className='container'>
                   <h1 className='display-4'>Get work done <span>faster</span> <br></br>and <span>with us</span></h1>
                   <a href='#' className='btn btn-primary tombol'>Our Work</a> 
               </div>
           </div>
       </div>
    )
}

export default Jumbotron;