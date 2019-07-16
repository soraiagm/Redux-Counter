import { INCREMENT, DECREMENT } from '../actions';

// const initialState = {
//   count: 0
// }

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
        return ++count;
    // Fill in the body of this case
    case DECREMENT:
        return --count;
    // Fill in the body of this case
    default:
      return count;
  }
};


// const counter = (count = 0, action) => {
//     switch(action.type){
//       case 'INCREMENT':
//         return count + 1;
//       case 'DECREMENT':
//         return count - 1;
//       default:
//         return count
//     }
// }

// export default counter;