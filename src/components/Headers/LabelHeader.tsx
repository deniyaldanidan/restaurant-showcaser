import { cinzel_decorative_bold } from "@/lib/fonts";

export default function LabelHeader() {
  return (
    <header className="px-page-margin-x py-5 bg-sec-bg">
      <h1
        className={`${cinzel_decorative_bold.className} flex flex-col gap-y-1 items-center`}
      >
        <span className="text-logo text-center">Odel Digest</span>
        <span className="text-logo text-center">Restaurant</span>
      </h1>
    </header>
  );
}
