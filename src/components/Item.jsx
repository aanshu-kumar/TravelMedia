import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Posts from "./Posts";

const Item = () => {
  const posts = useSelector((state) => state.post.posts);
  let img = useSelector((state)=>state.userImage);
  const [active, setActive] = useState("details");
  let { id } = useParams();
  let navigate = useNavigate();
  const post = posts.filter((item) => item.id === Number(id));
  const filteredData = posts.filter((item) => item.id !== Number(id));

  return (
    <div className="w-11/12 mx-auto mt-5">
      <div className="w-full flex gap-5 items-center">
        <div
          className="w-10 p-2 rounded-full bg-white cursor-pointer"
          onClick={() => {
            navigate("/");
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-semibold text-center">Post Number #{id}</h2>
      </div>
      <div className="relative min-h-72 lg:mx-5 mt-5 w-full flex lg:flex-row flex-col gap-10">
        <img
          src={img}
          className="w-full lg:w-1/4 object-cover duration-300 rounded-lg drop-shadow-lg "
        />
        <div className="px-4 absolute top-4 lg:bottom-4 text-wrap w-full lg:w-1/4 text-white flex justify-between">
          <p>
            {post.length > 0
              ? post[0].title.slice(0, 20)
              : "No Title Available"}
          </p>
          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
        <div className="w-full lg:w-[70%] h-40">
          <div className="flex justify-center lg:justify-start">
            <button
              className={`cursor-pointer px-8 py-2 ${
                active === "details"
                  ? "bg-orange-500 text-white rounded-xl shadow-md shadow-orange-500"
                  : "text-black bg-white rounded-xl"
              }`}
              onClick={() => setActive("details")}>
              Details
            </button>
            <button
              className={`cursor-pointer ml-5 px-8 py-2 ${
                active === "user"
                  ? "bg-orange-500 text-white rounded-xl shadow-md shadow-orange-500"
                  : "text-black bg-white rounded-xl"
              }`}
              onClick={() => setActive("user")}>
              User Info
            </button>
          </div>
          {active == "details" ? (
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptatibus asperiores vitae sint? Dignissimos, voluptatum beatae. Quo laborum, possimus saepe accusantium quis assumenda, deleniti nemo eligendi similique repellendus architecto blanditiis.
              Culpa sed suscipit perspiciatis facere sequi cumque excepturi. Cumque veritatis est culpa tempora fuga et autem voluptate iure. Et vel ea consectetur magnam, animi illum dolorum quam in adipisci quasi.
              nobis expedita ducimus illo doloribus quos. Voluptatem impedit beatae quisquam nam minus minima aut consequuntur veritatis?
            </p>
          ) : (
            ""
          )}
          {active == "user" ? (
            <p className="mt-10">Post was posted by {post[0].userId}.</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <p className="text-3xl mt-60 lg:mt-10 mb-5 ml-5 font-bold">More Posts</p>
      <Posts filteredData={filteredData} loading={false} />
    </div>
  );
};

export default Item;
