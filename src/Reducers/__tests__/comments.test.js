import commentsReducer from 'Reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

it('handels actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {}) //passing in an empty object counts as passing in an action w/ an unknown type
    expect(newState).toEqual([])
})