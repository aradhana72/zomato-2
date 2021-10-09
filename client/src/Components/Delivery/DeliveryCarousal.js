import React from "react";

//component
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
  return (
    <>
    <h1 className="text-xl font-semibold my-3">Eat what makes you happy!</h1>
    <div className="flex flex-wrap justify-between gap-3">
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
    </div>
    </>
  );
};

export default DeliveryCarousal;
