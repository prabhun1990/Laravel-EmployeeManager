<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Employee;

class EmployeesController extends Controller
{
    // Get Employee List from Database
    public function getEmployeeList(){
        try{
            $employees=Employee::orderBy('id','DESC')->get();

            return response()->json($employees);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    public function getEmployeeDetails(Request $request){
        try{
            $employeeData=Employee::findOrFail($request->get('employeeId'));

            return response()->json($employeeData);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    
    public function updateEmployeeData(Request $request){
        try{
            //dd($request->all());
            $employeeName=$request->get('employeeName');
            $employeeId=$request->get('employeeId');
            $employeeSalary=$request->get('employeeSalary');
            $employeeData=Employee::where('id',$employeeId)->update([
                'employee_name'=>$employeeName,
                'salary'=>$employeeSalary
            ]);

            return response()->json([
                'employee_name'=>$employeeName,
                'salary'=>$employeeSalary
            ]);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    // Deleting Employee
    public function destory(Employee $employee){
        try{
            $employee->delete();
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    //Storing Employee Data
     public function store(Request $request)
    {
        try{
            $employeeName=$request->get('employeeName');
            $employeeSalary=$request->get('employeeSalary');

            Employee::create([
                'employee_name'    =>  $employeeName,
                'salary'           =>  $employeeSalary
            ]);
           
        }
        catch(Exception $e){
            Log::error($e);
        }
    }
}
