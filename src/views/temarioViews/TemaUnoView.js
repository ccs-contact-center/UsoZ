import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la Z</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: "0px" }}
              >
                <b>Reglas ortográficas de la Z</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  Se escriben con Z las palabras terminadas en <i>anza</i>/o y 
                  <i>azgo</i>. 
                </li>
                <li>
                  <span className="pRojo">Excepciones</span>: <b>gansa</b>/
                  <b>o</b>, <b>mansa</b>/<b>o</b>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: adivinan<b>z</b>
                  a, mudan<b>z</b>a, pan<b>z</b>a, halla<b>z</b>go, dan<b>z</b>
                  a, alaban<b>z</b>a, almiranta<b>z</b>go.
                </li>
                <li className="mt-3">
                  Se escriben con Z, las terminaciones <i> ez</i>, <i>eza</i>,{" "}
                  <i> az</i>, <i> oz</i>, de los nombres abstractos.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: belle<b>z</b>a,
                  vora<b>z</b>, pere<b>z</b>a, fuga<b>z</b>, rigide<b>z</b>,
                  atro<b>z</b>, palide<b>z</b>, pa<b>z</b>.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaUnoView;
