import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from './api';  // Import Firestore functions and the initialized db

const Data = () => {
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
        <div>
            <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Data;
