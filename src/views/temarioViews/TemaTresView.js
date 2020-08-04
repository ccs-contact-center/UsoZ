import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la Z</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12">
              <p>
                Se escriben con Z las terminaciones <b>zuela</b>, <b>zuelo</b>
                , que denotan disminución o desprecio.
                <br />
                <span className="pAmarillo">Ejemplos</span>: mujer<b>z</b>uela,
                ladron<b>z</b>uelo, porte<b>z</b>uela, joven<b>z</b>uelo.
              </p>
              <p>
                Se escriben con Z las palabras terminadas en <i>izo</i>,{" "}
                <i>iza</i>.
              </p>
              <p>
                ¿Sabrías ya distinguir a partir de ahora las palabras que se
                escriben con Z de forma correcta y no con C o S?
              </p>
              <h3 className="text-center">
                <b>REALIZAREMOS UNA ACTIVIDAD</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaDosView;
