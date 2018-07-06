import React, { Component } from 'react';
import '../css/neworder.css';
import $ from 'jquery';

class Neworder extends Component{
	render(){
		return(
			<div>
				<div className="z_neworder_head">
					<div className="z_neworder_headtit">
						<span></span>
						<h6>本周新品<mark>50</mark>份</h6>
					</div>
					<div className="z_neworder_headsaixuan">
						<i>筛选:</i>
						<ul>
							<li>
								<span>全部<mark>(50)</mark></span>
							</li>
							<li>
								<span>浙江<mark>(3)</mark></span>
							</li>
							<li>
								<span>广东<mark>(21)</mark></span>
							</li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Neworder;