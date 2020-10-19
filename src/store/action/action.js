const set_Data=(data)=>{
    return (dispatch)=>{
        dispatch({type:'SETDATA',data:data})
        console.log('working');
    }
}

export {
    set_Data
}