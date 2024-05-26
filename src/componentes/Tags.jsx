import Badge from 'react-bootstrap/Badge';

const Tags = ({colorButton, textButton}) =>{
    return (
        <Badge bg={colorButton} className="col-md-12 mx-auto">{textButton}</Badge>
    )
}
export default Tags;