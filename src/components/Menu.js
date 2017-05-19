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
    let {isClear} = props;
    if (isClear) {
      this.setState((preState) => {
        let state = preState;
        state.checked = false;
        state.menu.submenus.map(sub => {
          sub.checked = false;
        });
        return state;
      });
    }
  }

  toggle(index) {
    this.setState((preState) => {
      let state = preState;
      console.log(state.menu.submenus[index]);
      state.menu.submenus[index]['checked'] = !state.menu.submenus[index]['checked'];
      return state;

    });
  }

  toggleAll() {
    this.setState((preState) => {
      let state = preState;
      state.menu.submenus.map(sub => {
        sub.checked = !sub.checked;
      });

      return state;

    });
  }

  render() {
    let {submenus} = this.state.menu;
    return (
            <div className="menu">
              <div className="menu-item" data-flex="main:justify">
                <span data-flex-box="0" onClick={() => {
                  this.toggleAll()
                }}
                      className={classNames('box', {'checked': this.state.checked})}></span>
                <span data-flex-box="1">{this.state.menu.title}</span>
                <span data-flex-box="0">{this.state.menu.total}</span>
              </div>
              {
                submenus.map((sub, index) => {
                  return (<div key={index} className={classNames('menu-item', 'sub')} data-flex="main:justify">
                    <span data-flex-box="0" onClick={() => {
                      this.toggle(index)
                    }}
                          className={classNames('box', {'checked': sub.checked})}></span>
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