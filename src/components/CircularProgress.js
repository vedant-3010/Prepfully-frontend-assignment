import React from 'react'
import styles from '../styles/circularLoadingIndicator.module.css';

const CircularProgress = ({
    percentage,
    progress
}) => {
    return (
        <div className={styles.circularProgress}>
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f0f0f0" strokeWidth="8" />

                <circle
                    className={styles.progressCircle}
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#00bfff"
                    style={{
                        strokeDasharray: `${percentage * 2.83}, 283`,
                    }}
                />
            </svg>
            <div className={styles.percentageIndicator}>{progress ? progress : percentage}%</div>
        </div>
    )
}

export default CircularProgress
