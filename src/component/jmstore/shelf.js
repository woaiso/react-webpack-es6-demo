/**
 * 货架模块
 */
import React, { Component } from 'react';
import { Form, Input, Select ,DatePicker,Checkbox} from 'antd';
const FormItem = Form.Item;
const createForm=Form.create;
const RangePicker = DatePicker.RangePicker;
const CheckboxGroup = Checkbox.Group;
class Shelf extends Component {
    handleSubmit() {
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
        const plainOptions = ['极速免税店', '母婴', '轻奢',"服装","鞋包","美国馆","澳洲馆","韩国馆","日本馆","食品"];
        return (
            <div>
              <Form horizontal onSubmit={ this.handleSubmit.bind(this) }>
                <FormItem {...formItemLayout} label="展示平台：">
                  <Select {...selectProps} placeholder="请选择需要展示的平台" style={ { width: '100%' } }>
                    <Option value="mobile">移动</Option>
                    <Option value="pc">PC</Option>
                  </Select>
                </FormItem>
                <FormItem {...formItemLayout} label="域：">
                  <Select {...selectProps} placeholder="请选择展示的域" style={ { width: '100%' } }>
                    <Option value="jm-main">聚美主站</Option>
                    <Option value="jm-tuan">聚美团购</Option>
                    <Option value="jm-mall">聚美海外购</Option>
                  </Select>
                </FormItem>
                <FormItem {...formItemLayout} label="关联品牌ID：" required>
                  <Input placeholder="请填写品牌ID"/>
                </FormItem>
                <FormItem {...formItemLayout} label="关联移动专场ID：" required>
                  <Input placeholder="请填写移动专场ID"/>
                </FormItem>
                <FormItem {...formItemLayout} label="专场类型：" required help="此项专场审核通过后不能修改，请慎重选择！">
                  <Select {...selectProps} placeholder="请选择" style={ { width: '100%' } }>
                    <Option value="jm-main">聚美主站</Option>
                    <Option value="jm-tuan">聚美团购</Option>
                    <Option value="jm-mall">聚美海外购</Option>
                  </Select>
                </FormItem>
                <FormItem {...formItemLayout} label="关联品类：" required help="多品类专场请选择主品类，没有商品的专场请选择“其他”">
                  <Select {...selectProps} placeholder="请选择" style={ { width: '100%' } }>
                    <Option value="jm-main">聚美主站</Option>
                    <Option value="jm-tuan">聚美团购</Option>
                    <Option value="jm-mall">聚美海外购</Option>
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
              </Form>
            </div>
            );
    }
}
Shelf =createForm()(Shelf);
export default Shelf;