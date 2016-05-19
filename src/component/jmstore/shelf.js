/**
 * 货架模块
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {saveShelf} from '../../actions/jmstore'; //引入Action

import { Form, Input, Select, DatePicker, Checkbox,Button} from 'antd';
const FormItem = Form.Item;
const createForm = Form.create;
const RangePicker = DatePicker.RangePicker;
const CheckboxGroup = Checkbox.Group;
class Shelf extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit() { //表单提交
  }
  handleReset(){  //表单重置
    
  }
  handleChange(name,value) {
    const sta={};
    sta[name]=value;
    this.props.dispatch(saveShelf(sta));
  }
  handleWebsiteChange(value){
    this.props.dispatch(saveShelf({web_site:value}))
  }
  handleBrandChange(e){
    this.props.dispatch(saveShelf({brand_id:e.target.value}))
  }
  render() {
    const formItemLayout = {
      labelCol: {
        span: 3
      },
      wrapperCol: {
        span: 10
      },
    };
    const { getFieldProps } = this.props.form;
    const selectProps = getFieldProps('select', {
      rules: [
        {
          required: true,
          message: '请选择您的国籍'
        },
      ],
    });
    const plainOptions = ['极速免税店', '母婴', '轻奢', "服装", "鞋包", "美国馆", "澳洲馆", "韩国馆", "日本馆", "食品"];
    let {platform,web_site,brand_id,type,category} =this.props.state.saveShelf;
    return (
      <div>
        <Form horizontal onSubmit={ this.handleSubmit.bind(this) }>
          <FormItem {...formItemLayout} label="展示平台：">
            <Select {...selectProps} value={platform} placeholder="请选择需要展示的平台" style={ { width: '100%' } } onChange={this.handleChange.bind(this,'platform') }>
              <Option value="mobile">移动</Option>
              <Option value="pc">PC</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="域：">
            <Select {...selectProps} value={web_site} placeholder="请选择展示的域" style={ { width: '100%' } } onChange={this.handleChange.bind(this,'web_site')}>
              <Option value="jm-main">聚美主站</Option>
              <Option value="jm-tuan">聚美团购</Option>
              <Option value="jm-mall">聚美海外购</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="关联品牌ID：" required>
            <Input placeholder="请填写品牌ID" value={brand_id} onChange={this.handleChange.bind(this,'brand_id')}/>
          </FormItem>
          <FormItem {...formItemLayout} label="关联移动专场ID：" required>
            <Input placeholder="请填写移动专场ID"/>
          </FormItem>
          <FormItem {...formItemLayout} label="专场类型：" required help="此项专场审核通过后不能修改，请慎重选择！">
            <Select {...selectProps} placeholder="请选择" value={type} style={ { width: '100%' } } onChange={this.handleChange.bind(this,'type')}>
              <Option value="1">端午节专场</Option>
              <Option value="2">国庆节节专场</Option>
              <Option value="3">618专场</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="关联品类：" required help="多品类专场请选择主品类，没有商品的专场请选择“其他”">
            <Select {...selectProps} value={category} placeholder="请选择" style={ { width: '100%' } } onChange={this.handleChange.bind(this,'category')}>
              <Option value="1">化妆品</Option>
              <Option value="2">护肤品</Option>
              <Option value="3">家居</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="预展示频道：" required>
            <CheckboxGroup options={plainOptions} defaultValue={['Apple']}/>
          </FormItem>
          <FormItem {...formItemLayout} label="预热时间：" required help="没有预热或预热和正式页面分别创建时，此处填写与开始时间相同即可">
            <DatePicker showTime format="yyyy-MM-dd HH:mm:ss" placeholder="请选择时间"/>
          </FormItem>
          <FormItem {...formItemLayout} label="开始~结束时间：" required>
            <RangePicker showTime format="yyyy/MM/dd HH:mm:ss"/>
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 7 }}>
            <Button type="primary" onClick={this.handleSubmit}>确定</Button>
            &nbsp; &nbsp; &nbsp;
            <Button type="ghost" onClick={this.handleReset}>重置</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

Shelf = createForm()(Shelf);
Shelf = connect(mapStateToProps)(Shelf);
export default Shelf;