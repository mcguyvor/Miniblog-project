export default function(state=false,action){
    switch(action.type){
        case 'IS_LOGIN':
        return(action.payload);

        default: return state;

    }
}