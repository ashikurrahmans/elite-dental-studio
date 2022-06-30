import React from "react";
import Disqus from "disqus-react";

const DisqusComment = () => {
  const disqusShortname = "your-site-shortname";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "Leave a Reply",
    title: "Title of Your Article",
  };

  return (
    <div className="article-container">
      <h1 className="font-bold text-2xl">Leave a Reply</h1>

      <p className="mt-20">Featured Comment</p>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
};

export default DisqusComment;
