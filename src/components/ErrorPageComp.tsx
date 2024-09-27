"use client";

type props = {
  clickHandler: () => void;
};

export default function ErrorPageComp({ clickHandler }: props) {
  return (
    <section className="flex flex-col items-center gap-y-5 min-h-screen">
      <h2 className="text-2xl text-center text-danger font-semibold">
        Something went wrong!
      </h2>
      <button className="btn btn-base btn-danger" onClick={clickHandler}>
        Try again
      </button>
    </section>
  );
}
