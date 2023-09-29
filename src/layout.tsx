import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import NavBar from './components/navbar'
import GamesPage from './pages/games'
import NotFoundPage from './pages/404'

const Routes = createBrowserRouter([
            {
                path: '/',
                element: (
                    <>
                        <NavBar />
                        <GamesPage />
                    </>
                ),
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
)

export default function App() {
    return <RouterProvider router={Routes} />
}
