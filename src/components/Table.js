import React from "react";


function Table(props) {
    console.log(props.data);
    return (
        <table>
            <tr>
                <th>Photo</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            {props.data.map((employee) =>
            <tr>
                <td><img src={employee.picture}></img></td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
            </tr>
            )}

        </table>
    );
}

export default Table;



