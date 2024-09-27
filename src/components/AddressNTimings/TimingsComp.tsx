export default function TimingsComp() {
  return (
    <div
      className="mt-section-pad-y bg-sec-bg rounded-xl py-5 px-10 tablet-lg:px-6"
      role="group"
      aria-label="Our timings"
    >
      <div className="flex justify-between items-center gap-x-14 max-w-[1065px] mx-auto tablet-lg:gap-x-10 tablet-md:flex-wrap tablet-md:justify-around tablet-md:gap-10">
        <TimingShowComp
          period="BreakFast"
          days="Mon to Sun"
          timing="08:00 am to 11:20 am"
        />
        <TimingShowComp
          period="Lunch"
          days="Mon to Sun"
          timing="12:00 pm to 04:00 pm"
        />
        <TimingShowComp
          period="Dinner"
          days="Mon to Sun"
          timing="06:30 pm to 10:30 pm"
        />
      </div>
    </div>
  );
}

function TimingShowComp(props: {
  period: string;
  days: string;
  timing: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-y-3 tablet-lg:gap-y-2.5"
      role="group"
      aria-label={`${props.period} timings`}
    >
      <h3 className="font-bold text-lg text-center text-nowrap tablet-lg:text-base">
        {props.period}
      </h3>
      <h4 className="text-lg font-medium text-center text-nowrap tablet-lg:text-base">
        {props.days}
      </h4>
      <p className="uppercase text-lg font-medium text-center text-nowrap tablet-lg:text-base">
        {props.timing}
      </p>
    </div>
  );
}
