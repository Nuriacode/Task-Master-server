import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "../styles/Landing.scss";

function Landing() {
  return (
    <main className="mainLanding">
      <section className="mainLanding__content">
        <h3 className="mainLanding__content__title">Iniciar sesión</h3>
        <label className="mainLanding__content__user">
          <i className="fa-solid fa-user"></i>
          Usuario
        </label>
        <label className="mainLanding__content__password"><i className="fa-solid fa-lock"></i>Contraseña</label>
        <label className="mainLanding__content__login">
          <Link className="mainLanding__content__login--text" to="/createtask">
            Entrar
          </Link>
        </label>
        <p className="mainLanding__content__signup">Nuevo por aquí? Regístrate</p>
      </section>
    </main>
  );
}
export default Landing;
