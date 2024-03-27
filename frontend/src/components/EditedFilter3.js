import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {host} from './host';

const ShowJobs2 = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    company: [],
    mode: []
  });
  const [searchQuery, setSearchQuery] = useState({
    title: ''
  });

  const fetchJobsData = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/guest/jobs`);
      setJobs(response.data.data);
      setFilteredJobs(response.data.data);
    } catch (error) {
      console.error("Error fetching jobs data:", error);
    }
  };

  const fetchCompaniesData = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/admin/displayemployers`);
      setCompanies(response.data.data);
    } catch (error) {
      console.error("Error fetching companies data:", error);
    }
  };

  useEffect(() => {
    fetchJobsData();
    fetchCompaniesData();
  }, []);

  const filterJobs = () => {
    let filtered = jobs;

    // Apply company filter
    if (selectedFilters.company.length > 0) {
      filtered = filtered.filter(job => selectedFilters.company.includes(job.empid._id));
    }

    // Apply mode filter
    if (selectedFilters.mode.length > 0) {
      filtered = filtered.filter(job => selectedFilters.mode.includes(job.mode));
    }

    // Apply search filters
    if (searchQuery.title) {
      filtered = filtered.filter(job => job.title.toLowerCase().includes(searchQuery.title.toLowerCase()));
    }
    if (searchQuery.company) {
      filtered = filtered.filter(job => job.empid.company.toLowerCase().includes(searchQuery.company.toLowerCase()));
    }

    setFilteredJobs(filtered);
  };

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      const index = updatedFilters[filterType].indexOf(value);
      if (index === -1) {
        updatedFilters[filterType].push(value);
      } else {
        updatedFilters[filterType].splice(index, 1);
      }
      return updatedFilters;
    });
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(prevQuery => ({ ...prevQuery, ['title']: value }));
  };

  const clearFilters = () => {
    setSelectedFilters({ company: [], mode: [] });
    setSearchQuery({title: ''});
  };

  useEffect(() => {
    filterJobs();
  }, [selectedFilters, searchQuery]); // Re-run the filterJobs function whenever selectedFilters or searchQuery change

  return (
    <div className='mx-5'>
      <div className='mt-5 text-center'><h1>Jobs</h1></div>

      <Row xs={1} md={4} className="g-4">
        <Col xs={5} md={3}>
          <Card>
            <Card.Body>
              <Card.Title className='mb-4'>Filter</Card.Title>

              <Form className="d-flex mb-3">
                <Form.Control
                  type="search"
                  placeholder="Search by Title"
                  value={searchQuery.title}
                  onChange={(e) => handleSearchChange(e)}
                  className="me-2"
                  aria-label="Search"
                />
              </Form>

              

              <DropdownButton id="dropdown-item-button" title="Company" className='my-3'>
                {companies.map(company => (
                  <Form.Check
                    key={company._id}
                    type="checkbox"
                    label={company.company}
                    onChange={() => toggleFilter('company', company._id)}
                    checked={selectedFilters.company.includes(company._id)}
                  />
                ))}
              </DropdownButton>

              <DropdownButton id="dropdown-item-button" title="Mode" className='my-3'>
                <Form.Check
                  type="checkbox"
                  label="Work From Office"
                  onChange={() => toggleFilter('mode', 'WFO')}
                  checked={selectedFilters.mode.includes('WFO')}
                />
                <Form.Check
                  type="checkbox"
                  label="Work From Home"
                  onChange={() => toggleFilter('mode', 'WFH')}
                  checked={selectedFilters.mode.includes('WFH')}
                />
              </DropdownButton>

              {/* Other filters go here */}


                <div className="text-center mt-4">
                                <Button variant="danger" onClick={clearFilters}>Clear Filters</Button>
                            </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={13} md={9}>
          <Row>
            {filteredJobs.map(job => (
              <Col key={job._id}>
                <Card style={{ width: '18rem' }} border="info">
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{job.empid.company}</Card.Subtitle>
                    <Card.Text>
                      Salary: {job.salary}
                    </Card.Text>
                    <Card.Link href="../user/login">Apply</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ShowJobs2;
