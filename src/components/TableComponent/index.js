import React from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableComponent = (props) => {
    return (
        <div>

            <Table responsive>
                <thead>
                
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Workig Hours</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                
                </thead>
                <tbody>
                {        
                        props.UsersList?.data.map((user) => {
                            let id = user.id;
                            return (
                                <tr key={user.id}>
                                   
                                    <th scope="row">{user.id}</th>
                                    <td>{user.firstName + ' ' + user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.roles[0].name}</td>
                                    <td>{user.working_hours}</td>
                                    <td><button className="btn-primary" onClick={(e) => { props.onUpdate(e, id) }}>Update</button></td>
                                    <td><button className="btn-danger" onClick={(e) => { props.onDelete(e, id) }}>Delete</button></td>
                                    {
                                        props.role === 'admin' ? (
                                            <td><Link to ={{pathname: `/user-logs/${id}`}}> View Details</Link></td>
                                        ) : null
                                    }
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default TableComponent;
