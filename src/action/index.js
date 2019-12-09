export const isLogIn = () => {
    return (
        {
            type: 'IS_LOGIN',
            payload: true
        }
    )
}
export const isLogOut = () => {
    return (
        {
            type: 'IS_LOGOUT',
            payload: false
        }
    )
}


export const userInfo = value => {
    return (
        {
            type: 'USER_INFO',
            payload: value
        }
    )
}
