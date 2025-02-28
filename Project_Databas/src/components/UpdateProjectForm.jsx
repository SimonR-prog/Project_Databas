import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Some parts of code from chatgpt.

const UpdateProjectForm = () => {
  const [project, setProject] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  //Utilize params to get the id from the url. 
  //ParseInt the id as it may be a string when gotten from params.
  const { id } = useParams()
  const projectId = parseInt(id, 10);
  //Bringing in navigate to be able to force the user back to the previous url of /projects. 
  const navigate = useNavigate();

  //Function to get the project, which the user chose, from the url.
  const getProject = async () => {
    const res = await fetch(`https://localhost:7141/api/Projects/${projectId}`);
    const data = await res.json();
    setProject(data.content);
    console.log(data.content);

    //Setting the data into relevant placeholders.
    setDescription(`${data.content.description}`)
    setProjectName(`${data.content.projectName}`)
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
        projectName: projectName,
        description: description,
      }
      try {
        const response = await fetch('https://localhost:7141/api/Projects/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(formData)
        })
        console.log(response)
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
              <textarea required name="description" id="description" value={description} placeholder={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </div>
          </form>
          <button className='btn btn-two' type='submit' >Update Project</button>
          <button className='btn btn-three' onClick={() => handleDelete()}>Remove Project {id}</button>
        </div>
      </section>
    </>
  );
};

export default UpdateProjectForm


//Add the rest of the project info like the company name and email. 