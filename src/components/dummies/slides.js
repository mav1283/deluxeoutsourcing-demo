import {v4} from 'uuid';
const slides = [
    {
      id: v4(),
      media:
        'https://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png',
      message: 'The true sign of intelligence is not knowledge but imagination',
      name: 'Albert Einstein',
      profession: 'Physicist',
    },
    {
      id: v4(),
      media:
        'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg',
      message:
        'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
      name: 'Michael Jordan',
      profession: 'NBA Superstar',
    },
    {
      id: v4(),
      media:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/498px-Beethoven.jpg',
      message:
        'Music should strike fire from the heart of man, and bring tears from the eyes of woman.',
      name: 'Ludwig Van Beethoven',
      profession: 'Composer',
    },
  ];

  export default slides;