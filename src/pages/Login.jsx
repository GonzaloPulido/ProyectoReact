import React from 'react'
import { NavLink } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
const Login = () => {
    const validate = values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
          alert(errors.firstName)
        }
        return errors;
      }



  return (
    <div>
      <main>
    <section>
        <h1 className="titulo">Iniciar sesion</h1>
        <article className="inicio_sesion_padre">
            <form className="inicio_sesion">
                <label for="nombre_correo">Nombre de usuario o email
                <Formik
                    initialValues={{ firstName: '' }}
                    validate={validate}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                    }, 400);
                        }}>
                    <input type="text" id="nombre_correo" name="nombre_correo" required/>
                    </Formik>
                </label>
                <label for="contraseña">Contraseña
                    <input type="text" id="contraseña" name="contraseña" required/>
                </label>
                <label for="recuerdame" className="recordar">Recuerdame
                    <input type="checkbox"id="recuerdame" name="recuerdame" className="input_recordar"/>
                </label>
                <a className="enlaces_inicio_sesion">¿Has olvidado tu contraseña?</a><br/>
                <NavLink to="/register" className="enlaces_inicio_sesion">¿No tienes cuenta?, registrate</NavLink>
                <label for="acceder">
                    <input type="submit"  value="Acceder" id="acceder" className="boton_inicio_sesion"/>
                </label>
            </form>
        </article>
    </section>
</main>
    </div>
  )
}

export default Login