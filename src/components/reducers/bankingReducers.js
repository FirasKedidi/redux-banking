
const initialState = 0
export const bankingReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'DEPOSIT':
            return (state + action.amount)
            break
            //logic for deposit
        case 'WITHDRAW':
            return state - action.amount
            //logic for withdraw
            break
        case 'COLLECT_INTEREST':
            return state*1.03
            //logic
            break
        case 'DELETE_ACCOUNT':
            return 0
            //logic
            break
        default:
            return state
    }
     // return the old state

}

const deposit = {
    type:'DEPOSIT',
    amount: 20
}

const withdraw = {
    type:'WITHDRAW',
    amount: 20
}

const collectInterest = {
    type: 'COLLECT_INTEREST'
}

const deleteAccount = {
    type: 'DELETE_ACCOUNT'
}