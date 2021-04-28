const fashionersReducer = (state, action) => {
    switch(action.type) {
        case "GET_ALL_FASHIONERS":
            return {
                ...state,
                fashioners:action.payload,
                loading:false
            }
            default:
                return state
    }

}
export default fashionersReducer;