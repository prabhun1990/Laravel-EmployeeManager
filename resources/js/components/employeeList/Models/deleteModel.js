import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class DeleteModel extends Component {


    constructor(props) {
        super(props);


    }

    deleteEmployeeData=(employeeId)=>{
        axios.delete('/delete/employee/data/'+employeeId).then(()=>{
            toast.error('Employee Deleted Successfully');
        });
        setTimeout(()=>{
            location.reload();
        },2500);
    }

    render() {
        return (

            <div className="modal fade" id={"deleteModel"+this.props.modelId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           Are you sure want to delete this Employee Data?
                        </div>
                        <div className="modal-footer">
                        <button type="button" 
                        className="btn btn-danger" 
                        onClick={()=>{
                            this.deleteEmployeeData(this.props.modelId);
                        }}
                        data-bs-dismiss="modal">
                            Yes
                            </button>

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default DeleteModel;