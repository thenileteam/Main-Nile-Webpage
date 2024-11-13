
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, HomeNav, AboutUs, FeaturesPage,ContactPage,Error } from "./pages";

const router = createBrowserRouter([
{
  path:'/',
    element: <HomeNav />,
  errorElement:<Error/>,
  children:[
    {
      index:true,
      element:<HomePage/>
    },
    {
      path:'AboutUs',
      element:<AboutUs/>
    },
    {
      path:'FeaturesPage',
      element:<FeaturesPage/>
    },
    {
      path: 'ContactPage',
      element:<ContactPage/>
    }
  ]
}
])
const App = () => {
  return (
      <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;