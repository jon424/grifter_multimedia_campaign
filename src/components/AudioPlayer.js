// AudioPlayer.js
import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ audioFile, autoPlay }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if the audio is not playing and the user has scrolled
            if (!isPlaying && window.scrollY > 0) {
                audioRef.current.play();
                setIsPlaying(true);
                // Remove the scroll event listener after triggering playback
                window.removeEventListener('scroll', handleScroll);
            }
        };

        // Add scroll event listener if autoPlay is not allowed
        if (!autoPlay) {
            window.addEventListener('scroll', handleScroll);
        }

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [autoPlay, isPlaying]);

    useEffect(() => {
        // If autoPlay is allowed, trigger playback on mount
        if (autoPlay) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [autoPlay]);

    return (
        <div>
            <audio ref={ audioRef } src={ audioFile } autoPlay={ autoPlay } />
            <div>
                <button onClick={ togglePlayPause }>
                    { isPlaying ? 'Pause' : 'Play' }
                </button>
            </div>
        </div>
    );
};

export default AudioPlayer;
