//called with 2 arguments, we pull out dispatch
//dispatch gets everything rolling
//it takes an action calls all the MW & makes sure the action ends up at all the reducers
// export default  ({dispatch}) => {// if an arrow function contains a JS expression we can get rid of {} & the return keyword
//     //called with a single argument, reference to the next MW in our chain
//     return function(next){
//         //called w/ the action object from our action creator
//         return function(action){

//         }
//     }
// }

//the set up for middleware is arbitrary but the author of Redux set it up this way so we have to keep to the syntax

//the condensed version below is equivalent to the long version above, they do the same thing
export default ({dispatch}) => next => action => {
    //check to see if the action has a promise on its payload property
    //if it does wait for it to resolve
    //if not send the action onto the next MW
    if(!action.payload || !action.payload.then){
        return next(action);//make sure we don't execute any other code in this MW
    }
    //we want to wait for the promise to resolve or get its data & then create a new action w/ that data & disatch it
    action.payload.then(function(response) {
        const newAction = {...action, payload: response}
        dispatch(newAction)
    })
}