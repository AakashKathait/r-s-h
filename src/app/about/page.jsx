import React from "react";
import Heading from "../components/Heading/Index.jsx";
import Carousel from "../components/Carousel/Index.jsx";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="container mb-8 about">
        <Heading heading="About Us"></Heading>
        <Carousel />
        <h1 className=" font-barlow mb-4 heading-size text-base-content">
          Welcome to Royal Seoul
        </h1>
        <p className="font-mont text-neutral-content leading-relaxed tracking-wide">
          House Ever Since it was founded in 1990, Royal Seoul House Korean BBQ
          Restaurant has maintained its original quality of Korean cuisine for
          over 30 years Royal Seoul House Korean BBQ Restaurant has been a place
          where our customers have enjoyed the traditional tastes & styles of
          the Korean culture.
        </p>
        <h1 className=" mt-4 mb-4 font-barlow heading-size text-base-content">
          Korean Cuisine
        </h1>
        <p className="font-mont text-neutral-content leading-relaxed tracking-wide">
          Korean cuisine as a national cuisine known today has evolved through
          centuries of social and political change. Originating from ancient
          agricultural and nomadic traditions in southern Manchuria and the
          Korean peninsula, Korean cuisine has evolved through a complex
          interaction of the natural environment and different cultural trends.
          Korean cuisine is largely based upon rice, vegetables, and meats.
          Traditional Korean meals are noted for the number of side dishes
          (banchan) that accompany steam-cooked short-grain rice. Kimchi is
          served often, sometimes at every meal. Commonly used ingredients
          include sesame oil, doenjang (fermented bean paste), soy sauce, salt,
          garlic, ginger, pepper flakes and gochujang (fermented red chili
          paste).Ingredients and dishes vary by province. Many regional dishes
          have become national, and dishes that were once regional have
          proliferated in different variations across the country. The Korean
          royal court cuisine once brought all of the unique regional
          specialties together for the royal family. Meals are regulated by
          Korean cultural etiquette.
        </p>
        <h1 className="mt-4 mb-4 font-barlow heading-size text-base-content">
          Korean BBQ
        </h1>
        <p className="font-mont text-neutral-content leading-relaxed tracking-wide mb-4">
          Gogigui literally means meat roast, or Korean barbecue refers to the
          Korean method of roasting beef, pork, chicken, or other types of meat.
          Such dishes are often prepared at the diner table on gas or charcoal
          grills that are built into the table itself. Some Korean restaurants
          that do not have built-in grills provide portable stoves for diners to
          use at their tables. The most representative form of gogigui is
          bulgogi usually made from thickly sliced beef sirloin or tenderloin.
          Another popular form of it is galbi made from marinated beef short
          ribs. However, The most representative form of gogigui is bulgogi
          usually made from thickly sliced beef sirloin or tenderloin. Another
          popular form of it is galbi made from marinated beef short ribs.
          However, gogigui also includes many other kinds of marinated and
          non-marinated meat dishes, and can be divided into several categories.
          Korean barbecue is not only popular among Koreans, but has gained
          popularity internationally.
        </p>
      </div>
    </div>
  );
};

export default page;
