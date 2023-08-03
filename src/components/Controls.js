import React from 'react'
import styles from '../styles/circularLoadingIndicator.module.css';


const Controls = ({
    isPlaying,
    handlePlay,
    handlePause
}) => {
  return (
    <div className={styles.controls}>
        <button className={styles.playButton} onClick={handlePlay} disabled={isPlaying}>
          Play
        </button>
        <button className={styles.pauseButton} onClick={handlePause} disabled={!isPlaying}>
          Pause
        </button>
      </div>
  )
}

export default Controls
