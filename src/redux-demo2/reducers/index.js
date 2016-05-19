import {combineReducers} from 'redux';
import {ADD_MESSAGE, UNDO_MESSAGE, REDO_MESSAGE, REQUEST_POSTS, RECIVE_POST} from '../actions';

/**
 * 定义操作
 */
function chat(messages = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {
                content: action.text,
                device: 'iphone6s plus',
                type: 'text',
                time: new Date()
            };
            return [...messages, message];
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

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    info: ""
}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                info: action.posts,
                lastUpdate: action.reciveTime
            })
    }
}


/**
 * @description 对话机器人
 * @param state {ReduxState} 保存对话信息
 * @param action {Object} action 操作
 */
function postRobot(state = {}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.text]: posts
            })
        default:
            return state;
    }
}



const chatApp = combineReducers({
    chat,
    postRobot
})

export default chatApp;