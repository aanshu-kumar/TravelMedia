import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/slices/postSlice";
import Posts from "./Posts";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts); 
  const [filteredData, setFilteredData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPost()).then(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (posts) setFilteredData(posts);
  }, [posts]);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="w-full">
        <h2 className="text-3xl font-semibold">Social Media for Travellers</h2>
        <div className="w-full flex flex-row bg-white p-2 gap-2 mt-4 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="search here..."
            className="w-full"
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              const filterPost = posts.filter((item) =>
                item.title.toLowerCase().includes(searchTerm)
              );
              setFilteredData(filterPost);
            }}
          />
        </div>
      </div>
      <Posts filteredData={filteredData} loading={loading}/>
    </div>
  );
};

export default Home;
