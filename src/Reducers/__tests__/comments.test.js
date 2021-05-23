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