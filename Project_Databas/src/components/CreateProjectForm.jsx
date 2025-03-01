import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CreateProjectForm = () => {
    const [customer, setCustomers] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [customerId, setCustomerId] = useState("0");
    const navigate = useNavigate();

    const getCustomers = async () => {
        const res = await fetch('https://localhost:7141/api/Customers');
        const data = await res.json();

        setCustomers(data.content);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            projectName: projectName,
            description: description,
            customerId: parseInt(customerId)
        }
        const res = await fetch('https://localhost:7141/api/Projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            console.log("Project added successfully");
            console.log(res)
            navigate("/Projects");
          } else {
            console.error("Failed to add project:", res.status);
          }
    }

    useEffect(() => {
        getCustomers();
    }, [])

    return (
    <>
        <section>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="projectName">Project</label>
                        <input required type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="customers">Customers</label>
                        <select name="customers" id='customers' defaultValue={customerId} onChange={(e) => setCustomerId(e.target.value)}>
                            <option disabled hidden value="0">Choice</option>
                            { customer.map(customer => (<option key={customer.id} value={customer.id}>{customer.customerName}</option>)) }
                        </select>
                    </div>
                    <button className='btn btn-one' type='submit'>+ Create Project</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default CreateProjectForm