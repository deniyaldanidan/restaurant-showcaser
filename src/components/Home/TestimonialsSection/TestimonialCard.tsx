import RatingStars from "./Ratings";

type props = {
  name: string;
  rating: number;
  testimonial: string;
  slided?: true;
};

export default function TestimonialCard({
  name,
  rating,
  testimonial,
  slided,
}: props) {
  return (
    <div
      className={`bg-high-bg p-[30px] rounded-2xl flex flex-col gap-y-5 h-fit w-full max-w-[450px] ${
        slided ? "-translate-x-1/2" : ""
      }`}
    >
      <RatingStars ratings={rating} />
      <p className="text-lg">{testimonial}</p>
      <h5 className="text-lg whitespace-nowrap font-semibold">{name}</h5>
    </div>
  );
}
