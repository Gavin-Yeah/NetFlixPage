function toggle(state={},action){
    let item;
    switch (action.type) {
        //add the item from recommendations to my list
        case 'ADD':
            item = state.recommendations.find(item=>item.id=== action.id);
            return (
                {
                    mylist:[...state.mylist, item],
                    recommendations:state.recommendations.filter((item)=>item.id!==action.id)
                }
            );
            //remove the item from my list to recommendations
        case 'REMOVE':
             item = state.mylist.find(item=>item.id=== action.id);
            return (
                {
                    mylist:state.mylist.filter((item)=>item.id!==action.id),
                    recommendations:[...state.recommendations, item]
                }
            );
            //initialize the data when open the website
        case 'INIT':
            return(
                {
                    mylist:action.mylist,
                    recommendations:action.recommendations
                }
            );
        default:
            return state;

    }
}
export default toggle;