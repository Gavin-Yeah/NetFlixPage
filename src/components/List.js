import React from 'react';
import {PropTypes} from 'prop-types';
import Item from "./Item";

//List component which can be reusable for my list and recommendation depending on the inputs
const List = ({list,btnText,title}) => {
    return (
        <div>
            <h2>{title}</h2>
       <ul className="list">
           {/*show all the items using reusable component Item, passing the btnText and the item from the array */}
           {list.map(item=>(
                <Item {...item} key={item.id} btnText={btnText}/>
           ))}
       </ul>
        </div>
    );
};




//limit the types for the props from the parent component
List.propTypes = {
        list:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            img:PropTypes.string.isRequired
        })),
    btnText:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
};



export default List;