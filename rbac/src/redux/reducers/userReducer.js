const initialState ={
    users:[{roleid:'1',name:'Admin',rolecode:'adm01'},{roleid:'2',name:'Tenantadmin',rolecode:'tadm01'},{roleid:'3',name:'PayrollProcessor',rolecode:'pp02'},{roleid:'4',name:'Employee',rolecode:'emp01'},{roleid:'5',name:'HR',rolecode:'hr01'}]
}

const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_USER':
            console.log(action.payload)
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        
        case 'DELETE_USER':
            return{
                ...state,
                users:state.users.filter(user => {
                    return action.payload !== user.roleid
                })
            }
        default: return state
    }
}

export default userReducer;
