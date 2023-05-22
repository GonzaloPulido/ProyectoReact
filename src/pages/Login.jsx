import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { UserContext, useUserContext } from '../context/UserContext'

const Login = () => {
    const {user, setUser} = useUserContext()
    const [noLoged, setNoLoged] = useState(false)
    const [loged, setLoged] = useState([])
    const localStorageId = "logedUser"
    const {register,handleSubmit,formState:{errors}} = useForm({mode : "onChange"})
    const navigate = useNavigate()
    const datos = JSON.parse(localStorage.getItem("usuariosRegistrados"))
    

    const onSubmit = (e) => {
        
        const datosLogin = {
            email: e.email,
            contraseña: e.contraseña
        }
        setNoLoged(false)
        datos.map( dato => {
            
            if(datosLogin.email === dato.email && datosLogin.contraseña === dato.contraseña){
                setLoged(dato)
                loged.push(dato)
                window.localStorage.setItem(localStorageId, JSON.stringify(loged))
                setUser(true)
                navigate("/perfil")
            }
            
        })

        setNoLoged(true)
      }

  return (
    <div>
      <main>
    <section>
        <h1 className="titulo">Iniciar sesion</h1>
        {noLoged && (
            <div className="registro-exitoso">
                <p>Credenciales incorrectas</p>
            </div>
            )}
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