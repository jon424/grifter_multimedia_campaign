import React from 'react';
import '../styles/styles.css'; // Create a separate CSS file for keyframes

const BoxAnimation = () => {
    const max = 20;
    const height = 500;
    const hueTime = 6;
    const sizeTime = hueTime / 3;

    const boxes = Array.from({ length: max }, (_, i) => {
        const translateY = (height / 2) + ((i / max) * ((height / 2) * 0.8) * -1);
        const scale = 1 * (i / max);
        const hueDelay = hueTime - (hueTime * (i / max)) * 1;
        const sizeDelay = (i / max) * sizeTime * -2;

        const boxStyle = {
            width: `${height * 1}px`,
            height: `${height * 1.3}px`,
            transform: `translate(0, ${translateY}px) scale(${scale})`,
            position: 'absolute',
            background: 'transparent',
            boxShadow: '0 0 100px -20px hsl(0, 100%, 50%)', // Initial color

            animation: `hueShift ${hueTime}s infinite linear, sizeShift ${sizeTime}s infinite ease-in-out`,
            animationDelay: `${hueDelay}s, ${sizeDelay}s`,
        };

        return <div key={ i } className={ `box box-${i}` } style={ boxStyle } />;
    });

    return (
        <>
            <div style={ { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'black' } }>
                { boxes }
            </div>
            <a className="box-link-1" href="http://griftertheband.com"><h2>?</h2></a>
            <a className="box-link-2" href="http://griftertheband.com"><h2>?</h2></a>
            <a className="box-link-3" href="http://griftertheband.com"><h2>?</h2></a>
            <a className="box-link-4" href="http://griftertheband.com"><h2>?</h2></a>
        </>
    );
};

export default BoxAnimation;
