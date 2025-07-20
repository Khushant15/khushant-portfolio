import React from "react";
import IconCloud from "./ui/icon-cloud";
const iconSlugs = [
  "python",
  "java",
  "cplusplus",
  "javascript",
  "html5",
  "css3",
  "sql",
  "json",
  "nodedotjs",
  "mongodb",
  "firebase",
  "redux",
  "postman",
  "react",
  "vercel",
  "git",
  "github",
  "androidstudio",
  "linux",
  "figma",
  "canva",
  "dsa",
  "leetcode",
];


const IconCloudDemo = () => {
  return (
    <div className="relative flex w-full max-w-3xl items-center justify-center rounded-lg bg-transparent px-10 py-16 overflow-hidden">
      <IconCloud iconSlugs={iconSlugs} />
    </div>
  );
};

export default IconCloudDemo;
