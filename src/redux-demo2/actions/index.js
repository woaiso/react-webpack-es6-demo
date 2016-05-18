
/**
 * Action 类型
 */

export const ADD_MESSAGE="ADD_MESSAGE";   //新增消息
export const UNDO_MESSAGE="UNDO_MESSAGE"; //撤销发送的消息
export const REDO_MESSAGE="REDO_MESSAGE"; //重发消息


/**
 * Action 函数
 */
/**
 * 新增消息
 * @param text {String} 消息文本
 */
export function addMessage(text){
    return {
        type:ADD_MESSAGE,
        text
    }
}
/**
 * 撤销发送的消息
 * @param index {int} 消息的小标 
 */
export function undoMessage(index){
    return {
        type:UNDO_MESSAGE,
        index
    }
}
/**
 * 重发消息
 * @param text {String} 消息文本
 */
export function redoMessage(text){
     return {
         type:REDO_MESSAGE,
         text
     }
}

