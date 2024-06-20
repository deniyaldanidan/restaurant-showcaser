import { cinzel_decorative_reg } from "@/lib/fonts";
import ServeCard from "./ServeCard";
import MainCoursePic from "@/assets/menu-offers-pics/main-course.jpg";
import StarterCoursePic from "@/assets/menu-offers-pics/starters.jpg";
import SoupsCoursePic from "@/assets/menu-offers-pics/soups.jpg";
import DessertsCoursePic from "@/assets/menu-offers-pics/desserts.jpg";
import SpecialitiesCoursePic from "@/assets/menu-offers-pics/specialities.jpg";
import BeveragesCoursePic from "@/assets/menu-offers-pics/Beverages.jpg";
import CombosCoursePic from "@/assets/menu-offers-pics/platters.jpg";

export default function WhatWeServe() {
  return (
    <section className="px-page-margin-x py-section-pad-y">
      <h2
        className={`${cinzel_decorative_reg.className} text-section-title text-center mb-10`}
      >
        What we serve
      </h2>
      <div className="grid grid-cols-5 grid-rows-[repeat(4,300px)] gap-10">
        <ServeCard
          href="#"
          cardTitle="Main Course"
          cardDesc="Delight in our hearty and flavorful main dishes, crafted to satisfy your every craving."
          srcImage={MainCoursePic}
          className="col-span-3 row-span-2"
        />
        <ServeCard
          href="#"
          cardTitle="Starters"
          cardDesc="Kick off your meal with our tantalizing appetizers."
          srcImage={StarterCoursePic}
          className="col-span-2"
        />
        <ServeCard
          href="#"
          cardTitle="Soups & Salads"
          cardDesc="Begin your meal with our fresh and flavorful soups and salads, bursting with goodness."
          srcImage={SoupsCoursePic}
          className="col-span-2"
        />
        <ServeCard
          href="#"
          cardTitle="Desserts"
          cardDesc="Indulge in our decadent and delightful desserts."
          srcImage={DessertsCoursePic}
          className="col-span-2"
        />
        <ServeCard
          href="#"
          cardTitle="Specialities"
          cardDesc="Experience the unique flavors of our chef's special creations."
          srcImage={SpecialitiesCoursePic}
          className="col-span-3"
        />
        <ServeCard
          href="#"
          cardTitle="Beverages"
          cardDesc="Quench your thirst with our refreshing beverages."
          srcImage={BeveragesCoursePic}
          className="col-span-2"
        />
        <ServeCard
          href="#"
          cardTitle="Combos & Platters"
          cardDesc="Savor a variety of tastes with our perfectly paired combos and platters."
          srcImage={CombosCoursePic}
          className="col-span-3"
        />
      </div>
    </section>
  );
}
