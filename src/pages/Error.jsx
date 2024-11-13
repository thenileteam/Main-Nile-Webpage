import { useRouteError, Link } from "react-router-dom"
const Error = () => {
    const error = useRouteError()
    console.log(error);
    if (error.status === 404) {
        return (
            <main className="grid min-h-screen place-items-center px-8">
                <div className="text-center">
                <p className="mt-4 text-9xl font-bold text-primary  ">404</p>
                <h1 className="text-4xl font-bold  tracking-tight ">page not found</h1>
                <p className="mt-6  leading-7 text-lg">Sorry we couldn't find the page you are looking for..</p>
                <button type='button' className="mt-10">
                    <Link to='/' className="bg-primary p-2 text-pry2 rounded-lg hover:bg-myCustomColor-light transitions">Back to home</Link>
                </button>
                </div>
            </main>
        )
    }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
    <h4 className="text-center font-bold text-red-800">There was an error..</h4>
     
</main>
  )
}

export default Error