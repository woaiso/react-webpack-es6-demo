import {SAVE_SHELF} from '../actions/jmstore';
const saveShelf=(state={ 
    id:10085, //专场ID
    platform:'pc', //展示平台
    web_site:'jm-main', //展示域
    brand_id:2, //品牌ID
    type:'1', //专场类型
    category:'1', //关联品类
    preChannel:[1,2,3], //预展示频道
    preheatting_time:'2016-06-19 17:45:23', //预热时间
    start_time:'2016-06-19 17:45:23', //开始时间
    end_time:'2016-06-23 17:45:23'  //结束时间
    
},action)=>{
    switch(action.type){ 
        case SAVE_SHELF:
            return Object.assign({},state,action.data);
           default:
            return state;
    }
}
export default saveShelf;