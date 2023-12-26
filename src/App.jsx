import Navbar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
import jobData from './jobdummydata'
import { useEffect, useState } from 'react'
import { collection, query,orderBy,where, getDocs } from "firebase/firestore";
import {db} from './firebase.config'

function App() {
   const [jobs,setJobs] =useState([]);
   const [customSearch,setCustomSearch] = useState(false);
   const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs =[]
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn","desc"));
    const req = await getDocs(q);
     req.forEach((job) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  tempJobs.push({
    ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate()
  })
});
 setJobs(tempJobs);

   }
   const fetchJobsCustoms = async(jobCriteria) => {
    setCustomSearch(true);
    const tempJobs =[]
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef,where("title","==",jobCriteria.title) ,where("budget","==",jobCriteria.budget),where("completionTime","==",jobCriteria.completionTime),where("experience","==",jobCriteria.experience),orderBy("postedOn","desc"));
    const req = await getDocs(q);
     req.forEach((job) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  tempJobs.push({
    ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate()
  })
});
 setJobs(tempJobs);

   }



   useEffect(() =>{
    fetchJobs()
   } ,[])


  return (

    <div>
      <Navbar/>
      <Header/>
      <SearchBar fetchJobsCustoms={fetchJobsCustoms}/>
      {customSearch && 
      <button onClick={fetchJobs} className='flex pl-[1250px] mb-2'>
        <p className='bg-blue-500 px-10 py-2 rounded-md text-white'>Clear Filters</p>
      </button>
      
      }
      {jobs.map((job)=>(
      <JobCard key ={job.id}  {...job}/>))}
    </div>
      
        
  
  )
}

export default App
