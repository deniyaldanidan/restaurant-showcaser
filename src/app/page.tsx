import AddressNTimings from "@/components/AddressNTimings/AddressNTimings";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <div className="py-10 px-page-margin-x">
        <span>Hello World, Welcome to Home </span>
        <button className="btn-primary">Book a Table</button>
        <button className="btn-secondary">Book a Table</button>
      </div>
      <CTASection />
      <AddressNTimings />
    </>
  );
}
