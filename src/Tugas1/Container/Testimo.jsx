import React from 'react';
import '../style.css';
import img1 from '../gambar/g.jpg';
import img2 from '../gambar/ggg.jpg';
import img3 from '../gambar/gg.jpg';

const Testimo = () => {
    return (
        <section className='testimo'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <h5>"Bekerjalah dengan suasana hati yang lebih asik dan mempelajari hal baru setiap harinya."</h5>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-lg-5 justify-content-center d-flex'>
                    <figure className='figure'>
                        <img src={img1} className='figure-img img-fluid rounded-circle' alt='testimo' />
                        <figcaption className='figure-caption'></figcaption>
                    </figure>
                    <figure className='figure'>
                        <img src={img2} alt="testimoni" className='figure-img img-fluid rounded-circle' />
                        <figcaption className='figure-caption'>
                            <h5>Hyun Kyo</h5>
                            <p>Developer</p>
                        </figcaption>
                    </figure>
                    <figure className='figure'>
                        <img src={img3} alt="testimo" className='figure-img img-fluid rounded-circle' />
                        <figcaption className='figure-caption'></figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Testimo;