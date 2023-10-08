import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

export default function App() {
  return (
    <div className="w-[100vw] min-h-[100vh]">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}
