import * as Yup from 'yup';
import {Formik,Form } from 'formik';
import { MySelectInput , MyCheckbox, MytextInput} from '../components';


import '../styles/styles.css';


export const FormikAbstraction = () => {

   

  return (
    <div>
        <h1>Formik Abtraction </h1>

        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                jobType:'',
                terms:false,
            }}
            onSubmit={(values)=>{
                console.log(values);
                
            }}
            validationSchema={
                Yup.object({
                    firstName:Yup.string()  
                                .max(15,'Debe tener 15 caracteres')
                                .required('Requerido'),
        
                    lastName:Yup.string()  
                                .max(15,'Debe tener 10 caracteres')
                                .required('Requerido'),
        
                    email:Yup.string()  
                                .email('El Email no tiene un formato valido')
                                .required('Requerido'),
                    jobType:Yup.string()
                                .notOneOf(['it-senior'],'Esta opcion no es permitida')  
                                .required('Requerido'),
                    terms:Yup.boolean()  
                                .oneOf([true], 'Debe de aceptar las condiciones')
                                

                })}
        >
            { (formik)=>(
                <Form  noValidate >
                    <MytextInput 
                    label='First Name'
                    name='firstName'
                    />                
                    <MytextInput 
                    label='Last Name'
                    name='lastName'/>

                    <MytextInput 
                    label='Email'
                    name='email'
                    type='email'/>

                    <MySelectInput label='jobType' name='jobType'>

                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT Senior</option>

                    </MySelectInput>

                    <MyCheckbox label={'Terms & conditions'} name={'terms'}/>

                    <button type='submit'>Enviar</button>
                    
                </Form>
                )
            }

        </Formik>
     
    </div>
  )
}
