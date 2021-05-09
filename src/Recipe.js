import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h2 className={style.title}>{title}</h2>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <p className={style.calories}><b>Calories</b> : {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;