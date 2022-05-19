import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deposit, withdraw, collectInterest, deleteAccount, toggleAccount } from '../actions/bankingActions'
const Banking = () => {
    const [amount, setAmount] =useState('')
    const dispatch = useDispatch()
    const handleDeposit = (e) => {
        dispatch(deposit(amount))
        setAmount('')
    }
    const handleWithdraw = (e) => {
        dispatch(withdraw(amount))
        setAmount('')
    }
    const handleInterest = (e) => {
        dispatch(collectInterest())
    }
    const handleDelete = () => {
        dispatch(deleteAccount())
    }
    const handleAccountType = () => {
        dispatch(toggleAccount())
    }
  return (
    <div className='form-group'>
        <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)} className="form-control" />
        <button onClick={handleDeposit} className="btn btn-success">Deposit</button>
        <button onClick={handleWithdraw} className="btn btn-primary">Withdraw</button>
        <button onClick={handleInterest} className="btn btn-warning">Collect interest</button>
        <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
        <button onClick={handleAccountType} className="btn btn-secondary">Change Account type</button>
    </div>
  )
}

export default Banking