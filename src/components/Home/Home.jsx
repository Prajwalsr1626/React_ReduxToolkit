import  { memo, useState } from 'react';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, fetchUserByIdAccount, increment, incrementByAmount } from '../../reduesStore/slice/accountSlice';

function Home() 
{
    const [value,setValue]= useState(0);
    const amount = useSelector(state=>state.account.amount)
    const account = useSelector(state=>state.account)
    const dispatch = useDispatch()


    return (
        <div className='maindiv'>
           {account.pending ?<p>lodding</p>:<h1>Amount:{amount}</h1>}
            <h2>Account Compent</h2>  
            
            <div className='childdiv'>  
            <button className='btn' onClick={()=>dispatch(increment())}>Increment + </button>
            <button className='btn' onClick={()=>dispatch(decrement())}>Deccrement - </button> 
            <input className='inpt' type='text' onChange={(e)=>setValue(+e.target.value)}></input>
            <button className='btn' onClick={()=>dispatch(incrementByAmount(value))}>Incrementbyinut {value} + </button> 
            <button className='btn' onClick={()=>dispatch(fetchUserByIdAccount(value))}>get user + </button> 
            </div>
        </div> 
    );
}

export default memo(Home) ;