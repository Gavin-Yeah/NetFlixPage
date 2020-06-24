function toggle(state={},action){
    let item;
    switch (action.type) {
        case 'ADD':
            item = state.recommendations.find(item=>item.id=== action.id);
            return (
                {
                    mylist:[...state.mylist, item],
                    recommendations:state.recommendations.filter((item)=>item.id!==action.id)
                }
            );
        case 'REMOVE':
             item = state.mylist.find(item=>item.id=== action.id);
            return (
                {
                    mylist:state.mylist.filter((item)=>item.id!==action.id),
                    recommendations:[...state.recommendations, item]
                }
            );
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