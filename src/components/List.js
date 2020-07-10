import React from 'react';
import {PropTypes} from 'prop-types';
import { connect } from "react-redux";



//List component which can be reusable for my list and recommendation depending on the inputs
const List = ({list,btnText,title,dispatch}) => {
    //click event handler to dispatch
    const clickHandler = (title,id)=>{
        if(title==='Recommendations'){
            dispatch({type:"ADD",id})
        }else{
            dispatch({type:'REMOVE',id});
        }
    }

    return (
        <div>
            <h2>{title}</h2>
       <ul className="list">
           {/*show all the items using reusable component Item, passing the btnText and the item from the array */}
           {list.map(item=>(
               <li key={item.id}>
                   <img src={item.img} alt={item.title} className={'img'}/>
                   <h3>{item.title}</h3>
                   <button className={'btn'} onClick={()=>clickHandler(title,item.id)}>{title==="Recommendations"?"Add":"Remove"}</button>
               </li>
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
    title:PropTypes.string.isRequired
};



export default connect()(List);