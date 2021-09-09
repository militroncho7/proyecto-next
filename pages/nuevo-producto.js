import React, { useState }  from 'react';
import { css } from '@emotion/react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/UI/Formulario';

import firebase from '../firebase';

//validaciones
import useValidacion from '../hooks/useValidation';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  empresa: '',
  imagen: '',
  url: '',
  descripcion: ''
};

const NuevoProductos = () => {

  const [ error, guardarError ] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, empresa, imagen, url, descripcion } = valores;

  async function crearCuenta() {
    
  };

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Nuevo Producto</h1>

          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >
            <fieldset>
              <legend>Información General</legend>
              <Campo>
                <label htmlFor="nombre">Nombre</label>
                <input 
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>

              { errores.nombre &&  <Error>{errores.nombre}</Error> }
              
              <Campo>
                <label htmlFor="empresa">Empresa</label>
                <input 
                  type="text"
                  id="empresa"
                  placeholder="Nombre de empresa o compañía"
                  name="empresa"
                  value={empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>

              { errores.empresa &&  <Error>{errores.empresa}</Error> }

              <Campo>
                <label htmlFor="imagen">Imagen</label>
                <input 
                  type="file"
                  id="imagen"
                  name="imagen"
                  value={imagen}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>

              { errores.imagen &&  <Error>{errores.imagen}</Error> }

              <Campo>
                <label htmlFor="url">URL</label>
                <input 
                  type="url"
                  id="url"
                  name="url"
                  value={url}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>

              { errores.url &&  <Error>{errores.url}</Error> }
            </fieldset>

            <fieldset>
              <legend>Sobre tu producto</legend>

              <Campo>
                <label htmlFor="descripcion">Descripción</label>
                <textarea 
                  id="descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>

            { errores.descripcion &&  <Error>{errores.descripcion}</Error> }
            </fieldset>

            { error &&  <Error>{error}</Error> }

            <InputSubmit
              type="submit"
              value="Crear Prodcuto"
            />
          </Formulario>

        </>
      </Layout>
    </div>
  );
};
 
export default NuevoProductos;
