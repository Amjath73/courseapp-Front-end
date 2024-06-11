import axios from 'axios'
import React, { useState } from 'react'

const AddCourse = () => {
    const [data, changeData] = useState(
        {
            "courseTitle": "",
            "description": "",
            "date": "",
            "duration": "",
            "venue": "",
            "trainerName": ""
        }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status = "success")
                {
                    alert("ADDED")
                }
            else
                {
                    alert("ERROR")
                }
        }
    ).catch(
        (error)=>{
            console.log(error)
            alert(error.message)
        }
    )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">CourseTitle</label>
                                <input type="text" className="form-control" name='courseTitle' value={data.courseTitle} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date</label>
                                <input type="text" className="form-control" name='date' value={data.date} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Venue</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">TrainerName</label>
                                <input type="text" className="form-control" name='trainerName' value={data.trainerName} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readvalue} >Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse
