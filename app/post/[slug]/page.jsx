import React from "react";
import Markdown from "react-markdown";
import fs from "fs";
import matter from "gray-matter";
const getPostData = (slug) => {
  const folder = "content/post";
  const file = `${folder}/${slug}.md`;
  const fileContent = fs.readFileSync(file, "utf-8");
  return matter(fileContent).content;
  return fileContent.content;
};
const page = (props) => {
  const slug = props.params.slug;
  const postData = getPostData(slug);
  return (
    <div className="p-5 flex justify-center">
      <div>
        <article className="prose laptop:prose-lg">
          <Markdown>{postData}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default page;
