//action of removing item from my list
export function remove(id){
    return {
        type:'REMOVE',
        id

    }
}
//action of adding from recommendation
export function add(id){
    return{
        type:'ADD',
        id

    }
}
//action of initializing the data
export function init(list){
        return {
            type:'INIT',
            mylist:list.mylist,
            recommendations:list.recommendations
        }


}