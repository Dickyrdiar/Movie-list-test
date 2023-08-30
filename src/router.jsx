import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailMovie from "./screen/DetailMovie"
import MovieList from "./screen/movieList"

const AppIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie-detail/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppIndex