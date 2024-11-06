import React from 'react'
import { cn } from '../lib/utils'
import ReviewCard from './ui/custom/ReviewCard'
import { Marquee } from './ui/marque';

const reviews = [
  {
    name: "Rakesh Ranjan",
    username: "@concepttalk",
    body: "Incredible editing that truly brought my vision to life!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Lalit Jangir",
    username: "@themealstory",
    body: "The final product was both professional and highly engaging. ",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Parag Bhatt",
    username: "@vedology",
    body: "Fast, professional, and delivered exactly what I wanted.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Tathastu",
    username: "@tathastu",
    body: "Creative, efficient, and high-quality editing throughout.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Manish Chauhan",
    username: "@themonkfilms",
    body: "Quick turnaround with top-notch, professional results!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Satwik Gupta",
    username: "@satwikbanarasiya",
    body: "Amazing attention to detail and flawless execution.",
    img: "https://avatar.vercel.sh/john",
  },
  // {
  //   name: "John",
  //   username: "@john",
  //   body: "A brilliant storyteller who transformed my footage beautifully.",
  //   img: "https://avatar.vercel.sh/john",
  // },
  // {
  //   name: "John",
  //   username: "@john",
  //   body: "Worth every penny for such high-quality work!",
  //   img: "https://avatar.vercel.sh/john",
  // },
  // {
  //   name: "John",
  //   username: "@john",
  //   body: "Superb editing that made my video truly engaging and memorable.",
  //   img: "https://avatar.vercel.sh/john",
  // },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);



const SparkOfSatisfaction = () => {
  return (
    <div
      className={cn(
        "text-center flex flex-col justify-center items-center pt-10 overflow-y-auto bg-white w-screen text-black"
      )}
    >
      <h2 className="text-7xl font-bold text-gray-800 container">
        Spark of Satisfaction
      </h2>
      <p className="text-lg text-gray-600 mt-2 container">
        We are committed to delivering the best quality service to our clients.
        We believe in the power of video to transform your brand and we are
        dedicated to helping you achieve your goals.
      </p>
      <br />
      <div className="container">
        <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:10s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:15s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          
        </div>
      </div>
    </div>
  );
}

export default SparkOfSatisfaction