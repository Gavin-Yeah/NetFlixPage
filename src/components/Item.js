import React from 'react';
import { add, remove } from "../actions";
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch,ownProps) =>{
    //pass the btnText and decide the onClick function using it
    const {btnText}= ownProps;
    if(btnText==='remove'){
        return {
            onClick:id=>{
                dispatch(remove(id))
            }
        }
    }else if(btnText==='add'){
        return {
            onClick: id =>{
                dispatch(add(id))
            }
        }
    }

};

const Item =({onClick,id,btnText,img,title}) =>{
        return (
            <li>
                <img src={img} alt={title} className={'img'}/>
                <h3>{title}</h3>
                <button className={'btn'} onClick={()=>onClick(id)}>{btnText}</button>
            </li>

        );

};



export default connect(null,mapDispatchToProps)(Item);