import React from "react";
import { deleteUserAction, updateUserAction } from "redux/actions/UserAction";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UsersList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allUsers = useSelector((state) => state.users.allUsers);

  const handleUserDelete = (id) => {
    // let updatedUsers = allUsers.map((x) => x.id != id);
    dispatch(deleteUserAction(id));
  };

  const handleUserUpdate = (id) => {
    const editUser = allUsers.filter((x) => x.id == id);
    // debugger;
    dispatch(updateUserAction(editUser[0]));
    history.push("/admin/newuser");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <button
                className="btn btn-lg  btn-danger btnClass"
                onClick={() => history.push("/admin/newuser")}
              >
                Add New User
              </button>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>

                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.map((x, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {x.firstName} {x.lastName}
                          </td>

                          <td>{x.country}</td>
                          <td>{x.city}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-success"
                              onClick={() => handleUserUpdate(x.id)}
                            >
                              Edit
                            </button>{" "}
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleUserDelete(x.id)}
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UsersList;
