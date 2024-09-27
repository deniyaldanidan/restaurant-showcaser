import { cinzel } from "@/lib/fonts";
import BreadCrumb from "../BreadCrumb";
import { FaHome as HomeIcon } from "react-icons/fa";
import myRoutes from "@/utils/myRoutes";

export default function PageHero() {
  return (
    <section
      className="relative w-full h-fit overflow-hidden bg-[#000a]"
      aria-label="Hero section of menus page"
    >
      <picture className="absolute -z-10 w-full h-full object-cover object-center">
        <source srcSet="/images/our-menu-hd.jpg" media="(min-width: 1480px)" />
        <source
          srcSet="/images/our-menu-desktop.jpg"
          media="(min-width: 1200px)"
        />
        <source
          srcSet="/images/our-menu-laptop.jpg"
          media="(min-width: 800px)"
        />
        <source
          srcSet="/images/our-menu-tablet.jpg"
          media="(min-width: 550px)"
        />
        <source
          srcSet="/images/our-menu-mobile-lg.jpg"
          media="(min-width: 420px)"
        />
        <source
          srcSet="/images/our-menu-mobile-md.jpg"
          media="(min-width: 360px)"
        />
        <img
          src="/images/our-menu-mobile-sm.jpg"
          alt="Hero image of Our Menu's page"
          className="w-full h-full object-cover object-center"
        />
      </picture>
      <div className="mx-page-margin-x my-16 flex flex-col gap-y-10 items-center">
        <BreadCrumb
          past={[
            { title: <HomeIcon />, link: myRoutes.home, label: "Home Page" },
          ]}
          current="Our Menu"
        />
        <div className="max-w-[800px] flex flex-col gap-y-5 items-center">
          <h2
            className={`text-section-title text-center ${cinzel.className} font-bold`}
          >
            OUR MENU
          </h2>
          <p
            className="text-section-description text-center font-medium leading-relaxed"
            aria-label="few words about our menu"
          >
            Explore the exquisite flavors of Odel Digest Restaurant. Our
            carefully curated menu offers a diverse array of authentic Indian
            dishes, from savory starters to decadent desserts, ensuring a
            delightful dining experience for every palate.
          </p>
        </div>
      </div>
    </section>
  );
}
