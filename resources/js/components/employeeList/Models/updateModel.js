import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';


class UpdateModel extends Component {


    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null
        };
    }


    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value
        })
    }

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value
        })
    }

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null
        }

        //Updating Data From Input

        if (current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)) {
            return null;
        }
        if (current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)) {
            return null;
        }


        if (current_state.employeeName !== props.employeeData.currentEmployeeName || current_state.employeeName === props.employeeData.currentEmployeeName) {
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }

        if (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary || current_state.employeeSalary === props.employeeData.currentEmployeeSalary) {
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    //Update Employee Data
    
    updateEmployeeData = () => {
            axios.post('/update/employee/data',{
                employeeId:this.props.modelId,
                employeeName:this.state.employeeName,
                employeeSalary:this.state.employeeSalary,
            }).then(()=>{
                toast.success('Employee Updated Successfully');
                setTimeout(()=>{
                    location.reload();
                },2500);
                //console.log(response);
               
            });
    }

    render() {
        return (

            <div className="modal fade" id={"updateModel" + this.props.modelId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                            <div className="form-group">
                                <input type="text"
                                    id="employeeName"
                                    className="form-control mb-3"
                                    value={this.state.employeeName ?? ""}
                                    onChange={this.inputEmployeeName}
                                />
                                </div>
                                 <div className="form-group">
                                <input type="text"
                                    id="employeeSalary"
                                    className="form-control mb-3"
                                    value={this.state.employeeSalary ?? ""}
                                    onChange={this.inputEmployeeSalary}
                                />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">

                            <input type="submit" className='btn btn-info' id="save" value="Update" onClick={this.updateEmployeeData} />
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default UpdateModel;