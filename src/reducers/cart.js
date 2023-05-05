
export const cartInitialState = JSON.parse(localStorage.getItem('cart')) ||[]


//update localStorage con el state del car

export const updateLocalStora = state =>{
    window.localStorage.setItem('cart',JSON.stringify(state))
}


export const cartReducer = (state,action) =>{
    const {type:actionType,payload:actionPayload} = action
    switch(actionType){
        case 'ADD_TO_CART':{
            const {id} = actionPayload
            const productInCart = state.findIndex(item => item.id == id)

            if(productInCart >= 0){
                const newState = structuredClone(state)
                newState[productInCart].quantity += 1
                updateLocalStora(newState)
                return newState
            }

            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity:1
                }
            ]
            updateLocalStora(newState)
            return newState
        }

        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload
            const newState =  state.filter(item => item.id !== id)
            updateLocalStora(newState)
            return newState
        }

        case 'CLEAR_CART':{
            updateLocalStora([])
            return []
        }
    }
    return state
}