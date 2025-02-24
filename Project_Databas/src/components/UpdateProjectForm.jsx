import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Some parts of code from chatgpt.

const UpdateProjectForm = () => {
  //Utilize params to get the id from the url. 
  const { id } = useParams()
  //Bringing in navigate to be able to force the user back to the previous url of /projects. 
  const navigate = useNavigate();

  const handleDelete = async () => {
    //HandleDelete will first parseInt the id as it may be a string when gotten from params.
    try {
      const projectId = parseInt(id, 10);

      //HandleDelete is async so that we can use await to send the id to the delete api.
      const res = await fetch(`https://localhost:7141/api/Projects/${projectId}`, {
        method: 'DELETE',
      });

      //If the result of the fetch is 200 (ok) then the navigate will send the user back to the list of projects view, or it will log errors.
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

  //Button with two classes. Uses a pointer function to make sure it only runs when clicked. 


  //--------Need to add a form with the current data from the project inserted already and be able to edit them. 
  return (
    <>
      <section>
        <div className="container">
          <h3>hej</h3>
          <button className='btn btn-three' onClick={() => handleDelete()}>Remove Project { id }</button>
        </div>
      </section>
    </>
  );
};

export default UpdateProjectForm