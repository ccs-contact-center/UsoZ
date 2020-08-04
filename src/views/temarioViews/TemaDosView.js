import React, { Component } from "react";
import { CardBody, Col, Row, CardHeader } from "reactstrap";

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la Z</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Se escriben con Z las terminaciones <i>azo</i>, <i>aza</i> que
                  denotan aumento, golpe.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: mana<b>z</b>a,
                  carra<b>z</b>o, oja<b>z</b>os, coda<b>z</b>o, puerta<b>z</b>o,
                  mujera<b>z</b>a.
                </li>
                <li className="mt-3">
                  Se escriben con Z las terminaciones <b>iz</b>, <b>ez</b>,{" "}
                  <b>oz</b>, <b>az</b>, de los nombres patronímicos.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: Rodrígue<b>z</b>, Rui<b>z</b>,
                  Sánche<b>z</b>, Muño<b>z</b>, Ramíre<b>z</b>, Orti<b>z</b>, Villala<b>z</b>.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaDosView;
