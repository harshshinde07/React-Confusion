import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderComments({ comments }) {
  const cmts = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <div>{comment.comment}</div>
        <div style={{ margin: "1rem" }}>
          -- {comment.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(comment.date))}
        </div>
      </li>
    );
  });
  return cmts;
}

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

const DishDetail = (props) => {
  if (props.dish == null) return <div></div>;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled pl-0">
            <RenderComments comments={props.dish.comments} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
