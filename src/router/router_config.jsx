import { createBrowserRouter } from 'react-router-dom';
import App from '../app';
import HomePage from '../pages/home/home_page';
import Cardapio from '../pages/cardapio/cardapio';
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ProductCards from '../pages/cart/cart';
import Contato from '../pages/contato/contato';

const RouterConfig = createBrowserRouter([
    {
        path: '/', element: <App />, children: [
            { path: '/', element: <HomePage /> },
            { path: '/cardapio', element: <Cardapio /> },
            { path: '/login', element: <Login/> },
            { path: '/register', element: <Register/> },
            {path: '/carrinho', element: <ProductCards/>},
            { path: '/contato', element:<Contato/> },
            { path: '*', element: <h1>404 - Página não encontrada</h1>}
        ]
    },
]);


export default RouterConfig;

