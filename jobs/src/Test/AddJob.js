import React, { useEffect, useState } from 'react';
import { db, collection, getDocs, addDoc } from '../cred/api'; 

const AddJob = () => {
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

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'Jobs'), {
        name: 'new job',
        description: 'Job description'
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h1>Fetched Data</h1>
      
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={addData}>Add Data</button>
    </div>
  );
}

export default AddJob;
