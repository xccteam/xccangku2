//纯函数－－处理数据

const Reducer=function(state,action){
	
	if(typeof state==='undefined'){
		return []
	}
	
	switch (action.type){
		case 'ADD_TODO':
			return [...state,action.text]
			//break;
			case 'login':
			return action.text
		default:
			return state;
			//break;
	}
	
}


export default Reducer;