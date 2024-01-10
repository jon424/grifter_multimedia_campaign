import React, { useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import Typewriter from './Typewriter';

const TypingPage = () => {
    const audioFile = '/assets/russian_numberstation.wav';
    const word = "GRIFTER ";
    const repeatedWord = word.repeat(200);

    useEffect(() => {
        const randomColor = () => '#' + Math.random().toString(16).substr(-6);
        const wordColor = document.querySelector('.repeated-word');

        if (wordColor) {
            const changeColor = () => {
                wordColor.style.color = randomColor();
            };

            const intervalId = setInterval(() => {
                changeColor();
            }, 1000);

            return () => {
                clearInterval(intervalId); // Cleanup interval on component unmount
            };
        }
    }, []);

    setTimeout(() => {
        const fadeInText = document.querySelector('.you-win');
        if (fadeInText) {
            fadeInText.classList.add('fade-in');
        }
    }, 3000); // Adjust the waiting time based on your Typewriter effect duration

    return (
        <>
            <div className="typing-page-background">
                <AudioPlayer audioFile={ audioFile } autoPlay={ true } />
                <Typewriter text={ repeatedWord } speed="0" />
                <a className="repeated-word you-win" href="http://www.griftertheband.com/" target="_blank" rel="noopener noreferrer">
                    YOU WIN!
                </a>
            </div>
        </>
    );
};

export default TypingPage;
