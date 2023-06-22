import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./utility/RootLayout";
import Movies from "./Pages/Movies";
import MoviesDetails, {loader as movieDetailsLoader} from "./Components/MoviesDetails";
import MoviesList, {loader as moviesLoader}  from "./Components/MoviesList";
import MoviesOtherDetails from "./Components/MovieOtherDetails";
import MovieOther from "./Components/MovieOther";
import MyList from "./Pages/MyList";
import TvShowList, {loader as databaner} from "./Components/TvShowList";
import TvShowsDetails from "./Components/TvShowsDetails";
import TvShows from "./Pages/TvShows";
import SingUp from "./Pages/SingUp";
import LogIn from "./Pages/LogIn";
import Account from "./Pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const router = createBrowserRouter (createRoutesFromElements(
    
    <Route path="/" element={<RootLayout />}>

   
      <Route path="/movies" element={
      <ProtectedRoute>
      <Movies />
      </ProtectedRoute>
      }
      >
         <Route index element={<MoviesList />} loader={moviesLoader} />
        <Route path=":id" element={<MoviesDetails />} loader={movieDetailsLoader} /> 
        </Route>
   
     
        <Route path="/moviesOther" element={<MovieOther />} />
        <Route path="/moviesOther/:id" element={<MoviesOtherDetails />} />
  
  

<Route path="/tv-shows" element={<TvShows />}>
<Route index element={
  <ProtectedRoute>
<TvShowList/>
</ProtectedRoute>
} loader={databaner}/>
  <Route path=":id" element={
  <ProtectedRoute>
<TvShowsDetails />
  </ProtectedRoute>
  
  
  
  } />
</Route>
<Route path="/mylist" element={


 <ProtectedRoute>

<MyList />
 </ProtectedRoute>
} />

<Route path="/signup" element={<SingUp />} />
<Route path="/login" element={<LogIn/>} />
<Route path="/account" element={<Account/>} />
</Route>

  
  ))
  

  return (
    <>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
     
    </>
  )
}

export default App