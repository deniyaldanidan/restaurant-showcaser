import styles from "@/styles/dots-animation.module.css";

export default function LoadingInfo() {
  return (
    <section className="min-h-screen h-fit w-full flex flex-col items-center justify-center gap-y-6">
      <div className="relative">
        <div className={styles["dots-flow"]}></div>
      </div>
      <p className="text-xl text-center text-high-text font-medium">
        Loading please wait..
      </p>
    </section>
  );
}
