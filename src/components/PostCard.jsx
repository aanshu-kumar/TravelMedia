import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage } from "../redux/slices/userImage";

const PostCard = ({ post }) => {
  const [url, setUrl] = useState("");
  const [more, setMore] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://picsum.photos/200?random=${post.id}`).then((res) => {
      setUrl(res.url);
    });
  }, []);

  return (
    <div className=" w-[23%] bg-white p-4 flex flex-col items-center rounded-2xl">
      <img
        src={url}
        className="w-full h-2/3 object-cover hover:scale-95 duration-300 rounded-lg drop-shadow-lg"
      />
      <div className="w-full my-3">
        <h3 className="text-left font-semibold">{post.title.slice(0, 20)}</h3>
        <div className="w-full flex flex-row items-center gap-2">
          <p className="w-[78%] text-sm text-gray-400">
            { more ?  post.body : post.body.slice(0, 100)}{" "}
            <span className="text-orange-500" onClick={()=>{
              setMore(!more)
              console.log(more)
            }}>see {more? "less" : "more"}...</span>
          </p>
          
          <div
            className=" cursor-pointer w-1/5 hover:bg-orange-300 duration-300 bg-orange-400 p-2 flex justify-center items-center rounded-xl shadow-orange-500 shadow-md"
            onClick={()=>{
              dispatch(setImage(url))
              navigate(`/item/${post.id}`)
            }}
            >
            <svg
              width="40"
              height="40"
              fill="#ffffff"
              viewBox="0 0 512 512"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m150.46 478-20.6-21.5L339.11 256 129.86 55.49 150.46 34l231.68 222z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
