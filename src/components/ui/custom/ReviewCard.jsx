import { cn } from "../../../lib/utils";

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-42 w-44  md:w-full cursor-pointer overflow-hidden rounded-xl border p-2"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm sm:text-base md:text-lg font-medium">{name}</figcaption>
          <p className="text-xs sm:text-sm md:text-base font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm sm:text-base md:text-lg">{body}</blockquote>
    </figure>  );
};

export default ReviewCard;
