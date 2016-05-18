import {combineReducers} from 'redux';
import {ADD_MESSAGE, UNDO_MESSAGE, REDO_MESSAGE} from '../actions';

/**
 * 定义操作
 */
function chat(messages = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {
                content: action.message,
                device: 'iphone6s plus',
                type: 'text',
                time: new Date()
            };
            return [...message, message];
        case UNDO_MESSAGE:
            messages.pop();
            return messages;
        case UNDO_MESSAGE:
            messages.push(messages[action.index]);
            return messages;
            default:
                return messages;
    }
}