
import * as Yup from 'yup';
import {Formik,Form } from 'formik';
import {MytextInput} from '../components';
import '../styles/styles.css'



export const RegisterFormikPage = () => {
    
  return (
    
    <div>
        <h1>Register Formik tarea</h1>
        <Formik
        initialValues={{
            firstName:'',
            email:'',
            password1:'',
            password2:'',
        }}
        onSubmit={(values)=>{
            console.log(values);
            
        }}
        validationSchema={
            Yup.object({
                firstName:Yup.string() 
                            .min(2,'el nombre debe tener 2 o mas caracteres')
                            .max(15,'Debe tener 15 caracteres')
                            .required('Requerido'),
                email:Yup.string()  
                            .email('El Email no tiene un formato valido')
                            .required('Requerido'),
                password1:Yup.string()  
                            .min(6,'La contraseña debe tener 6 caracteres como minimo')
                            .required('Requerido'),
                password2:Yup.string()
                            .oneOf([Yup.ref('password1')],'Las contraseñas no son iguales')  
                            .required('Requerido'),
               
            })}>
                { ({handleReset})=>(
                <Form  noValidate >
                    <MytextInput 
                    label='nombre'
                    name='firstName'
                    />                
                    <MytextInput 
                    label='Email'
                    name='email'
                    type='email'/>
                    
                    <MytextInput 
                    label='Contraseña'
                    name='password1'
                    type='password'/>
                    
                    <MytextInput 
                    label='Repetir contraseña'
                    name='password2'
                    type='password'/>

                    

                    <button type='submit'>Enviar</button>
                    <button onClick={handleReset}>Reset</button>
                    
                </Form>
                )
            }

        </Formik>

    </div>
    
    
        
  )
}
