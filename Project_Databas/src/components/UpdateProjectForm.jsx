import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Some parts of code from chatgpt.

const UpdateProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [customerId, setCustomerId] = useState("0");

  //Utilize params to get the id from the url. 
  //ParseInt the id as it may be a string when gotten from params.
  const {id} = useParams()
  const projectId = parseInt(id, 10);

  //Using navigate to be able to force the user back to url /projects. 
  const navigate = useNavigate();

  //Function to get the project, which the user chose, from the url.
  const getProject = async () => {
    const res = await fetch(`https://localhost:7141/api/Projects/${projectId}`);
    const data = await res.json();
    
    console.log(data.content);

    //Setting the data into relevant placeholders.
    setDescription(`${data.content.description}`)
    setProjectName(`${data.content.projectName}`)
    setCustomerId(`${data.content.customer.id}`)
  }

  const handleDelete = async () => {
    try {
      const res = await fetch(`https://localhost:7141/api/Projects/${projectId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        console.log(`Project ${projectId} deleted successfully`);
        navigate("/Projects");
      } else {
        console.error("Failed to delete project:", res.status);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
  
  //Handleupdate to update the existing data. 
  const handleUpdate = async (e) => {
    e.preventDefault()
      const formData = {
        id: parseInt(id),
        projectName: projectName,
        description: description,
        customerId: parseInt(customerId)
      }
      console.log(formData)
      try {
        const response = await fetch('https://localhost:7141/api/Projects/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(formData)
        })
        if (response.ok) {
          console.log("Project updated successfully");
          navigate("/Projects");
          console.log(response)
        } else {
          console.error("Failed to update project:", response.status);
        }
      } catch (error) {
        console.error("Error updating project:", error);
      }
  } 

  //Use effect which will run once to get the current project. 
  useEffect(() => {
    getProject();
  }, [])

  return (
    <>
      <section>
        <div className="container">
          <h3>{projectId}</h3>
          <form onSubmit={handleUpdate} >
            <div className="form-group">
              <label htmlFor='projectName'>Project</label>
              <input required type='text' id='projectName' value={projectName} placeholder={projectName} onChange={(e) => setProjectName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor='description'>Description</label>
              <textarea name="description" id="description" value={description} placeholder={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </div>
          <button className='btn btn-two' type='submit' >Update Project</button>
          </form>
          <button className='btn btn-three' onClick={() => handleDelete()}>Remove Project {id}</button>
        </div>
      </section>
    </>
  );
};

export default UpdateProjectForm


//Add the rest of the project info like the company name and email. 