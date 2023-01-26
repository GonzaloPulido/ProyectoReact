import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Register = () => {
    const [users, setUsers] = useState([])
    const localStorageId = "usuariosRegistrados"
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = (e) => {
        const datosLogin = {
            nombre: e.nombre,
            apellidos: e.apellidos,
            email: e.email,
            contraseña: e.contraseña,
            repcontraseña: e.repcontraseña

            
        }
        setUsers(JSON.parse(window.localStorage.getItem(localStorageId)))
        users.push(datosLogin)
        window.localStorage.setItem(localStorageId, JSON.stringify(users))
        console.log(users)
      
    }
    const checkPass = (e) =>{
        return e.target.id.contraseña.value === e.target.id.repetir_contraseña.value
    }



  return (
    <div>
      <main>
    <section>
        <h1 className="titulo">Registrarse</h1>
        <article className="registro_padre">
            <form className="registro" onSubmit={handleSubmit(onSubmit)}>
                <label for="nombre">Nombre *
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
                
                <label for="apellidos">Apellidos *
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
                
                <label for="correo">Correo electronico *
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
                <label for="contraseña">Contraseña *
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
                <label for="repetir_contraseña">Repetir contraseña *
                    <input type="password" 
                    id="repetir_contraseña" 
                    name="repetir_contraseña"
                    {...register("repetir_contraseña",{
                        required: {
                            value:true,
                            message: "Es necesario rellenar el campo"
                        },
                        validate: {
                            value: checkPass,
                            message: "Las contraseñas no coinciden"
                        }
                          
                    })}/>
                    {errors.repetir_contraseña && <span className="error">{errors.repetir_contraseña.message}</span>}
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