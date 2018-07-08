import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../img/nl_img/logo.png';
import appCode from '../img/nl_img/appCode.png';
import weixin_code from '../img/nl_img/weixin_code.png';
import alipay from '../img/nl_img/alipay.png';
import chengxin from '../img/nl_img/chengxin.jpg';
import kexin from '../img/nl_img/kexin.jpg';
import zhizhao from '../img/nl_img/zhizhao.jpg';
import ghs from '../img/nl_img/ghs.png';
import $ from 'jquery';
import '../css/nl_puc.css';
import{ Link } from 'react-router';
import Xc_shouye_lunbotu from './xc-shouye-lunbo';
import Xc_tuangou from './xc-tuangou';
import Nl_funny from './nl_funny';
import Neworder from './neworder';
<<<<<<< HEAD
import Actions from './redux/Actions'
import Store from './redux/Store'
=======

>>>>>>> e87562ab8426a8139f156599223f10271d6f37e7

class Nl_puc extends Component {
  constructor(props){
		super(props)
		this.state={
      
     
		}
		this.onchanges=this.onchanges.bind(this)
	}
	
	
	onchanges(){
    this.setState({str:Store.getState()})
    
  }
  // componentWillUpdate(){
    
  //     console.log($('#xcname').html())
     
    
   
  // }

	componentDidMount(){
    Store.subscribe(this.onchanges)
    // if($('#xcname').html===''){
    //   console.log('kong')
    // }
   
	}
 
