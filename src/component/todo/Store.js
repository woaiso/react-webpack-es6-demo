import { combineReducers } from 'redux';
function chat(messages = [], action) {
    switch (action.type) {
    case 'ADD_MESSAGE':
        const message = {
            content: action.message,
            device: 'iphone6s plus',
            type: 'text',
            time:new Date()
        };
        return [...messages, message];
        break;
    default:
        return messages;
        break;
    }
}
let store = combineReducers({chat});

export const dispatch = store.dispatch;

export const subscribe = store.subscribe;

export const getStore = store.getState;
