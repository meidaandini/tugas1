import React from 'react';
import '../style.css';
import imgtwiter from '../gambar/twt.png';
import imginstagram from '../gambar/instagram.png';
import imgwa from '../gambar/wa.png';

const Panel = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-10 info-panel">
                <div className="row">
                    <div className="col-lg">
                        <img src={imgtwiter} alt="twt.png" className="float-left" />
                            <h4>Twitter</h4>
                            <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                    </div>

                    <div className="col-lg">
                        <img src={imginstagram} alt="instagram.png" className="float-left" />
                            <h4>Instagram</h4>
                            <p>@kita_peduli</p>
                    </div>

                    <div className="col-lg">
                        <img src={imgwa} alt="wa.png" className="float-left" />
                            <h4>Contact</h4>
                            <p>08512345678</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Panel;


