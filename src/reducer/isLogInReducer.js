export default function(state='',action){
    switch(action.type){
        case 'IS_LOGIN':
        return(action.value);
        default: return state;

    }
}