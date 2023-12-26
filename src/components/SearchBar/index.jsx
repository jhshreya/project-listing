import React ,{useState}from 'react'
function SearchBar (props){
    const [jobCriteria, setJobCriteria] =useState({
        title:"",
        budget:"",
        completionTime:"",
        experience: ""
    }

    )

    const handleChange = (e) =>{
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))


    }
    
    const search = async() =>{
        await props.fetchJobsCustoms(jobCriteria);

    }
    return(
        <div className='flex gap-4 my-10 justify-center px-10'>
         <select onChange ={handleChange} name="title" value = {jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value ='disabled hidden'>Service role</option>
            <option value="Blockchain Developer">Blockchain Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="UI/UX Developer">UI/UX Developer</option>
            <option value="Data Analyst">Data Analyst</option>

         </select>
         <select onChange ={handleChange}  name="budget" value = {jobCriteria.budget} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=" disabled hidden" >Budget</option>
            <option value="1k-3k">1k-3k</option>
            <option value="3k-5k">3k-5k</option>
            <option value="5k-7k">5k-7k</option>
            <option value="7k-10k">7k-10k</option>
            <option value="10k-15k">10k-15k</option>
        </select>
        <select onChange ={handleChange} name="completionTime" value = {jobCriteria.completionTime} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value='disabled hidden'>Completion Time</option>
            <option value="2 Days">2 Days</option>
            <option value="5 Days">5 Days</option>
            <option value="7 Days">7 Days</option>
            <option value="10 Days">10 Days</option>
            <option value="15 Days">15 Days</option>
            <option value="20 Days">20 Days</option>
            <option value="30 Days">30 Days</option>
            <option value="45 Days">45 Days</option>
            <option value="60 Days">60 Days</option>
        </select>
        <select onChange ={handleChange} name="experience" value = {jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=" disabled hidden">Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
        
    </div>
  )
}
        
    



export default SearchBar