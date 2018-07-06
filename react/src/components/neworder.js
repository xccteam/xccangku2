import React, { Component } from 'react';
import '../css/neworder.css';
import $ from 'jquery';

class Neworder extends Component{
	render(){
		return(
			<div>
				<div className="z_neworder_head">
					<div className="z_neworder_headtit">
						<h6>本周新品<mark>50</mark>份</h6>
					</div>
					<div className="z_neworder_headsaixuan">
						<i>筛选:</i>
						<ul>
							<li>
								全部<mark>(50)</mark>
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