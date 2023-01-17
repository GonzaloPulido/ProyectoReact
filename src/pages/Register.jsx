import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <main>
    <section>
        <h1 className="titulo">Registrarse</h1>
        <article className="registro_padre">
            <form className="registro">
                <label for="nombre_usuario">Nombre de usuario *
                    <input type="text" id="nombre_usuario" name="nombre_usuario" required/>
                </label>
                <label for="nombre">Nombre *
                    <input type="text" id="nombre" name="nombre" required/>
                </label>
                <label for="apellidos">Apellidos *
                    <input type="text" id="apellidos" name="apellidos" required/>
                </label>
                <label for="correo">Correo electronico *
                    <input type="text" id="correo" name="correo" required/>
                </label>
                <label for="contraseña">Contraseña *
                    <input type="password" id="contraseña" name="contraseña" required/>
                </label>
                <label for="repetir_contraseña">Repetir contraseña *
                    <input type="text" id="repetir_contraseña" name="repetir_contraseña" required/>
                </label>
                <NavLink to="/login" className="enlace_registro">¿Ya tienes cuenta?,inicia sesión</NavLink>
                <label for="registrarse">
                    <input type="submit" value="Registrarse" id="registrarse" className="boton_registro"/>
                </label>
            </form>
        </article>
    </section>
</main>
    </div>
  )
}

export default Register