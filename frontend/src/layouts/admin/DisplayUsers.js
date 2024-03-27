import axios from "axios";
import {host} from '../../components/host';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import Mycards from "./mycards";


const Displayusers = () => {
  const [users, setUsers] = useState([]);
  const userData = async () => {
    const data = await axios.get(`${host}/api/v1/admin/displayusers`);
    setUsers(data.data.data);
    console.log(data)
  }
  useEffect(() => {
    userData();
  }, []);

  const changestatus = async (id, stat) => {
    var url = `${host}/api/v1/admin/userstatusupdate/`
    url = url + id
    if (stat === "Active") {
      const data = await axios.put(url, { status: "Inactive" });
      console.log("Inactive")
      userData();
    }
    else {
      const data = await axios.put(url, { status: "Active" });
      console.log("Activate")
      userData();
    }


  }
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '170%',
    borderRadius: '18px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };



  return <div className="mx-5 my-5">
    <h1>Users</h1>
    <center>
      <Table striped bordered hover variant="dark" style={tableStyle} >
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((d, i) => {
              return <tr>
                <td>{i + 1}</td>
                <td>{d.userName}</td>
                <td>{d.userEmail}</td>
                <td style={{ color: d.status === "Active" ? `green` : `orange` }}>{d.status}</td>
                <td>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>

                  <Button variant="primary" onClick={() => { changestatus(d._id, d.status) }} size="sm">ChangeStatus</Button>
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </center>
  </div>;
}

export default Displayusers;