//called with 2 arguments, we pull out dispatch
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

}