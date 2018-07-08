import React, { Component } from 'react';
import '../css/book.css';
import logo from '../img/nl_img/logo.png';
import appCode from '../img/nl_img/appCode.png';
import weixin_code from '../img/nl_img/weixin_code.png';
import alipay from '../img/nl_img/alipay.png';
import chengxin from '../img/nl_img/chengxin.jpg';
import kexin from '../img/nl_img/kexin.jpg';
import zhizhao from '../img/nl_img/zhizhao.jpg';
import ghs from '../img/nl_img/ghs.png';
import $ from 'jquery';
import{ Link } from 'react-router';

class Book extends Component{
    render(){
        return(
            <div>
            {/* 头部信息 */}
                <div id="n_headwrap">
                    <div className="n_headtop1">
                        <div className="n_topl">
                            <Link to={{pathname:'/'}} className="n_rentsy">[返回首页]</Link>
                        </div>
                        <div className="n_topr">
                        <span className="n_login">
                        <Link to={{ pathname: 'login' }} className="n_lg"><em>请</em>登录,</Link>
                        &nbsp;
                            [<Link to={{pathname:'register'}} className="n_reg">免费注册</Link>]
                        </span>
                        <span className="n_view">
                            <i className="n_icon n_clock"></i>
                            <em>最近浏览</em>
                        </span>
                        <span>
                            <i className="n_icon n_phone"></i>
                            <em>手机APP</em>
                        </span>
                        {/* 最近浏览 */}
                        <ul className="n_viewelist1">
                            <li className="n_nread">没有最近浏览记录~</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div id="head">
                    <div className="n_logoyl">
                        <a href="/" className="log">
                            <img src={logo}/>
                        </a>
                        <ul className="n_paysteep">
                            <li>
                                <em></em>
                                <span>选择套餐和日期</span>
                            </li>
                            <li>
                                <em></em>
                                <span>填写并核对信息</span>
                            </li>
                            <li className="n_lastteep">
                                <em></em>
                                <span className="n_lastclo">支付</span>
                                <i className="top_line"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 内容区域 */}
                <div className="bookBox">
                    <div className="n_bookModel n_current">
                        <h2 className="n_bmodelTit">
                            <span>1</span>
                            <p>套餐信息</p>
                        </h2>
                        <div className="n_bmBox">
                            <div className="n_bookpageinfo">
                                <h4>奇境乐园成人票1张</h4>
                                <a href="#">
                                    <i></i>
                                    修改套餐
                                </a>
                            </div>
                            <div className="n_discountInfo">
                                <span>优惠说明：</span>
                                <span><em>返</em>124积分</span>
                            </div>
                            <div className="n_bookadd">
                               <ul className="n_booktit n_bookbt">
                                   <li className="n_wl">玩乐</li>
                                   <li>操作</li>
                                   <li>说明</li>
                                   <li>使用日期</li>
                                   <li>数目</li>
                               </ul>
                               <ul className="n_booktit n_shuju">
                                   <li>
                                       <div className="n_wlxx">
                                            <p>奇境乐园</p>
                                            <em>奇境乐园</em>
                                       </div>
                                       <div className="n_tgxz">
                                         退改规则（可能收取<span>手续费</span>)
                                       </div>
                                   </li>
                                   <li>
                                    <span className="n_selectBtn"></span>
                                   </li>
                                   <li>
                                       <div className="n_clear">包含</div>
                                   </li>
                                   <li></li>
                                   <li>
                                       <div className="n_num">
                                        <span className="n_jian">-</span>
                                        <input type="text" className="n_count" value="1"/>
                                        <span className="n_jia">+</span>
                                       </div>
                                   </li>
                               </ul>
                             </div>
                        </div> 
                    </div>
                </div>
                 {/* 支付 */}
                <div className="n_gotopay">
                    <div className="n_payBox">
                        <a href="" className="n_back">&lt; 返回上一级</a>
                        <div className="n_payBtn">
                            去支付
                            <span>我已阅读以下内容</span>
                        </div>
                        <div className="n_total-price">
                            <p className="n_price">应付金额：<em id="final-price">￥124.8</em></p>
                        </div>
                    </div>  
                </div>
                {/* 套餐须知 */}
                <div id="n_explainbox">
                    <div className="n_explaincont">
                        <h3>套餐须知</h3>
                        <div className="n_explaintext">
                            <div className="n_tcxq">
                                <h5>【套餐详情】</h5>
                                <ul>
                                    <li>奇境乐园成人票 1张</li>
                                </ul>
                            </div>
                            <div className="n_tbsm">
                                <h5>【特别说明】</h5>
                                <ul>
                                    <li>开放时间：10:00-21:00。</li>
                                    <li>入园方式：至景区扫码入园。</li>
                                    <li>门票政策：儿童1.0m（不含）以下免费，1.0m以上按全价购买。</li>
                                </ul>
                            </div>
                        
                        </div>
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
        )
    }
}

export default Book;
