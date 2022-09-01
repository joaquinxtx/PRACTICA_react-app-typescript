import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';


import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/" element={<ShoppingPage/>}  />
                    <Route path="Lazy2"  />
                    <Route path="Lazy3" />
                    
                    <Route path="/*" element={ <Navigate to="/Lazy1" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}