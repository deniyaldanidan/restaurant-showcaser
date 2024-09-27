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
        slided
          ? "self-center laptop-md:self-end tablet-lg:self-end tablet-md:self-center mobile-lg:self-auto"
          : "self-end tablet-lg:self-center mobile-lg:self-auto"
      } tablet-lg:gap-y-4 tablet-md:p-6 mobile:p-4 mobile:rounded-lg mobile-lg:min-w-[350px] mobile-lg:min-h-60`}
      aria-label={`testimonial from ${name}`}
    >
      <RatingStars ratings={rating} />
      <p
        className="text-section-description leading-relaxed"
        aria-label="testimonial"
      >
        {testimonial}
      </p>
      <h5
        className="text-section-description whitespace-nowrap font-semibold"
        aria-label={`by ${name}`}
      >
        {name}
      </h5>
    </div>
  );
}
