import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";


const MobileTab = () => {

const [allTypes, setAllTYpes] = useState([
  {
    id: "delivery",
    icon: <BsHandbag />,
    name: "Delivery",
    isActive: false
  },
  {
    id: "night",
    icon: <IoBeerOutline />,
    name: "Night Life",
    isActive: false
  },
  {
    id: "dining",
    icon: <GiMorgueFeet />,
    name: "Dining Out",
    isActive: false
  }
]);
  const {type} = useParams();
useEffect(()=> {
  if(type) {
    const updateTypes = allTypes.map((item)=> {
      if(item.id===type) {
        return { ...item, isActive: true};
      }

      return item;
    });
    setAllTYpes(updateTypes);
  }
},[type]);

  return (
    <>
      <div className="lg:hidden bg-white p-3 fixed bottom-0 z-10 w-full flex items-center justify-between border text-gray-500">
        {
          allTypes.map((items)=> {
            <div className={
              items.isActive ? "flex flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-400" : "flex flex-col items-center text-xl"
            }>
            {items.icon}
            <h5>{items.name}</h5>
            </div>
          })
        }
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
  <>
  <div>
    <MobileTab />
  </div>
  </>
  );
};

export default FoodTab;
