//动作  --  返回对象  包含type，text类型


const Action=function(text){
	return{
		type:'ADD_TODO',
		text:text
	}
}


export default Action;
