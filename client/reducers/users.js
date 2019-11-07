const loggedIn=(state={name: 'anonymous',userId:1},action)=>{
    switch(action.type){
        case 'LOG_IN':
            return {name: action.name, userId:action.id
            }
        default: 
            return state
    }   
}

export default loggedIn