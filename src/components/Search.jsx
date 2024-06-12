import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
const Search = () => {
    const [data, setData] = useState(
        {
            "courseTitle": ""
        }
    )

    const [result, setResult] = useState([])


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/search", data).then(
            (response) => { setResult(response.data) }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()

    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">CourseTitle</label>
                                <input type="text" className="form-control" name='courseTitle' value={data.courseTitle} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-info" onClick={readValue}>Search</button>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">courseTitle</th>
                                                <th scope="col">description</th>
                                                <th scope="col">date</th>
                                                <th scope="col">duration</th>
                                                <th scope="col">venue</th>
                                                <th scope="col">trainerName</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            result.map(
                                                    (value,index)=>{
                                                        return  <tr>
                                                        <th>{value.courseTitle}</th>
                                                        <td>{value.description}</td>
                                                        <td>{value.date}</td>
                                                        <td>{value.duration}</td>
                                                        <td>{value.venue}</td>
                                                        <td>{value.trainerName}</td>
                                                        <td><button className="btn btn-danger">DELETE</button></td>
                                                    </tr>
                                                }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Search
