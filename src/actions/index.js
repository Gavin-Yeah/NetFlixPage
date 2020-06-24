export function remove(id){
    return {
        type:'REMOVE',
        id

    }
}
export function add(id){
    return{
        type:'ADD',
        id

    }
}
export function init(list){
        return {
            type:'INIT',
            mylist:list.mylist,
            recommendations:list.recommendations
        }


}