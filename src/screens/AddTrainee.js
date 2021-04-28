import { Form, Container, Button } from "react-bootstrap";

const AddTrainee = () => {
  return (
    <Container>
      <Form>
        <Form.Control placeholder="enter a name"></Form.Control>
        <Form.Control placeholder="enter destination"></Form.Control>
        <Form.Control placeholder="enter email "></Form.Control>
        <Form.Control placeholder="enter dob "></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
};

export default AddTrainee;
