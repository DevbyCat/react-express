import React,{Component} from 'react'
import FormTable from './FormsTable'

class Forms extends Component {

    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: ""
        }

        this.handleForms = this.handleForms.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleForms(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        fetch('https://83433444.ngrok.io/api/courses', options)
        .then(response => response.json())
        .then(data => data.status === "success" ? alert('Inserted account') : alert('Can\'t insert account '))
    }

    render() {
        return(
            <div>
                <div className="row mt-4">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="form-group">
                                <label>First Name</label>
                                <input className="form-control" type="text" name="first_name" id="first_name" placeholder="First Name" onChange={ this.handleForms } value={ this.state.first_name } />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input className="form-control" type="text" name="last_name" id="last_name" placeholder="Last Name" onChange={ this.handleForms } value={ this.state.last_name } />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Add account</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>

                <FormTable />
            </div>
        )
    }
}


export default Forms