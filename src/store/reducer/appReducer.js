const INITIAL_STATE = {
    app:'app'
}

export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SETDATA':
            return ({
                ...state,
                app:action.data
            })
    }
    return state;
}