import Image from "next/image";
import matter from "gray-matter";
import Search from "@/components/Search";
import Button from "@/components/Button";
import fs from "fs";
import BlogList from "@/components/BlogList";
import Link from "next/link";
import { title } from "process";
import HomePage from "@/components/HomePage";
// const getPostMetadata = () => {
//   const folder = "content/post";
//   const files = fs.readdirSync(folder);
//   const markdownPost = files.filter((file) => file.endsWith(".md"));
//   const metaData = markdownPost.map((file) => {
//     const fileContents = fs.readFileSync(`content/post/${file}`, "utf8");
//     const metaData = matter(fileContents);
//     // console.log(metaData.);
//     return {
//       title: metaData?.data?.title,
//       date: metaData?.data?.date,
//       author: metaData?.data?.author,
//       image: metaData?.data?.image,
//       slug: file.replace(".md", ""),
//     };
//   });
//   return metaData;

//   // const slug = markdownPost.map((file) => file.replace(".md", ""));
//   // return markdownPost;
// };

export default function Home() {
  // const posts = getPostMetadata();
  return (
    <main className=" p-5">
      <HomePage />
      {/* <div className=" search-section flex w-full justify-center gap-3">
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
      </div> */}
    </main>
  );
}
