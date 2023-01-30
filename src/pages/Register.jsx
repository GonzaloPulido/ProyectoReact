import React, { useState,useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Register = () => {
    const [users, setUsers] = useState([])
    /* const [contraseña,setContraseña] = useState("")
    const [repcontraseña,setRepcontraseña] = useState("") */
    const localStorageId = "usuariosRegistrados"
    const {register,handleSubmit,watch,formState:{errors}} = useForm()


    const password = useRef({});
    password.current = watch("contraseña", "");

    const onSubmit = (e) => {

            const datosLogin = {
                nombre: e.nombre,
                apellidos: e.apellidos,
                email: e.email,
                contraseña: e.contraseña,
                repcontraseña: e.repetir_contraseña

            }

            setUsers(JSON.parse(window.localStorage.getItem(localStorageId)))
            users.push(datosLogin)
            window.localStorage.setItem(localStorageId, JSON.stringify(users))
            console.log(users)
        
    }
    



  return (
    <div>
      <main>
    <section>
        <h1 className="titulo">Registrarse</h1>
        <article className="registro_padre">
            <form className="registro" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nombre">Nombre *
                    <input type="text" 
                    id="nombre" 
                    name="nombre"
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
                {errors.nombre && <span className="error">{errors.nombre.message}</span>}
                </label>
                
                <label htmlFor="apellidos">Apellidos *
                    <input type="text" 
                    id="apellidos" 
                    name="apellidos"
                    {...register("apellidos",{
                        required: {
                            value:true,
                            message: "Es necesario rellenar el campo"
                        },
                        pattern: {
                            value: /^[A-z]{3,20}\s[A-z]{3,20}$/,
                            message: "Formato incorrecto"
                        }
                    })}/>
                {errors.apellidos && <span className="error">{errors.apellidos.message}</span>}
                </label>
                
                <label htmlFor="correo">Correo electronico *
                    <input type="text" 
                    id="correo" 
                    name="correo"
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
                <label htmlFor="contraseña">Contraseña *
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
                    })} />
                {errors.contraseña && <span className="error">{errors.contraseña.message}</span>}    
                </label>
                <label htmlFor="repetir_contraseña">Repetir contraseña *
                    <input type="password" 
                    id="repetir_contraseña" 
                    name="repetir_contraseña"
                    {...register("repetir_contraseña",{
                        validate: value =>
                          value === password.current || "Las contraseñas no coinciden",
                        
                          
                    })}/>
                    {errors.repetir_contraseña && <span className="error">{errors.repetir_contraseña.message}</span>}
                </label>
                <NavLink to="/login" className="enlace_registro">¿Ya tienes cuenta?,inicia sesión</NavLink>
                <label htmlFor="registrarse">
                    <input onClick={handleSubmit(onSubmit)} type="submit" value="Registrarse" id="registrarse" className="boton_registro"/>
                </label>
            </form>
        </article>
    </section>
</main>
    </div>
  )
}

export default Register