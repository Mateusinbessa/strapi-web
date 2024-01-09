import { Routes, Route } from "react-router-dom"
import SiteHeader from "./components/SiteHeader"
import HomePage from "./pages/HomePage"
import ReviewDetails from "./pages/ReviewDetails"
import Category from "./pages/Category"

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<ReviewDetails />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </div>
  )
}

export default App
