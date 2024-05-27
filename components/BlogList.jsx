import React from "react";
import Link from "next/link";

const BlogList = ({ post }) => {
  const { title, author, date, slug, image } = post;
  return (
    <div className=" w-1/5 [200px]:w-full h-[300px] p-3 border-black border m-3 rounded-lg relative mobile:w-full small-device:w-1/2 tablet:w-1/4  ">
      <img
        src={image}
        className="aspect-square h-3/4 w-full object-fill rounded-lg"
        alt=""
      />
      <div className="flex justify-between gap-2 my-2 items-center">
        <Link
          href={`/post/${post?.slug}`}
          className="font-bold w-3/4 text-blue-800 hover:underline"
        >
          <p className=" ">{slug.replaceAll("-", " ")}</p>
        </Link>
        <p className="text-xs w-fit absolute bottom-0 right-0 p-2 text-right font-semibold">
          -{author}
        </p>
      </div>
    </div>
  );
};

export default BlogList;
