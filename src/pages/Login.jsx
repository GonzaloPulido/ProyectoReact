import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Login = () => {
    const [loged, setLoged] = useState([])
    const localStorageId = "logedUser"
    const {register,handleSubmit,formState:{errors}} = useForm()
    const navigate = useNavigate()
    const datos = JSON.parse(localStorage.getItem("usuariosRegistrados"))
    console.log(datos)

    const onSubmit = (e) => {
        const datosLogin = {
            email: e.email,
            contraseña: e.contraseña
        }

        datos.map( dato => {
            if(datosLogin.email === dato.email && datosLogin.contraseña === dato.contraseña){
                setLoged(datos)
                loged.push(datos)
                window.localStorage.setItem(localStorageId, JSON.stringify(loged))
                console.log(loged)
                navigate("/perfil")
            }
            
        })
        
      }

  return (
    <div>
      <main>
    <section>
        <h1 className="titulo">Iniciar sesion</h1>
        <article className="inicio_sesion_padre">
            <form className="inicio_sesion" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nombre_correo">Correo Electronico
                <input type="text" 
                id="nombre_correo" 
                name="nombre_correo" 
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
                {errors.email && <span className="error">{errors.email.message}</span>}  
                </label>
                <label htmlFor="contraseña">Contraseña
                    <input type="password" 
                    id="contraseña" 
                    name="contraseña"
                    {...register("contraseña",{
                        required: {
                            value:true,
                            message: "Es necesario rellenar el campo"
                        },
                        minLength: {
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres"
                        },
                        pattern:{
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%]).{8,24}$/,
                            message: " La contraseña debe incluir almenos una maysucula, una minuscula, un numero y un caracter especial"
                        }
                    })}/>
                    {errors.contraseña && <span className="error">{errors.contraseña.message}</span>}
                </label>
                <label htmlFor="recuerdame" className="recordar">Recuerdame
                    <input type="checkbox"id="recuerdame" name="recuerdame" className="input_recordar"/>
                </label>
                <a className="enlaces_inicio_sesion">¿Has olvidado tu contraseña?</a><br/>
                <NavLink to="/register" className="enlaces_inicio_sesion">¿No tienes cuenta?, registrate</NavLink>
                <label htmlFor="acceder">
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