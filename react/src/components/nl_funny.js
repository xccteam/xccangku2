import React, { Component } from 'react';
import '../css/nl_funny.css';
import{ Link } from 'react-router';
import $ from 'jquery';
import Imgplace from '../img/nl_img/oYYBAFs1-52AAXvLAAFcXopO4Xs098.jpg';
import Followycf from '../img/nl_img/follow_ycf.gif';
import Hostlistpic from '../img/nl_img/55dc405daab55.jpg';


class Nl_funny extends Component{
    render(){
        return(
            <div>
                <div className="n_crumbs">
                    <li>
                       <Link to={{pathname:'/shouye'}}>首页</Link> >
                    </li>
                    <li>
                        <Link to={{pathname:'/nl_funny'}}>好去处</Link>
                    </li>
                </div>
                <div className="n_cont">
                    <div className="n_contl">
                        <ul className="n_contltit">
                            <li className="n_hqc">好去处</li>
                            <li className="n_qg">
                                <Link to={{pathname:'/nl_funny'}}>全国</Link>
                            </li>
                            <li className="n_zx">
                                <Link to={{pathname:'/nl_funny'}}>最新</Link>
                            </li>
                            <li className="n_tj">
                                <Link to={{pathname:'/nl_funny'}}>推荐</Link>
                            </li>   
                        </ul>
                        {/* 地方列表 */}
                        <ul className="n_placelist">
                            <li>
                                <a href="">
                                <div className="n_plleft">
                                    <img src={Imgplace}/>
                                    <i className="n_tj"></i>
                                </div>
                                <div className="n_plright">
                                    <h3>广州 | 如何三天三夜畅游长隆</h3>
                                    <p>三天三夜畅游长隆，如何从早到晚嗨不停！？作为暑假非常适合周边游的目的地之一的“长隆”，拥有“广...</p>
                                    <em>地址：广东省广州市番禺区番禺大道长隆旅游度假区</em>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <div className="n_plleft">
                                    <img src={Imgplace}/>
                                    <i className="n_tj"></i>
                                </div>
                                <div className="n_plright">
                                    <h3>广州 | 如何三天三夜畅游长隆</h3>
                                    <p>三天三夜畅游长隆，如何从早到晚嗨不停！？作为暑假非常适合周边游的目的地之一的“长隆”，拥有“广...</p>
                                    <em>地址：广东省广州市番禺区番禺大道长隆旅游度假区</em>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <div className="n_plleft">
                                    <img src={Imgplace}/>
                                    <i className="n_tj"></i>
                                </div>
                                <div className="n_plright">
                                    <h3>广州 | 如何三天三夜畅游长隆</h3>
                                    <p>三天三夜畅游长隆，如何从早到晚嗨不停！？作为暑假非常适合周边游的目的地之一的“长隆”，拥有“广...</p>
                                    <em>地址：广东省广州市番禺区番禺大道长隆旅游度假区</em>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <div className="n_plleft">
                                    <img src={Imgplace}/>
                                    <i className="n_tj"></i>
                                </div>
                                <div className="n_plright">
                                    <h3>广州 | 如何三天三夜畅游长隆</h3>
                                    <p>三天三夜畅游长隆，如何从早到晚嗨不停！？作为暑假非常适合周边游的目的地之一的“长隆”，拥有“广...</p>
                                    <em>地址：广东省广州市番禺区番禺大道长隆旅游度假区</em>
                                </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <div className="n_plleft">
                                    <img src={Imgplace}/>
                                    <i className="n_tj"></i>
                                </div>
                                <div className="n_plright">
                                    <h3>广州 | 如何三天三夜畅游长隆</h3>
                                    <p>三天三夜畅游长隆，如何从早到晚嗨不停！？作为暑假非常适合周边游的目的地之一的“长隆”，拥有“广...</p>
                                    <em>地址：广东省广州市番禺区番禺大道长隆旅游度假区</em>
                                </div>
                                </a>
                            </li>
                            
                        </ul>
                        {/* 页码数 */}
                        <ul className="n_page">
                           <li><a href="">1</a></li>
                           <li><a href="">2</a></li>
                           <li><a href="">3</a></li>
                           <li><a href="">4</a></li>
                           <li><a href="">5</a></li>
                           <li><a href="">6</a></li>
                           <li><a href="">7</a></li>
                           <li><a href="">下一页</a></li>
                           <li><a href="">最后一页</a></li>
                        </ul>
                    </div>
                    <div className="n_contr">
                        <div className="n_followycf">
                            <img src={Followycf} />
                        </div>
                        <div className="n_hotplace">
                            <h4>热门好去处</h4>
                            <ul className="n_hotlist">
                                <li>
                                    <a href="" className="n_hotlista">
                                        <img src={Hostlistpic}/>
                                        <p className="n_hottit">
                                            <strong>常州四大水上乐园清凉来袭！</strong>
                                            <span>
                                                <i className="icon n_views"></i>
                                                <em>39250</em>
                                            </span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="n_hotlista">
                                        <img src={Hostlistpic}/>
                                        <p className="n_hottit">
                                            <strong>常州四大水上乐园清凉来袭！</strong>
                                            <span>
                                                <i className="icon n_views"></i>
                                                <em>39250</em>
                                            </span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="n_hotlista">
                                        <img src={Hostlistpic}/>
                                        <p className="n_hottit">
                                            <strong>常州四大水上乐园清凉来袭！</strong>
                                            <span>
                                                <i className="icon n_views"></i>
                                                <em>39250</em>
                                            </span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="n_hotlista">
                                        <img src={Hostlistpic}/>
                                        <p className="n_hottit">
                                            <strong>常州四大水上乐园清凉来袭！</strong>
                                            <span>
                                                <i className="icon n_views"></i>
                                                <em>39250</em>
                                            </span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="n_hotlista">
                                        <img src={Hostlistpic}/>
                                        <p className="n_hottit">
                                            <strong>常州四大水上乐园清凉来袭！</strong>
                                            <span>
                                                <i className="icon n_views"></i>
                                                <em>39250</em>
                                            </span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            
                        </div>
                        {/* 热门城市游戏攻略 */}
                        <div className="n_hotcity">
                            <h4>热门城市游戏攻略</h4>
                            <ul className="n_hotcitylist">
                                <li>
                                    <a href="">洛阳</a>
                                </li>
                                <li>
                                    <a href="">郑州</a>
                                </li>
                                <li>
                                    <a href="">开封</a>
                                </li>
                                <li>
                                    <a href="">焦作</a>
                                </li>
                                <li>
                                    <a href="">新乡</a>
                                </li>
                                <li>
                                    <a href="">平顶山</a>
                                </li>
                                <li>
                                    <a href="">信阳</a>
                                </li>
                                <li>
                                    <a href="">南阳</a>
                                </li>
                                <li>
                                    <a href="">安阳</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
$(function(){
    $(".n_crumbs li").click(function(){
      $(this).find("a").css("color","#ff7800")
    })
  })
export default  Nl_funny;