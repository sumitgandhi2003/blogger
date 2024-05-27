import Search from "./Search";
import Button from "./Button";
import BlogList from "./BlogList";
import matter from "gray-matter";
import fs from "fs";
import Link from "next/link";
import React from "react";

const getPostMetadata = () => {
  const folder = "content/post";
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith(".md"));
  const metaData = markdownPost.map((file) => {
    const fileContents = fs.readFileSync(`content/post/${file}`, "utf8");
    const metaData = matter(fileContents);
    // console.log(metaData.);
    return {
      title: metaData?.data?.title,
      date: metaData?.data?.date,
      author: metaData?.data?.author,
      image: metaData?.data?.image,
      slug: file.replace(".md", ""),
    };
  });
  return metaData;

  // const slug = markdownPost.map((file) => file.replace(".md", ""));
  // return markdownPost;
};

const HomePage = () => {
  // const [postMetaData, setPostMetaData] = useState();
  const posts = getPostMetadata();
  return (
    <div>
      <div className=" search-section flex w-full justify-center gap-3">
        <Search
          placeholder="Search keywords"
          classname="p-4 outline-0 border border-black rounded-full"
        />

        <Button
          classname="p-4 border border-black rounded-full"
          text="Search"
        />
      </div>
      <div className="recent-blogs">
        <div className="flex flex-wrap gap-6 justify-start small-device:justify-center">
          {posts.map((post) => (
            <BlogList post={post} key={post?.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
