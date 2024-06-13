import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from '../../cred/api'; 
import JobCard from './JobCard';

const Jobs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Jobs'));
        const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="text-center">
      <h1>Find all Jobs at one place</h1>
    </div>
    <div className="container" style={{display:'flex', flexDirection:"row",justifyContent:"space-around"}}>
    
      {data.map((jobData) => (
        <JobCard key={jobData.id} job={jobData} />
      ))}
    </div>
    
    </>
    
  );
};

export default Jobs;
