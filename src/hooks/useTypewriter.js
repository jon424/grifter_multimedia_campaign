import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;

        if (text) {
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);

            return () => {
                clearInterval(typingInterval);
                console.log('DONE!');
            };
        }
    }, [text, speed]);

    return displayText;
};

export default useTypewriter;
