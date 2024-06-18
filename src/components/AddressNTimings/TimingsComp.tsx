export default function TimingsComp() {
  return (
    <div className="mt-[70px] bg-sec-bg rounded-xl py-5 px-10">
      <div className="flex justify-between items-center gap-x-14 max-w-[1065px] mx-auto">
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="font-bold text-lg">BreakFast</h3>
          <h4 className="text-lg font-medium">Mon to Sun</h4>
          <p className="uppercase text-lg font-medium">08:00 am to 11:20 am</p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="font-bold text-lg">Lunch</h3>
          <h4 className="text-lg font-medium">Mon to Sun</h4>
          <p className="uppercase text-lg font-medium">12:00 pm to 4:00 pm</p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="font-bold text-lg">Dinner</h3>
          <h4 className="text-lg font-medium">Mon to Sun</h4>
          <p className="uppercase text-lg font-medium">06:30 pm to 10:30 pm</p>
        </div>
      </div>
    </div>
  );
}
