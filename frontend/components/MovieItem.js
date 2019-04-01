import React from 'react';
import Button from './Button';

const MovieItem = ({ name, category, description, image }) => {
    console.log(description)
    return (
        <li className="thumb__item">
            <div className="thumb__img-wrapper">
                <img src={image} alt={name} className="thumb__img" />
            </div>
            <div className="thumb__info">
                <h3 className="thumb__title">{name}</h3>
                <p className="thumb__desc">{description}</p>
                <p className="thumb__desc">{category}</p>
            </div>
            <div className="thumb__actions">
                <Button title="More Info"></Button>
            </div>
        </li>
    );
};

export default MovieItem;