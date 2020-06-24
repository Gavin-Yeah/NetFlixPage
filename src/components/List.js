import React from 'react';

import Item from "./Item";


const List = ({list,btnText}) => {
    // console.log('list',list instanceof Array);
    return (

       <ul className="list">
           {list.map(item=>(

                <Item img={item.img} title={item.title} key={item.id} id={item.id} btnText={btnText}/>
           ))}
       </ul>
    );
};



export default List;