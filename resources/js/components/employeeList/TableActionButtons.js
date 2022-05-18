import React, { Component } from 'react';
import axios from 'axios';
import ViewModel from './Models/ViewModel';
import UpdateModel from './Models/updateModel';
import DeleteModel from './Models/deleteModel';


class TableActionButtons extends Component {


    constructor(props) {
        super(props);
        this.state={
            currentEmployeeName:null,
            currentEmployeeSalary:null
        };

    }

    
    getEmployeeDetails=(id)=>{
        let self=this;
        axios.post('/get/individual/employee/details',{
            employeeId:id
        }).then(function(response){
            console.log(response);
            self.setState({
                currentEmployeeName:response.data.employee_name,
                currentEmployeeSalary:response.data.salary
            });
    });
    }

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">

                <button type="button" className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target={ "#viewModel"+this.props.eachRowId}
                onClick={()=>{this.getEmployeeDetails(this.props.eachRowId)}}>
                    View
                </button>
                <ViewModel modelId={this.props.eachRowId} employeeData={this.state}/>

                <button type="button" 
                className="btn btn-info"
                data-bs-toggle="modal" 
                data-bs-target={ "#updateModel"+this.props.eachRowId}
                onClick={()=>{this.getEmployeeDetails(this.props.eachRowId)}}>
                    Update
                </button>

                <UpdateModel modelId={this.props.eachRowId} employeeData={this.state}/>


                <button type="button" 
                className="btn btn-danger"
                data-bs-toggle="modal" 
                data-bs-target={ "#deleteModel"+this.props.eachRowId}
                onClick={()=>{this.getEmployeeDetails(this.props.eachRowId)}}>
                    Delete
                </button>
                <DeleteModel modelId={this.props.eachRowId} employeeData={this.state}/>
              
            </div>
        );
    }
}


export default TableActionButtons;