import React from 'react'

export const GifGridItem = ({url, title}) => {
    
    return (
        <div className="card animate__animated animate__fadeIn animate__slow">

            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={url} alt={title}/>
            </a>
            <p>{title}</p>


        </div>
    )
}
