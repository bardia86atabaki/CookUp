import React from "react";
import CommentBox2 from "../Components/CommentBox2";

function Community() {
  const comments = [
    {
      commandtext:
        "I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.",
      userName: "Lady Rudy",
      userImage: "path/to/userImage1.png",
      rating: 5,
      likes: 2,
    },
    {
      commandtext:
        "I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow.",
      userName: "Emily Rose",
      userImage: "path/to/userImage2.png",
      rating: 4,
      likes: 5,
    },
    {
      commandtext:
        "I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations.",
      userName: "Susan H",
      userImage: "path/to/userImage3.png",
      rating: 5,
      likes: 3,
    },
    {
      commandtext:
        "I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.",
      userName: "Lilek Laura",
      userImage: "path/to/userImage4.png",
      rating: 5,
      likes: 1,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold justify-center flex mt-20">From Our Community</h1>
      <div className="grid grid-cols-2 gap-44 p-8">
        <div className="flex flex-col">
          {comments.slice(0, 2).map((comment, index) => (
            <CommentBox2
              key={index}
              commandtext={comment.commandtext}
              userName={comment.userName}
              userImage={comment.userImage}
              rating={comment.rating}
              likes={comment.likes}
            />
          ))}
        </div>
        <div className="flex  flex-col">
          {comments.slice(2).map((comment, index) => (
            <CommentBox2
              key={index + 2}
              commandtext={comment.commandtext}
              userName={comment.userName}
              userImage={comment.userImage}
              rating={comment.rating}
              likes={comment.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;
