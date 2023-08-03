import React, { useState, useEffect } from 'react';
import styles from '../styles/circularLoadingIndicator.module.css';
import CircularProgress from './CircularProgress';
import Controls from './Controls';

const CircularLoadingIndicator = ({ progress }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let interval;
        if (isPlaying && percentage <= 101) {
            interval = setInterval(() => {
                setPercentage((prevPercentage) => (prevPercentage + 1) % 101);
            }, 145);
        } else if (percentage >= 101) {
            setPercentage(0);
            setIsPlaying(false);
        }
        return () => clearInterval(interval);
    }, [isPlaying, percentage]);

    const handlePlay = () => {
        if (percentage >= 101) {
            setPercentage(0);
        }
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    return (
        <div className={styles.circularLoadingIndicator}>
            <CircularProgress percentage={percentage} progress={progress} />
            <Controls isPlaying={isPlaying} handlePlay={handlePlay} handlePause={handlePause} />
        </div>
    );
};

export default CircularLoadingIndicator;
