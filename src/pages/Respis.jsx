import React from 'react';
import RecepisCard from '../Components/RecepisCard';
import { useDataContext } from './foodProviderContext';

function Respis() {
  const { data: foods, loading, error } = useDataContext();


  if (!foods) {
    return <div>No data available</div>;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 gap-24 mt-4">
        {foods.map((food, index) => (
          <RecepisCard
            key={index}
            image={food.image}
            Time={food.cookingDuration}
            serving={food.servingNumber}
            level={food.cookingLevel}
          />
        ))}
      </div>
    </div>
  );
}

export default Respis;
