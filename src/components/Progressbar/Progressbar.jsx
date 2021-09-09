import React from 'react'

export default function Progressbar({ width, height, progress, bgColor, progressColor }) {
    return (
        <div
            style={{
                width: width,
                height: height,
                backgroundColor: bgColor
            }}
        >
            <div
                style={{
                    height: '100%',
                    width: `${progress}%`,
                    backgroundColor: progressColor
                }}
            >
            </div>
        </div>
    )
}
