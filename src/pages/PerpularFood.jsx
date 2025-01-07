import React from "react";
import RecepisCard from "../Components/RecepisCard";
import Btn from "../Components/btn";
import { Link } from "react-router-dom";

const foods = [
  {
    name: "Spaghetti Carbonara",
    image:
      "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cookingDuration: 30,
    cookingLevel: "medium",
    servingNumber: 4,
  },
  {
    name: "Grilled Chicken Salad",
    image:
      "https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cookingDuration: 20,
    cookingLevel: "easy",
    servingNumber: 2,
  },
  {
    name: "Beef Wellington",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cookingDuration: 120,
    cookingLevel: "hard",
    servingNumber: 6,
  },
  {
    name: "Vegetable Stir Fry",
    image:
      "https://images.unsplash.com/photo-1485962307416-993e145b0d0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cookingDuration: 15,
    cookingLevel: "easy",
    servingNumber: 3,
  },
  {
    name: "Chocolate Lava Cake",
    image:
      "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cookingDuration: 25,
    cookingLevel: "medium",
    servingNumber: 4,
  },
  {
    name: "Tacos al Pastor",
    image:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cookingDuration: 45,
    cookingLevel: "medium",
    servingNumber: 4,
  },
];

function PerpularFood() {
  return (
    <div className="mt-[200px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col mr-4">
          <h2 className="font-bold text-2xl">Discover, Create, Share</h2>
          <p className="text-custom-gray">
            Check our most popular recipes of this week
          </p>
        </div>
        <Link to="/Respis">
          <Btn width="w-32" height="h-16">
            See All
          </Btn>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {foods.map((food, index) => (
          <RecepisCard
      
          Time={30}
          serving={4}
          level="medium"
          name="Spaghetti Bolognese"
        />
        
        ))}
      </div>
    </div>
  );
}

export default PerpularFood;
