import React, { useEffect, useRef } from 'react';

function Video(props) {
    const videoRef = useRef(null);

    useEffect(() => {
        const playPauseVideo = () => {
            if (!videoRef.current) {
                return;
            }

            if (videoRef.current.getBoundingClientRect().top >= window.innerHeight - window.innerHeight / 3 ||
                videoRef.current.getBoundingClientRect().bottom <= window.innerHeight / 3) {
                videoRef.current.pause();
            }
            else {
                videoRef.current.play();
            }
        }

        window.addEventListener("scroll", playPauseVideo);

        return () => {
            window.removeEventListener("scroll", playPauseVideo);   // Cleanup to prevent memory leak.
        };
    }, []);

    return (
        <video
            className='project-sample'
            ref={videoRef}
            playsInline
            muted
            loop
        >
            <source
                src={process.env.PUBLIC_URL + props.vid_src}
                type={props.vid_type}
            />
        </video>
    )
}

export default Video

// Adding an event listener for window scrolling needs to have a function
// attached to it in the parameters, otherwise you can't remove the scroll event listner.
// In this case, I attached the playPauseVideo function to 
// window.addEventListener. This way, my parameters for window.addEventListener
// and window.removeEventListener matched.
// Resources Used for understanding this:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
// https://stackoverflow.com/q/64377884/17047816
// https://stackoverflow.com/q/36207398/17047816