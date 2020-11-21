/**
 * @desc Sets current path in state variable. So some of the components can be rendered accrodingly.
 * @param pathValue
 * @return value of path to reducer.
 */
 export const setCurrentPath = (pathValue) => {
    return {
        type: 'SETCURRENTPATH',
        payload: {
            currentPath: pathValue
        }
    }
}
/**
 * @desc Sets the selected item in state variable.So the item value can used across the app.
 * @param item
 * @return value of item to reducer.
 */
export const storeSelItem = (item) =>{
    return {
        type:'STOREITEM',
        payload:{
            selItem:item
        }
    }
}