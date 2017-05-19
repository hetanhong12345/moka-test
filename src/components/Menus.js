/**
 * Created by hekk on 2017/5/19.
 */
import React, {Component} from 'react';
import Menu from './Menu';
import '../less/menus.less';
const MenusData = [{
  title: '工程研发部门',
  total: 123,
  submenus: [
    {id: 1, name: 'mac 研发工程师', number: 18},
    {id: 2, name: 'ios app 测试工程师', number: 8},
    {id: 3, name: 'android 远程控制工程师', number: 32},
    {id: 4, name: 'web 前端工程师', number: 6},
    {id: 5, name: 'android 多媒体软件研发工程师', number: 2}]
}, {
  title: '产品设计部门',
  total: 103,
  submenus: [
    {id: 6, name: '网页设计师', number: 18},
    {id: 7, name: 'ID/工业设计师', number: 8},
    {id: 8, name: '视觉设计师/GUI 界面设计师', number: 32},
    {id: 9, name: '平面设计师', number: 6}
  ]
}];

class Menus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClear: false
    };

  }

  clearAll() {
    this.setState({
      isClear: true
    })
  }

  render() {
    let {isClear} = this.state;
    return (
            <div className="menus">
              <div className="title" data-flex="main:justify">
                <span className="main-title">招聘职位</span>
                <span className="clear" onClick={() => {
                  this.clearAll()
                }}>清空</span>
              </div>
              {
                MenusData.map((menu, index) => {
                  return <Menu menu={menu} key={index} isClear={isClear}/>
                })
              }


            </div>
    );
  }
}

export default Menus;