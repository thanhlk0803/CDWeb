import React from "react";
// dùng chính
import {
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  
  Card,
  Button,
} from "reactstrap";

// phần import trang
import Header from "../component/Header";

function OrderFood() {
  // Declare a new state variable, which we'll call "count"

  return (
    // container
    <>
      {/* header */}
      <div>
        <Header></Header>
      </div>
      {/* content */}
      <div style={{ paddingTop: 20, marginLeft: 950 }}>
        <Card
          style={{
            width: "18rem",
            left: "300px",
          }}
        >
          <img alt="Card" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is some text within a card body.</CardText>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>A second item</ListGroupItem>
            <ListGroupItem>And a third item</ListGroupItem>
          </ListGroup>
          <CardBody>
            <Button
           color="danger"
           style={{ marginLeft: 70}}>
              Tiếp tục 
            </Button>{' '}
          </CardBody>
        </Card>
      </div>
    </>
  );
}
export default OrderFood;
