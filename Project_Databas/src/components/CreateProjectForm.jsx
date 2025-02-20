import React from 'react'

const CreateProjectForm = () => {
    

    return (
    <>
        <section>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="projectName">Project</label>
                        <input type="text" id="projectName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id='description'></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="customers">Customers</label>
                        <select name="customers" id='customers'></select>
                    </div>
                    <button type='submit'>Create</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default CreateProjectForm