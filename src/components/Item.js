import React from 'react';
import { add, remove } from "../actions";
import {connect} from 'react-redux';
const mapDispatchToProps = (dispatch,ownProps) =>{
    const {btnText}= ownProps;
    if(btnText==='remove'){
        return {
            onClick:id=>{
                // console.log("id",id);
                dispatch(remove(id))
            }
        }
    }else if(btnText==='add'){
        return {
            onClick: id =>{
                // console.log('clicked')
                dispatch(add(id))
            }
        }
    }

};

const Item =({onClick,id,btnText,img,title}) =>{
        return (
            <li
            >
                <img src={img} alt=""/>
                <h3>{title}</h3>
                <button className={'btn'} onClick={()=>onClick(id)} >{btnText}</button>
            </li>

        );

}



export default connect(null,mapDispatchToProps)(Item);