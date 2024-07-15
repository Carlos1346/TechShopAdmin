import React, { useState } from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    stock: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  return (
    <Card className="mt-4">
      <Card.Header>
        <Card.Title>Agregar Producto</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row} controlId="formProductName">
            <Form.Label column sm={2}>
              Nombre del producto
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Ingresa el nombre del producto"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formProductDescription">
            <Form.Label column sm={2}>
              Descripción
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Ingresa la descripción del producto"
                rows={3}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formProductPrice">
            <Form.Label column sm={2}>
              Precio
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Ingresa el precio del producto"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formProductCategory">
            <Form.Label column sm={2}>
              Categoría
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una categoría</option>
                <option value="computadora_armada">Computadora Armada</option>
                <option value="procesador">Procesador</option>
                <option value="tarjeta_madre">Tarjeta Madre</option>
                <option value="memoria_ram">Memoria RAM</option>
                <option value="disco_duro">Disco Duro</option>
                <option value="tarjeta_grafica">Tarjeta Gráfica</option>
                <option value="fuente_poder">Fuente de Poder</option>
                <option value="gabinete">Gabinete</option>
                <option value="periferico">Periférico</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formProductBrand">
            <Form.Label column sm={2}>
              Marca
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                placeholder="Ingresa la marca del producto"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formProductStock">
            <Form.Label column sm={2}>
              Stock
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Ingresa la cantidad en stock"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formProductImage">
            <Form.Label column sm={2}>
              Imagen del producto
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
                required
              />
            </Col>
          </Form.Group>

          <Button
            as={Link}
            to="/Dashboard/Altas/Productos"
            variant="primary"
            type="submit"
            className="mt-3"
          >
            Agregar Producto
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProductForm;
