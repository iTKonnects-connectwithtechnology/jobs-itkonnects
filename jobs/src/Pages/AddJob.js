import React, {  useState } from 'react';
import { db, collection, addDoc } from '../cred/api';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';


const AddJob = () => {

    //title locations salary company link experience department batches

    const [title, setTitle] = useState("")
    const [locations, setlocations] = useState("")
    const [salary, setsalary] = useState("")
    const [company, setcompany] = useState("")
    const [link, setlink] = useState("")
    const [experience, setexperience] = useState("")
    const [department, setdepartment] = useState("")
    const [batch,setbatch]=useState("")
    const [role,setrole]=useState("")

    const [lastDate, setlastDate] = useState(new Date());

   
  


    const addData = async () => {
        try {
            const docRef = await addDoc(collection(db, 'Jobs'), {
                title: title,
                locations: locations.split(","),
                salary:salary,
                company:company,
                link:link,
                experience:experience,
                department:department,
                batch:batch.split(","),
                role:role

            });
            console.log("Document written with ID: ", docRef.id);
            toast.success("Data added successfully!");
        } catch (error) {
            toast.error("Failed to add!")
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className='container'>
            <h1 className='text-center'>Add Job</h1>

            <div className="text-center form">
                <div class="mb-3" style={{ width: "50%" }}>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" placeholder='title' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                    <input type="text"  value={locations} onChange={(e)=>{setlocations(e.target.value)}} class="form-control" placeholder='locations' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                    <input type="text"  value={salary} onChange={(e)=>{setsalary(e.target.value)}} class="form-control" placeholder='salary' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                    <input type="text"  value={company} onChange={(e)=>{setcompany(e.target.value)}} class="form-control" placeholder='company' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                    <input type="text"  value={link} onChange={(e)=>{setlink(e.target.value)}} class="form-control" placeholder='link' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                    <input type="text"  value={experience} onChange={(e)=>{setexperience(e.target.value)}} class="form-control" placeholder='experience' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                    <input type="text"  value={batch} onChange={(e)=>{setbatch(e.target.value)}} class="form-control" placeholder='batch' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                    <input type="text"  value={role} onChange={(e)=>{setrole(e.target.value)}} class="form-control" placeholder='role' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                    <p htmlFor="">computers electronics civil mechanical</p>
                    <input type="text"  value={department} onChange={(e)=>{setdepartment(e.target.value)}} class="form-control" placeholder='department' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" style={{ width: "50%" }}>
                <DatePicker selected={lastDate} onChange={(date) => setlastDate(date)} />
                </div>
                <button className='text-center btn btn-success m-2' onClick={addData}>Add Job</button>
            </div>
        </div>
    );
}

export default AddJob;
