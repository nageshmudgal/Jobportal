import axios from "axios";
import {host} from '../../components/host';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import Mycards from "./mycards";


const Displaycompanies = () => {
  const [companies, setCompanies] = useState([]);
  const companiesData = async () => {
    const data = await axios.get(`${host}/api/v1/admin/displayemployers`);
    setCompanies(data.data.data);
    console.log(data)
  }
  useEffect(() => {
    companiesData();
  }, []);

  const changestatus = async (id, stat) => {
    var url = `${host}/api/v1/admin/employerstatusupdate/`
    url = url + id
    if (stat === "Active") {
      const data = await axios.put(url, { status: "Inactive" });
      console.log("Inactive")
      companiesData();
    }
    else {
      const data = await axios.put(url, { status: "Active" });
      console.log("Active")
      companiesData();
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
    <h1>Companies</h1>
    <center>
      <Table striped bordered hover variant="dark" style={tableStyle}>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            companies.map((d, i) => {
              return <tr>
                <td>{i + 1}</td>
                <td>{d.company}</td>
                <td>{d.email}</td>
                <td style={{ color: d.status === "Active" ? `green` : `orange` }}>{d.status}</td>
                <td>
                  <Button variant="primary" onClick={() => { changestatus(d._id, d.status) }} size="sm">ChangeStatus</Button></td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </center>
  </div>;
}

export default Displaycompanies;