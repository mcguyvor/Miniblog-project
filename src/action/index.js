export const isLogIn = () =>{
    return(
        {
            type:'IS_LOGIN',
            payload : true
        }
    )
}

export const userInfo = value =>{
    return(
        {
            type:'USER_INFO',
            payload : value
        }
    )
}