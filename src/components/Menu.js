/**
 * Created by hekk on 2017/5/19.
 */
import React, {Component, PropTypes} from 'react';
import classNames from  'classnames';
import '../less/menu.less';
class Menu extends Component {
  constructor(props) {
    super(props);
    let menu = JSON.parse(JSON.stringify(props.menu))

    this.state = {
      menu,
      checked: false
    };

  }

  componentWillReceiveProps(props) {
    console.log(props);
  }

  render() {
    let {submenus} = this.state.menu;
    return (
            <div className="menu">
              <div className="menu-item" data-flex="main:justify">
                <span data-flex-box="0" className={classNames('box', {'checked': this.state.checked})}></span>
                <span data-flex-box="1">{this.state.menu.title}</span>
                <span data-flex-box="0">{this.state.menu.total}</span>
              </div>
              {
                submenus.map((sub, index) => {
                  return (<div key={index} className={classNames('menu-item', 'sub')} data-flex="main:justify">
                    <span data-flex-box="0" className={classNames('box', {'checked': sub.checked})}></span>
                    <span className="sub-name" data-flex-box="1">{sub.name}</span>
                    <span data-flex-box="0">{sub.number}</span>
                  </div>)
                })
              }


            </div>
    );
  }
}
Menu.propTypes = {
  menu: PropTypes.object.isRequired,
  isClear: PropTypes.bool
};
export default Menu;