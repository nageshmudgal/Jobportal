import Card from 'react-bootstrap/Card';
import axios from "axios";

function CompanyCard(props) {
    const getComp = async (ar) => {
        console.log(ar)
        // const url = "http://127.0.0.1:8000/api/v1/employer/"
        // url = url+ar
        // const result = await axios.get(url)
        // console.log("comp name is",result.data.data.name)
        }
        
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.Links.company}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link href="#">View Details</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CompanyCard;