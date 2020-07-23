import { v4 } from "uuid";
const slides = [
  {
    id: v4(),
    media:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png",
    message: "The true sign of intelligence is not knowledge but imagination",
    name: "Albert Einstein",
    profession: "Physicist",
  },
  {
    id: v4(),
    media:
      "https://www.goodreadbiography.com/wp-content/uploads/2019/02/Michael-Jordan-Michael-Jeffrey-Jordan-Michael-Jordan-Biography-Michael-Jeffrey-Jordan-Biography-and-Profile-Famous-Basketball-Player-Sports-USA-460x270.jpg",
    message:
      "Never say never, because limits, like fears, are often just an illusion.",
    name: "Michael Jordan",
    profession: "NBA Superstar",
  },
  {
    id: v4(),
    media:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/498px-Beethoven.jpg",
    message:
      "Music should strike fire from the heart of man, and bring tears from the eyes of woman.",
    name: "Ludwig Van Beethoven",
    profession: "Composer",
  },
];

export default slides;
