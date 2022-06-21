function validar()
        {
            var nombre = document.formulario.txt_nombre.value
            var apellidos = document.formulario.txt_apellidos.value
            var telefono = document.formulario.int_telefono.value
            var gmail = document.formulario.txt_gmail.value
            var calle = document.formulario.txt_calle.value
            var numero = document.formulario.int_numero.value

            if (nombre.length <3)
            {
                alert("El Nombre debe tener al menos 3 caracteres")
                document.formulario.txt_nombre.focus()
                return false
            }
            if (apellidos.length <3)
            {
                alert("Su apellido(s) debe contener al menos 3 caracteres")
                document.formulario.txt_apellidos.focus()
                return false
            }
            if (telefono.substring(0,3)!="+56" || telefono.length <12 || telefono.length >12)
            {
                alert("El teléfono debe comenzar con +56 y además contener 9 números")
                document.formulario.int_telefono.focus()
                return false
            }
            if (gmail.indexOf('@')<0 || gmail.indexOf('.')<0 || gmail.length <3)
            {
                alert("El correo debe poseer al menos 3 caracteres un '@' y un punto ")
                document.formulario.txt_gmail.focus()
                return false
            }
            if (calle.length <4)
            {
                alert("El nombre de la calle debe tener al menos 4 caracteres")
                document.formulario.txt_calle.focus()
                return false
            }
            if (numero.length <3)
            {
                alert("El Numero de su Calle debe tener al menos 3 caracteres")
                document.formulario.int_numero.focus()
                return false
            }
            if (document.getElementById("aceptocondiciones_chk").checked==false)
            {
                alert("Debe aceptar los terminos y servicios para completar esta acción")
                document.getElementById("<strong>aceptocondiciones_chk</strong>").focus()
                return false
                {
                    return true
                }
            }
            }