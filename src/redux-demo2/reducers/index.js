import {combineReducers} from 'redux';
import {ADD_MESSAGE, UNDO_MESSAGE, REDO_MESSAGE, REQUEST_POSTS, RECIVE_POST} from '../actions';

const initialState = {
  messages: []
};

/**
 * 定义操作
 */
function chat(messages =initialState.messages, action) {
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
            }); 
        case RECIVE_POST:
            console.log(state);
            return state;
        case ADD_MESSAGE:
            debugger;
            return state;
        default:
            console.log(state);
            return state;
    }
}


/**
 * @description 对话机器人
 * @param state {ReduxState} 保存对话信息
 * @param action {Object} action 操作
 */
function postRobot(messages =initialState.messages, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, messages, {
                [action.text]: posts
            });
        case RECIVE_POST:
            return Object.assign({}, messages, {
                [action.text]: posts
            });
        case ADD_MESSAGE:
            return Object.assign({}, messages, {
                [action.text]: posts
            });
        default:
            return messages;
    }
}



const chatApp = combineReducers({
    chat,
    postRobot
});

export default chatApp;