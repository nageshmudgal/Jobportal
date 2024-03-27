import axios from 'axios';
import {host} from '../../components/host';

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';


const ViewUserProfile = () => {
    const [userProfile,setUserProfile] = useState([]);
    const { id } = useParams();
    const getuserprofile = async () => {
        var url = `${host}/api/v1/employer/userprofile/`
        url = url+id
        const result = await axios.get(url)
        console.log(result.data.data)
        setUserProfile(result.data.data)
        console.log(userProfile[0]);
    }

    const Apply = ()=>{

    }

    useEffect(()=>{
        getuserprofile();
    },[]);
  return (<>
    <div>UserProfile</div>
    {
        userProfile[0]?<Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{userProfile[0].userid.userName}</Card.Title>
                    
                    <Card.Subtitle className="mb-2 text-muted">Mobile:{userProfile[0].userid.skill}</Card.Subtitle>
                    <Card.Text>
                    Skills:{userProfile[0].skill}
                    <br></br>
                    Experience:{userProfile[0].experience}
                        status:{userProfile[0].status}
                    </Card.Text>
                    
                    <Button variant="primary" onClick={() => { Apply(userProfile[0]._id) }} size="sm">Accept</Button>
                    <Button variant="primary" onClick={() => { Apply(userProfile[0]._id) }} size="sm">Reject</Button>

                    </Card.Body>
                    </Card>:<div></div>
    }
    
    </>
  )
}

export default ViewUserProfile