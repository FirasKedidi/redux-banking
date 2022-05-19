
const initialState = {
    balance:0,
    isSavingAccount: false
}
export const bankingReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'DEPOSIT':
            return {...state,balance: state.balance + action.amount}
            break
            //logic for deposit
        case 'WITHDRAW':
            return {...state,balance: state.balance - action.amount}
            //logic for withdraw
            break
        case 'COLLECT_INTEREST':
            return {...state,balance: state.balance*1.03}
            //logic
            break
        case 'DELETE_ACCOUNT':
            return {...state,balance:0}
            //logic
            break
        case 'TOGGLE_ACCOUNT':
            return {...state,isSavingAccount:!state.isSavingAccount}
        default:
            return state
    }
     // return the old state

}