  render() {
let xcusermessage;
console.log(this.state.str);//[]
console.log(this.state.str111);
if(this.state.str==undefined){
  xcusermessage=(
    <a>
      [<Link to={{ pathname: 'login' }} className="n_lg">登录</Link>]
      [<Link to={{pathname:'register'}} className="n_reg">免费注册</Link>]
    </a>
    
  )
}else{
  xcusermessage=(
    <a>欢迎-{this.state.str.phone}</a>
  )
}

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
                  <span className="n_ghsf">
                    <em>更换省份</em>
                    <i className="n_icon n_icondlist"></i>
                  </span>
                </div>
                <div className="n_topr">
                  <span className="n_login">
                  {xcusermessage}
                 
                 
                  
                 
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
                  {/* 最近浏览 */}
                  <ul className="n_viewelist">
                      <li className="n_nread">没有最近浏览记录~</li>
                  </ul>
                </div>
                {/* 更换省份 */}
                <table className="n_provlist">
                    <tbody>
                      <tr>
                        <th>华南地区</th>
                        <td>
                            <span id="GuangDong">广东</span>
                            <span id="HaiNan" >海南</span>
                            <span id="FuJian">福建</span>
                            <span id="JiangXi">江西</span>
                            <span id="GuangXiZhuangZu">广西</span>
                        </td>
                    </tr>
                    <tr>
                        <th>华东地区</th>
                        <td>
                            <span id="ShangHai" >上海</span>
                            <span id="ZheJiang" >浙江</span>
                            <span id="JiangSu" >江苏</span>
                            <span id="AnHui" >安徽</span>
                            <span id="ShanDong">山东</span>
                        </td>
                    </tr>
                    <tr>
                        <th>华北地区</th>
                        <td>
                            <span id="BeiJing">北京</span>
                            <span id="TianJin">天津</span>
                            <span id="HeBei" >河北</span>
                            <span id="ShanXi">山西</span>
                        </td>
                    </tr>
                    <tr>
                        <th>西南地区</th>
                        <td>
                            <span id="SiChuan">四川</span>
                            <span id="ZhongQing">重庆</span>
                            <span id="YunNan">云南</span>
                            <span id="GuiZhou">贵州</span>
                            <span id="XiCang">西藏</span>
                        </td>
                    </tr>
                    <tr>
                        <th>西北地区</th>
                        <td>
                            <span id="ShanXiSheng">陕西</span>
                            <span id="GanSu">甘肃</span>
                        </td>
                    </tr>
                    <tr>
                        <th>东北地区</th>
                        <td>
                            <span id="LiaoNing">辽宁</span>
                            <span id="JiLin">吉林</span>
                            <span id="HeiLongJiang">黑龙江</span>
                        </td>
                    </tr>
                    <tr>
                        <th>华中地区</th>
                        <td>
                            <span id="HuNan">湖南</span>
                            <span id="HuBei">湖北</span>
                            <span id="HeNan">河南</span>
                        </td>
                    </tr>
                    <tr>
                        <th>港澳台</th>
                        <td>
                            <span id="XiangGang">香港</span>
                            <span id="AoMen">澳门</span>
                        	<span id="TaiWan">台湾</span>
                        </td>
                    </tr>
                    <tr>
                        <th>境外地区</th>
                        <td>
                            <span id="TaiGuo">泰国</span>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="n_last">*提示：根据你选择的地区，我们将为你切换至该地区的首页</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="n_headcenter">
              <a href="/" className="log">
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
                    <Link to={{pathname:'/shouye'}}>首页</Link>
                  </li>
                  <li  className="n_mainmenu">
                  <Link to={{pathname:'/neworder'}}>每周新品</Link>
                  </li>
                  <li  className="n_mainmenu">
                    <Link to={{pathname:'/nl_funny'}}>好去处</Link>
                  </li>
                  <li className="n_mainmenu">
                    <Link to={{pathname:'/tuangou'}}>团购</Link>
                  </li>
                  <li  className="n_mainmenu">
                    <Link to={{ pathname: '/phone' }}>手机版下载</Link>
                  </li>
                </ul>
                {/* <span className="n_hdindex"></span> */}
              </div>
             
            </nav>
           
          </header>
        </div>

        {/* 内容区块 */}
        <section>
        	{this.props.children}
        </section>
        {/* bottom部分 */}
        <div id="n_botwrap">
          <div id="n_bottom">
              <ul className="n_botlink">
                  <li>
                    <i></i>
                    <a href="">品质承诺</a>
                  </li>
                  <li>
                    <i></i>
                    <a href="">无房退款</a>
                  </li>
                  <li>
                    <i></i>
                    <a href="">关注我们</a>
                  </li>
                  <li>
                    <i></i>
                    <a href="">帮助中心</a>
                  </li>
                  <li>
                    <i></i>
                    <a href="">APP下载</a>
                  </li>
              </ul>
          </div>
        </div>
        {/* footer区域 */}
        <div id="n_footwarp">
        <footer>
            <div className="n_ftop">
                <dl className="n_guanyu">
                  <dt>关于要出发</dt>
                  <dd>团队介绍</dd>
                  <dd>招聘信息</dd>
                  <dd>新闻动态</dd>
                </dl>
                <dl className="n_bzzx">
                  <dt>帮助中心</dt>
                  <dd>常见问题</dd>
                  <dd>现金券规则</dd>
                  <dd>预订说明</dd>
                  <dd>团购预约</dd>
                  <dd>支付说明</dd>
                </dl>
                <dl className="n_kffw">
                  <dt>客户服务</dt>
                  <dd>品质承诺</dd>
                  <dd>客服及投诉电话 <b>400-118-1166 / 020-62312938</b></dd>
                  <dd>联系我们</dd>
                  <dd>广州市政务服务热线 <b>020-12345</b></dd>
                </dl>
                <ul className="n_code">
                    <li>
                        <a href="">
                          <img src={appCode}/>
                        </a>
                        APP下载
                    </li>
                    <li>
                      <img src={weixin_code}/>
                      微信公众号
                    </li>
                </ul>
            </div>
            {/* 友情链接 */}
            <div className="n_links">
                <strong>友情链接:</strong>
                <a href="">如影旅行网</a>
                <a href="">亲子游记</a>
                <a href="">内蒙古旅游网 </a>
                <a href="">四川旅游景点</a>
                <a href="">深圳旅行社</a>
                <a href="">深圳景点门票</a>
                <a href="">厦门户外</a>
                <a href="">京郊自驾游</a>
            </div>
            {/* 网站认证 */}
            <div className="n_trust">
              <img src={alipay}/>
              <img src={zhizhao}/>
              <img src={chengxin}/>
              <img src={kexin}/>
            </div>
            <ul className="n_license">
              <li>中华人民共和国增值电信业务经营许可证 经营许可证编号：粤B2-20130613</li>
              <li>旅行社业务经营许可证编号：L-GD01685</li>
              <li>版权所有 © 广州酷旅旅行社有限公司 2009-2018 粤ICP备11008339号</li>
              <li className="n_ag">
                <img src={ghs}/>
                <p>粤公网安备 44010602004448号</p>
              </li>
            </ul>
        </footer>
        </div>
        
      </div>
    );
  }

  
}
$(function(){
  $(".n_mainmenu").click(function(){
    // console.log("1")
    $(this).find("a").css("color","#ff7800").end().siblings().find("a").css("color","#525b5f")
  })
  let flag=true;
  $(".n_ghsf").click(function(){
     
      if(flag){
        $(this).find("i").css({backgroundPosition:"-232px -9px"})
        $(".n_provlist").animate({top:"41px"})
        flag=false;
      }else{
        $(this).find("i").css({backgroundPosition:"-232px 0px"})
        $(".n_provlist").animate({top:"-473px"})
        flag=true;
      }
  })
  $(".n_view").click(function(){
    if(flag){
      $(this).find(".n_iconbot").css({backgroundPosition:"-232px -9px"})
      $(".n_viewelist").animate({top:"41px"})
      flag=false;
    }else{
      $(this).find(".n_iconbot").css({backgroundPosition:"-232px 0px"})
      $(".n_viewelist").animate({top:"-473px"})
      flag=true;
    }
  })
  
  
})


  
export default Nl_puc;
