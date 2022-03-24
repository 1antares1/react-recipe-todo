import React from "react";

/**
 * Own
 */
import "./RecipeTitle.css";

const RecipeTitle = (props) => {
    return(
        <>
            <h2>{props.title}</h2>
            <h3 className={props.feedback.rating <= 3.5 ? 'red' : 'green'}>
                {props.feedback.rating} from {props.feedback.reviews} reviews
            </h3>
        </>
    );
}

export default RecipeTitle;
