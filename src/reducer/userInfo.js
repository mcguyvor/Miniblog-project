export default function (state = '', action) {
    switch (action.type) {
    case 'USER_INFO':
        return (action.payload)

    default : return state
    }
}
