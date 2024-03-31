import { createBrowserRouter } from 'react-router-dom';
import App from '../app';
import HomePage from '../pages/home/home_page';
import Cardapio from '../pages/cardapio/cardapio';

const RouterConfig = createBrowserRouter([
    {
        path: '/', element: <App />, children: [
            { path: '/', element: <HomePage /> },
            { path: '/cardapio', element: <Cardapio /> },

        ]
    },
]);


export default RouterConfig;

