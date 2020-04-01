import React, { Component } from 'react'

class FormTable extends Component {

    constructor(){
        super()
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
       
        fetch('https://83433444.ngrok.io/api/courses')
        .then(  response => response.json())
        .then(  res => {
            let courses = res.data.map((course, key) => {
                
                return(
                    <tr key={key}>
                        <td className='text-center'>{ key + 1 }</td>
                        <td>{ course.first_name }</td>
                        <td>{ course.last_name }</td>
                        <td className='text-center'>
                            <button type="button" className="btn btn-warning mr-4">Edit</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                )
            })

            this.setState({ data: courses })
        })

       
    }

    render() {
        return(
            <div className="row my-4">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                    <table className="table table-bordered">
                        <thead className="bg-primary text-light">
                            <tr>
                                <th className="text-center">NO</th>
                                <th className="text-center">FIRST NAME</th>
                                <th className="text-center">LAST NAME</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          { this.state.data }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2">&nbsp;</div>
            </div>
        )
    }
}

export default FormTable