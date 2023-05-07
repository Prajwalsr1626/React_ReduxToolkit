

import { useDispatch, useSelector } from 'react-redux';
import { rewardIncrement } from '../../reduesStore/slice/rewardReducer';
import { useAddAccountsMutation , useDeleteAccountsMutation, useGetAccountQuery, useUpdateAccountsMutation } from '../../reduesStore/api/adminSlice';



function Reward() 
{
    const reward = useSelector(state=>state.reward.reward)
    const dispatch = useDispatch()
    const {data,error,isLoding} = useGetAccountQuery();
     const [deleteAccount] = useDeleteAccountsMutation();
    const [addAccount] =useAddAccountsMutation ();
     const [updateAccount] = useUpdateAccountsMutation();
    return (
        <div className='maindiv'>
            <h1>Point:{reward}</h1>
            <h2>Reward Component</h2>  
            <div>
            {
               data?.map((account,index)=><p key={index}>
                {account.id }:{account.amount} 
                <button className='btn' onClick={()=>updateAccount({amount:777,id:account.id})}>update Account </button>
                <button className='btn' onClick={()=>deleteAccount(account.id)}>Delete Account </button>
                </p>)
            }
            </div>
            <div className='childdiv'>  
            
            <button className='btn' onClick={()=>addAccount(100,data.length)}>addAccount </button>
            <button className='btn' onClick={()=>dispatch(rewardIncrement())}>Increment + </button>
        
            </div>
        </div> 
    );
}

export default Reward ;