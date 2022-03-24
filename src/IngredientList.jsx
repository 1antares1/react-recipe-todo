import React from "react";

/**
 * Own
 */
import "./IngredientList.css";

const IngredientList = (props) => {
    const ingredientListItems = props.ingredients.map((item, index) => {
        return(
            <li key={index}
                className={item.prepared ? 'prepared' : ''}
                onClick={() => props.onClick(index)}>
                    {item.name}
            </li>
        );
    });

    return(
        <ul>
            {ingredientListItems}
        </ul>
    );
}

export default IngredientList;
