import React from 'react'
import image from './assets/FaceTimePopup.jpg';
function MidSection() {
    return (
        <>
        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex">
                        <div className="about-img">
                            <img className="img-fluid" src={image} alt="product 2" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2 className="mt-3 subtitle">Control your microphone anywhere, Even during calls</h2>
                            <p className='mt-2'>Use a shortcut or the touch bar on any Mac device to quickly mute your microphone</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>            
        </>
    )
}

export default MidSection
