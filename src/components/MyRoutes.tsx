import { useRoutes } from "react-router-dom"
import Home from "../pages/home"
import Tickets from "../pages/tickets"
import Events from "../pages/events"

const MyRoutes = () => {
    return useRoutes([
        {
            path: '',
            element: <Home/>
        },
        {
            path: 'tickets',
            element: <Tickets/>
        },
        {
            path: 'events',
            element: <Events/>
        },
        {
            path: '*',
            element: <h1>Page not found</h1>
        }
    ])
}

export default MyRoutes;