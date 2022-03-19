import React from 'react';
import '../style.css';
import img from '../gambar/cafe.jpeg';

const Workspace = () => {
    return (
        <div>
            <div className='row workspace'>
                <div className='col-lg-5'>
                    <img src={img} alt="cafe.jpeg" className='img-fluid' />
                </div>
                <div className='col-lg-5 fluid'>
                    <h2>You <span>Work</span> Like At <span>Home</span></h2>
                    <p>Bekerja dengan suasana lebih asik, ditambah secangkir kopi pahit</p>
                    <a href='' className='btn btn-primary tombol'>Gallery</a>
                </div>
            </div>
        </div>
    )
}
export default Workspace;