import React, { useState } from 'react'
import varita from "../img/varita_harry.png"
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

const Contactanos = () => {
    const navigate = useNavigate()
    const [mensaje, setMensaje] = useState([])
    const localStorageId = "mensajeContactanos"
    const {register,handleSubmit,watch,formState:{errors}} = useForm()

    const onSubmit = (e) => {

        const datosContacto = {
            nombre: e.nombre,
            email: e.email,
            mensaje: e.mensaje
        }

        setMensaje(JSON.parse(window.localStorage.getItem(localStorageId)))
        mensaje.push(datosContacto)
        window.localStorage.setItem(localStorageId, JSON.stringify(mensaje))

        navigate("/")
    
}

  return (
    <div>
        <main>
    <section>
        <h1 className="titulo">Contactanos</h1>
        <article className="contactos_padre">
            <div className="elemento_contactos">
                <ul className="lista_info">
                    <li><i className="fas fa-phone-volume"></i>691 28 01 24</li>
                    <li><i className="fas fa-envelope"></i>harrypotter@gmail.com</li>
                    <li><i className="fas fa-map-marker-alt"></i>Calle Angosto 99,23500</li>
                </ul>
                <p className="titulo_redes">Redes sociales</p>
                <ul className="lista_iconos_contacto">
                    <li className="redes"><i className="fab fa-facebook-f"></i></li>
                    <li className="redes"><i className="fab fa-twitter"></i></li>
                    <li className="redes"><i className="fab fa-instagram"></i></li>
                </ul>
            </div>
            <img src={varita} className="varita_contacto" alt="Imagen de la varita de Harry Potter"/>
            <form className="form_contactos" onSubmit={handleSubmit(onSubmit)}>
                <label for="nombre_completo">Nombre completo
                    <input type="text" id="nombre_completo" name="nombre_completo"
                    {...register("nombre",{
                        required: {
                            value:true,
                            message: "Es necesario rellenar el campo"
                        },
                        pattern: {
                            value: /^[A-z]{3,20}$/,
                            message: "Formato incorrecto"
                        }
                    })}/>
                    
                </label>
                {errors.nombre && <span className="error" width="20%">{errors.nombre.message}</span>}
                <label for="correo_electronico">Correo electronico
                    <input type="email" id="correo_electronico" name="correo_electronico"
                    {...register("email",{
                        required: {
                            value:true,
                            message: "Es necesario rellenar el campo"
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Formato incorrecto"
                        }
                    })}/>
                    
                </label>
                {errors.email && <span className="error">{errors.email.message}</span>}  
                <label for="mensaje">Mensaje
                    <textarea id="mensaje" rows="5" cols="20" name="mensaje"
                    {...register("mensaje",{
                        required: {
                            value:true,
                            message: "Es necesario rellenar el campo"
                        },minLength:{
                            value: 20,
                            message: "Debes agregar almenos 20 caracteres"
                        },maxLength:{
                            value: 200,
                            message: "Has superado los 200 caracteres disponibles"
                        }

                    })}
                    />
                     
                </label>
                {errors.mensaje && <span className="error">{errors.mensaje.message}</span>} 
                <label for="enviar">
                    <input type="submit"  value="Enviar" id="enviar" onClick={handleSubmit(onSubmit)}/>
                </label>
            </form>
        </article>
    </section>
</main>
    </div>
  )
}

export default Contactanos