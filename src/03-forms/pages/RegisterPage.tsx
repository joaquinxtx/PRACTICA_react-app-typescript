
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {
    const {formData,onChange,name,password,email,password2,resetForm,isValidEmail}= useForm({
        name:'',
        email:'',
        password:'',
        password2:'',
    })
    

    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(formData);
        
    }

  return (
    <div>
        <h1>Register Page</h1>

        <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="Name"
        name='name'
        value={name} 
        onChange={onChange}
        className={`${name.trim().length <= 0 && 'has-error'}` }/>
        {
            name.trim().length <= 0 && <span>Este Campo es necesario</span>
        }
        <input 
        type="email"
        name='email'
        placeholder="Email"
        value={email}
        onChange={onChange}
        className={`${!isValidEmail(email)&&'has-error'}`}
        />
        {
           !isValidEmail(email)&& <span>Email no es valido </span>
        }
        <input 
        type="password"
        placeholder="Password"
        name='password'
        value={password}
        onChange={onChange} />
        { password.trim().length <= 0 && <span>Este Campo es necesario</span>}
        { password.trim().length < 6 && password.trim().length > 0 && <span>El password debe tener 6 caracteres</span>}
        <input 
        type="password"
        placeholder="Repeat Password"
        name='password2'
        value={password2}
        onChange={onChange} />
        {password2.trim().length <= 0 && <span>Este Campo es necesario</span> }
        {password2.trim().length > 0 && password !== password2 && <span>Las contraseñas deben ser iguales</span> }
        <button type="submit">
            Create
        </button>
        <button type="button" onClick={resetForm}>
            Reset Form
        </button>



        </form>
    </div>
  )
}
