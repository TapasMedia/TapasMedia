import { cn } from "../../../lib/utils";

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-42 w-44 md:w-full cursor-pointer overflow-hidden rounded-xl border p-2 bg-[#242424] border-gray-600"
      )}
    >
      <div className="flex flex-row items-center gap-2 text-gray-300 md:p-2">
        <img
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          alt=""
          src={img}
        />
        <div className="flex flex-col items-start">
          <p className="text-sm sm:text-base font-medium">{name}</p>
          <p className="text-xs sm:text-sm font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-left md:px-4 pb-2 md:pb-4">
        {body}
      </blockquote>
    </figure>
  );
};

export default ReviewCard;
