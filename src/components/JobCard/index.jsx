import React from 'react'
import dayjs from 'dayjs'
function JobCard (props){
        //const skills = ["Solidity", "React", "Ether.js"];
        const date1=dayjs(Date.now());
        const DiffInDays =date1.diff(props.postedOn,'day')
    return(
        <div className='mx-40 mb-4'>
            <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-lg font-semibold'>{props.title}</h1>
            <p>{props.budget} &#x2022; {props.completionTime} &#x2022; {props.experience}</p><div  className='flex items-center gap-2'>
            {props.skills.map((skill) =>(
                <p  key={skill} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
            ))}
            </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-500'> {DiffInDays >1? `${DiffInDays} days` :`${DiffInDays} day`} ago</p>
            </div>
            </div>
            </div>

    
       

        

    
    )

}

export default JobCard