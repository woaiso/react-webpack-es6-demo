/*jshint esversion:6*/

import  {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';
import Link from '../component/todo/Link';


const mapStateToProps=(state,ownProps)=>{
	return {
		active:ownProps.filter===state.visibilityFilter
	};
};

const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onClick:()=>{
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	};
};

const FilterLink=connect(mapStateToProps,mapDispatchToProps)(Link);

export default FilterLink;