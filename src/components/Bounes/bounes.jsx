
import { useDispatch, useSelector } from 'react-redux';

import { memo, useState } from 'react';
import { increment } from '../../reduesStore/slice/bounsSlice';
const options =["cricket","football","hockey"]
const days =["weekday","weekend"]

function Bounes()
{
    const [seleted,setSeleted] = useState("");
    const [days2,setDays] = useState("");
   
    const point = useSelector(state=>state.bouns.point)
    const dispatch = useDispatch()
    return (<>
        <div className='maindiv'>
            <h1>Point:{point}</h1>
            <h2>Bounes Component</h2>  
            
            <div className='childdiv'>  
            <button className='btn' onClick={()=>dispatch(increment())}>Increment + </button>
        
            </div>
          <h1> Sports :{seleted}</h1>

           { options.map((ele,index)=>(
           <div key={index}>
            <input type='radio' id={ele} name='sports' value={ele} onClick={(e)=>setSeleted(e.target.value)} ></input>
            <label >{ele}</label>
            </div> 
          ))}

          <h1> Days:{days2}</h1>
           {days.map((ele,index)=>(
           <div key={index}>
            <input type='radio' name='days' value={ele} onClick={(e)=>setDays(e.target.value)} ></input>
            <label >{ele}</label>
            </div> 
          ))}
            
         
            
        </div> 
        </>
    );
}

export default memo(Bounes) ;