import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../img/nl_img/logo.png';
import $ from 'jquery';


import '../css/nl_puc.css';

class Nl_puc extends Component {
  render() {
    return (
      <div className="Nl_puc">
        {/* 头部信息 */}
        <div id="n_headwrap">
          <header>
            <div className="n_headtop">
                <div className="n_topl">
                  <span>您好，欢迎来到要出发!</span>
                  <span>
                    <i className="n_icon n_icondz"></i>
                    <em>河南</em>
                  </span>
                  <span>
                    <em>更换省份</em>
                    <i className="n_icon n_icondlist"></i>
                  </span>
                </div>
                <div className="n_topr">
                  <span className="n_login">
                    [<a href="" className="n_lg">登录</a>]
                    &nbsp;
                    [<a href="" className="n_reg">免费注册</a>]
                  </span>
                  <span className="n_view">
                    <i className="n_icon n_clock"></i>
                    <em>最近浏览</em>
                    <i className="n_icon n_iconbot"></i>
                  </span>
                  <span>
                    <i className="n_icon n_phone"></i>
                    <em>手机APP</em>
                  </span>
                </div>
            </div>
            <div className="n_headcenter">
              <a href="" className="log">
                <img src={logo}/>
              </a>
              <div className="n_search">
                <i className="n_icon n_iconsearch"></i>
                <input type="text" className="n_searchbox" placeholder="目的地，酒店，景点关键字"/>
                <input type="submit" value="搜索" className="n_searchbtn"/>
              </div>

              <div className="n_useinfo">
                <a href="" target="_blank">
                  <i  className="n_icon n_iconuse"></i>
                  <span>我的要出发</span>
                </a>
                <a href="" target="_blank">
                <i  className="n_icon n_order"></i>
                <span>订单查询</span>
                </a>
              </div>
            </div>
            {/* 导航 */}
            <nav>
               <div className="n_menuleft">
                <h2>周边游推荐</h2>
              </div>
              <div className="n_menu">
                <ul >
                  <li  className="n_mainmenu">
                    <a href="">首页</a>
                  </li>
                  <li  className="n_mainmenu">
                    <a href="">每周新品</a>
                  </li>
                  <li  className="n_mainmenu">
                    <a href="">好去处</a>
                  </li>
                  <li  className="n_mainmenu">
                    <a href="">团购预约</a>
                  </li>
                  <li  className="n_mainmenu">
                    <a href="">手机版下载</a>
                  </li>
                </ul>
                <span className="n_hdindex"></span>
              </div>
             
            </nav>
           
          </header>
        </div>
        {/* 内容区块 */}
        <section></section>
        {/* bottom部分 */}
        <div id="n_bottom">
          default
        </div>
        {/* footer区域 */}
        <footer>
          dfdsf
        </footer>
      </div>
    );
  }
}

export default Nl_puc;
