import axios from 'axios';
import React, { Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableRow from './TableRow';
import CreateModel from './Models/createModel';

class Table extends Component{

    // Get Employee List

    constructor(props){
        super(props);
        this.state={
            emnployees:[],
        };
    }

    // Life cycle method

    componentDidMount(){
        this.getEmployeeList();
    }

    getEmployeeList=()=>{
        let self=this;
        axios.get('/get/employee/list').then(function(response){
                console.log(response.data);
                self.setState({
                    emnployees:response.data
                });
        });
    }

    render(){
        return (
            <div className="container">
                <ToastContainer/>
                <CreateModel/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col" width="100px">#</th>
                                        <th scope="col" width="100px">Name</th>
                                        <th scope="col" width="100px">Salary</th>
                                        <th scope="col" width="100px">Actions</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.emnployees.map(function(x,i){
                                        return <TableRow key={i} data={x}/>
                                    })}
                                    
                                </tbody>
                            </table>
    
                        </div>
    
                    </div>
                </div>
            </div>
        );
    };
}


export default Table;