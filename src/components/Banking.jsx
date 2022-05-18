import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

const Banking = () => {
    const [amount, setAmount] =useState('')
    const dispatch = useDispatch()
    const handleDeposit = (e) => {
        dispatch({type:'DEPOSIT',amount:parseInt(amount)})
        setAmount('')
    }
    const handleWithdraw = (e) => {
        dispatch({type:'WITHDRAW',amount:parseInt(amount)})
        setAmount('')
    }
    const handleInterest = (e) => {
        dispatch({type:'COLLECT_INTEREST'})
    }
    const handleDelete = () => {
        dispatch({type:'DELETE_ACCOUNT'})
    }
    const handleAccountType = () => {}
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