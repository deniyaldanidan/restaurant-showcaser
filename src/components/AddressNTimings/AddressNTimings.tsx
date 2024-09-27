import AddressComp from "./AddressComp";
import TimingsComp from "./TimingsComp";

export default function AddressNTimings() {
  return (
    <section
      className="px-page-margin-x py-section-pad-y"
      aria-label="Address, contact-info and timings of Odel digest restaurant"
    >
      <AddressComp />
      <TimingsComp />
    </section>
  );
}
