import StarFillIcon from "@/components/icons/StarFillIcon";
import StarHalfFillIcon from "@/components/icons/StarHalfFillIcon";
import StarOutlineIcon from "@/components/icons/StarOutlineIcon";

export default function RatingStars({ ratings }: { ratings: number }) {
  return (
    <div className="flex items-center justify-center gap-x-3 w-fit">
      {[1, 2, 3, 4, 5].map((num) => {
        const star = ratings - num + 1;

        if (star >= 1) {
          return <StarFillIcon key={num} className="text-[28px]" />;
        } else if (star < 1 && !(star <= 0)) {
          return <StarHalfFillIcon key={num} className="text-[28px]" />;
        } else {
          return <StarOutlineIcon key={num} className="text-[28px]" />;
        }
      })}
    </div>
  );
}
