import { BrowserRouter, Route, Routes } from "react-router-dom"
import MovieList from "./screen/movieList"

const AppIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie-detail/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default AppIndex