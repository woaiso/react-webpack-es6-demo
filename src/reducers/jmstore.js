import {SAVE_SHELF} from '../actions/jmstore';
const saveShelf=(state={
    platform:'pc', //展示平台
    web_site:'jm-main', //展示域
    brand_id:2, //品牌ID
    type:'1', //专场类型
    category:'1', //关联品类
},action)=>{
    switch(action.type){
        case SAVE_SHELF:
            return Object.assign({},state,action.data);
           default:
            return state;
    }
}
export default saveShelf;