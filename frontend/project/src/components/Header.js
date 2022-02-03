import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

function Header({ name, title }) {
  return (
    <div>
      <Card className="my-2 bg-warning">
        <CardTitle className="text-center">
          <h1 className="text-center my-4">
            Welcome To Course Management Application
          </h1>
        </CardTitle>
      </Card>
    </div>
  );
}

export default Header;
