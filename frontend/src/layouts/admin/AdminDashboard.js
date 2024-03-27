import React from 'react'
import Card from 'react-bootstrap/Card';


export const AdminDashboard = () => {
    return (
        <>
            <Card style={{ width: '18rem', height: '20%' }} className="mt-5 mx-auto bg-dark text-white">
                <Card.Header>Companies</Card.Header>
                <Card.Body>
                    <Card.Title> 21 </Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '20%' }} className="mt-5 mx-auto bg-dark text-white">
                <Card.Header>Users</Card.Header>
                <Card.Body>
                    <Card.Title> 256 </Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '20%' }} className="mt-5 mx-auto bg-dark text-white">
                <Card.Header>Jobs</Card.Header>
                <Card.Body>
                    <Card.Title> 534 </Card.Title>
                    {/* <Card.Text>
              534
            </Card.Text> */}
                </Card.Body>
            </Card>

        </>
    )
}