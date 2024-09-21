// import "./App.css";
// import Header from "./Components/Header";
// import MovieCard from "./Components/MovieCard";
// import Sidebar from "./Components/SideBar";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { PopularUrl , baseImgUrl} from "./utils/api";
// import Pagination from "./Components/Pagination";

// function App() {
//   const [popularData, setPopularData] = useState("");

//   useEffect(() => {
//     const getDataPopular = async () => {
//       try {
//         const res = await axios.get(PopularUrl);
//         setPopularData(res.data.results);
//         setTotalPages(res.data.total_pages)
//       } catch (error) {
//         console.error(`this error is ${error}`);
//       }
//     };

//     getDataPopular();
//   }, []);
//   console.log( "totalPages",totalPages);


//   return (
//     <div className="App">
//       <Header />

//       {/*  container */}
//       <div className="container">
//         {/* card container */}
//         <div className="cards-container">
//           {popularData.length > 0 ? (
//             popularData.map((item)=>(
//               <MovieCard
//               id={item.id}
//               title={item.original_title}
//               // image="https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
//               image ={`${baseImgUrl}${item.poster_path}`}
//               rating={item.vote_average}
//               quality="HD"
//             />
//             ))
//           ) : (
//             <h3>ther's no data here </h3>
//           )}
//         </div>

//         {/* genre container */}
//         <div className="genre-container">
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import Header from "./Components/Header";
import MovieCard from "./Components/MovieCard";
import Sidebar from "./Components/SideBar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiKey, PopularUrl , baseImgUrl} from "./utils/api";
import Pagination from "./Components/Pagination";

function App() {
  const [popularData, setPopularData] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  
  useEffect(() => {
    const getDataPopular = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}&api_key=${apiKey}`);
        setPopularData(res.data.results);
        setTotalPages(res.data.total_pages)
      } catch (error) {
        console.error(`this error is ${error}`);
      }
    };

    getDataPopular();
  }, [currentPage]);
  
  console.log(popularData);
  
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };


  return (
    <div className="App">
      <Header />

      {/*  container */}
      <div className="container">
        {/* card container */}
        <div className="cards-container">
          {popularData.length > 0 ? (
            popularData.map((item)=>(
              <MovieCard
              id={item.id}
              title={item.original_title}
              // image="https://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
              image ={`${baseImgUrl}${item.poster_path}`}
              rating={item.vote_average}
              quality="HD"
            />
            ))
          ) : (
            <h3>ther's no data here </h3>
          )}
          <Pagination count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            className="pagination-contain"/>
        </div>

        {/* genre container */}
        <div className="genre-container">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
