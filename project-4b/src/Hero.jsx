import React,{useState} from 'react'
import wave from './assets/wave.png';
import useWebAnimations from "@wellyshen/use-web-animations";

function Hero() {
    const [animate, setAnimate] = useState(false);
    
    /* Animation Codes */
    const mainImgFrames =   [
                             {transform: 'translateY(-25px) scale(1.6)' },
                             { transform: 'translateY(25px) scale(1.6)' },
                             { transform: 'translateY(-25px) scale(1.6)' }
                            ];
    const mainImgTiming =   {duration: 10000, iterations: Infinity, playbackRate:0.5};
    const mainImgMovement = useWebAnimations({keyframes:mainImgFrames,timing:mainImgTiming});

    const zoomFrames =   [
        {transform: 'translateX(0px) scale(1)'},
        { transform: 'translateX(50px) scale(0.8)'},
        {transform: 'translateX(0px) scale(1)'}];
    const zoomTiming =   {duration: 6000, iterations: Infinity, playbackRate:0.5};
    const zoomMovement = useWebAnimations({keyframes:zoomFrames,timing:zoomTiming});

    const skypeFrames =   [
        {transform: 'translateY(0px) scale(1)'},
        { transform: 'translateY(50px) scale(0.8)'},
        {transform: 'translateY(0px) scale(1)'}];
    const skypeTiming =   {duration: 4500, iterations: Infinity, playbackRate:0.8};
    const skypeMovement = useWebAnimations({keyframes:skypeFrames,timing:skypeTiming});    

    const slackFrames =   [
        {transform: 'translateY(0px) scale(1)'},
        { transform: 'translateY(25px) scale(0.8)'},
        {transform: 'translateY(0px) scale(1)'}];
    const slackTiming =   {duration: 6500, iterations: Infinity, playbackRate:0.8};
    const slackMovement = useWebAnimations({keyframes:slackFrames,timing:slackTiming});

    const webexFrames =   [
        {transform: 'translateX(0px) scale(1)'},
        { transform: 'translateX(25px) scale(0.8)'},
        {transform: 'translateX(0px) scale(1)'}];
    const webexTiming =   {duration: 6500, iterations: Infinity, playbackRate:0.8};
    const webexMovement = useWebAnimations({keyframes:webexFrames,timing:webexTiming});    

    const viberFrames =   [
        {transform: 'translateY(0px) scale(1)'},
        { transform: 'translateY(35px) scale(0.9)'},
        {transform: 'translateY(0px) scale(1)'}];
    const viberTiming =   {duration: 6500, iterations: Infinity, playbackRate:0.8};
    const viberMovement = useWebAnimations({keyframes:viberFrames,timing:viberTiming}); 

    const hoFrames =   [
        {transform: 'translateY(0px) translateX(0px) scale(1)'},
        { transform: 'translateY(35px) translateX(-20px) scale(0.9)'},
        {transform: 'translateY(0px) translateX(0px) scale(1)'}];
    const hoTiming =   {duration: 7500, iterations: Infinity, playbackRate:0.8};
    const hoMovement = useWebAnimations({keyframes:hoFrames,timing:hoTiming});     

    const pauseAnimation = () => {
        setAnimate(!animate);
        const mainAnim  = mainImgMovement.getAnimation();
        const zoomAnim  = zoomMovement.getAnimation();
        const skypeAnim  = skypeMovement.getAnimation();
        const slackAnim  = slackMovement.getAnimation();
        const viberAnim  = viberMovement.getAnimation();
        const webexAnim  = webexMovement.getAnimation();
        const hoAnim  = hoMovement.getAnimation();    

        if(animate)
        {
            mainAnim.play();
            zoomAnim.play(); 
            skypeAnim.play();
            slackAnim.play();
            viberAnim.play();
            webexAnim.play();
            hoAnim.play();
        }
        else{
            mainAnim.pause();
            zoomAnim.pause(); 
            skypeAnim.pause(); 
            slackAnim.pause(); 
            viberAnim.pause();
            webexAnim.pause(); 
            hoAnim.pause();                     
        }
            
    }    
    
   
    return (
        <>
            <section className="home-section" id="home">
                <div className="bg-shapes">
                    <div ref={zoomMovement.ref}></div>
                    <div ref={skypeMovement.ref}></div>
                    <div ref={slackMovement.ref}></div>
                    <div ref={hoMovement.ref}></div>
                    <div ref={webexMovement.ref}></div>
                    <div ref={viberMovement.ref}></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="home-content">
                                <h1>Mutify for Mac</h1>
                                <p>Use a shortcut or the touch bar on any Mac device to quickly mute your microphone.<br /><br />Use a shortcut or the touch bar on any Mac device to quickly mute your microphone</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in
                                    magni mollitia.</p>
                                <a href="#" className="btn mybtn1">Buy $4.99</a>
                                <a href="#" className="btn mybtn1" onClick={pauseAnimation}>Toggle Animation</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="home-img" ref={mainImgMovement.ref}>
                                <img src={wave} alt="product" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Hero
