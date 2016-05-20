import 'whatwg-fetch'; //处理网络请求
/**
 * Action 类型
 */

export const ADD_MESSAGE="ADD_MESSAGE";   //新增消息
export const UNDO_MESSAGE="UNDO_MESSAGE"; //撤销发送的消息
export const REDO_MESSAGE="REDO_MESSAGE"; //重发消息
export const SET_WORLD_FILTER="SET_WORLD_FILTER"; //过滤文本
export const CHAT_TO_ROBOT="CHAT_TO_ROBOT"; //对话机器人

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
    };
}
/**
 * 撤销发送的消息
 * @param index {int} 消息的小标 
 */
export function undoMessage(index){
    return {
        type:UNDO_MESSAGE,
        index
    };
}
/**
 * 重发消息
 * @param text {String} 消息文本
 */
export function redoMessage(text){
     return {
         type:REDO_MESSAGE,
         text
     };
}

export const REQUEST_POSTS="REQUEST_POSTS";
function requestPosts(text) {
  return {
    type: REQUEST_POSTS,
    text
  };
}
export const RECIVE_POST="RECIVE_POST";
function recivePost(text,json){
    return {
        type:RECIVE_POST,
        text,
        posts:json,
        reciveTime:Date.now()
    };
}


export function fetchPost(text){
      return function(dispatch){
          dispatch(requestPosts(text));
          return fetch('http://api.woaiso.com/openapi/api',{
              method:"POST",
              headers:{
                  "Accept":"application/json",
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  key:'057fce226fa89a92f29bd13b318e12cf',
                  info:text
              })
          })
          .then(respones=>respones.json())
          .then(json=>dispatch(recivePost(text,json)));
      };
}
