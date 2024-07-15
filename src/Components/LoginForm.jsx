import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsEnvelope, BsLock } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminLoginForm = () => {
  return (
    <Container className="container-form login">
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col
          md={5}
          className="information"
          style={{
            backgroundColor: "#c7eef3",
            borderRadius: "20px",
            height: "500px",
          }}
        >
          <div className="text-center p-4">
            <h2>Bienvenido Administrador</h2>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" // Reemplaza con el URL de tu logotipo
              alt="Logo"
              height="400"
              className="d-inline-block align-top"
              
            />
            <p>Por favor, inicia sesión con tu cuenta de administrador</p>
          </div>
        </Col>
        <Col md={7} className="form-information">
          <Card
            className="p-4 shadow"
            style={{
              borderRadius: "20px",
              backgroundColor: "#f8f8f8",
              height: "500px",
            }}
          >
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <Form className="form-login">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  <BsEnvelope className="mr-2" />
                  Correo Electrónico
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  <BsLock className="mr-2" />
                  Contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </Form.Group>
              <Button
                as={Link}
                to="/Dashboard/Inicio"
                variant="primary"
                className="btn-block mt-4"
              >
                Iniciar Sesión
              </Button>
              <div
                className="alerta-error mt-3"
                style={{
                  backgroundColor: "#F66060",
                  color: "#fff",
                  padding: ".5rem 1rem",
                  borderRadius: "7px",
                  display: "none",
                }}
              >
                Todos los campos son obligatorios
              </div>
              <div
                className="alerta-exito mt-3"
                style={{
                  backgroundColor: "#0ca828",
                  color: "#fff",
                  padding: ".5rem 1rem",
                  borderRadius: "7px",
                  display: "none",
                }}
              >
                Inicio de sesión exitoso
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLoginForm;
