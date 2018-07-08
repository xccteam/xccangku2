import React from 'react';
import '../css/xc-tuangou.css'
import xcjpg1 from '../img/xcimg/xc1 (1).jpg'
import $ from 'jquery'
import Mock from 'mockjs'


Mock.mock('http://www.xc.com/api',{
			"user|20":[
				{
					"ids|+1":0,
					"name":"@cname",
					"birthday":"@date('yyyy-MM-dd')",
					"img":"@dataImage('200x100')",
					"text":"@cparagraph",
					"email":"@email",
					"address":"@county(true)",
					"shenfen":"@id()",
					"xz":"@xingzuo"
				}
			]
		})
	




class Xc_tuangou extends React.Component{
	constructor(props){
		super(props)
		this.state={
			detail:''
		}
	}
	
	
	render(){
		return(
			<div className='xc_tuangouwrap'>
				<div className='xc_tuangou'>
				<h1>您在那个团购站购买的</h1> 
      
				<div className='xc_logoliebiao'>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					<div><img src={xcjpg1}/></div>
					
				</div>
				</div>
			</div>
			
		)
	}
	
	componentWillMount(){
		
		
		
		
		
		var _this=this;
		$.ajax({
			type:"get",
			url:"http://www.xc.com/api",
			
			async:true,
			dataType:'jsonp',
			success:function(data){
				console.log(data);
			}
		});
		
	}
	
	
}


export default Xc_tuangou;