import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cars.css';
import honda from '../assets/Honda.png';
import bmw from '../assets/BMW.png';
import civic from '../assets/Civic.png';
import Mercedes from '../assets/Mercedes.png';
function Cars() {
  const [selectedType, setSelectedType] = useState('All');

  const carTypes = ['All', 'Sedan', 'SUV', 'Sports', 'Luxury', 'Economy'];
  
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      price: "$50/day",
      type: "Sedan",
      image: civic,
      description: "Comfortable and reliable sedan perfect for city driving.",
      features: ["Automatic", "AC", "4 Seats"]
    },
    {
      id: 2,
      name: "Honda Civic",
      price: "$45/day",
      type: honda,
      image: honda,
      description: "Stylish and fuel-efficient compact car.",
      features: ["Automatic", "AC", "5 Seats"]
    },
    {
      id: 3,
      name: "BMW X5",
      price: "$120/day",
      type: "SUV",
      image: bmw,
      description: "Luxury SUV with premium features and comfort.",
      features: ["Automatic", "AC", "7 Seats", "GPS"]
    },
    {
      id: 4,
      name: "Mercedes C-Class",
      price: "$100/day",
      type: "Luxury",
      image: Mercedes,
      description: "Elegant and powerful luxury sedan.",
      features: ["Automatic", "AC", "5 Seats", "Premium Sound"]
    }
  ];

  const filteredCars = cars.filter(car => {
    const matchesType = selectedType === 'All' || car.type === selectedType;
    return matchesType;
  });

  return (
    <div className="cars">
      <div className="cars-header">
        <h1>Available Cars</h1>
      </div>

      <div className="cars-controls">
        <div className="types-filter">
          <h3>Car Types</h3>
          <div className="types-list">
            {carTypes.map(type => (
              <button
                key={type}
                className={`type-btn ${selectedType === type ? 'active' : ''}`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      
      <div className="cars-grid">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <img src={car.image} alt={car.name} />
            </div>
            <div className="car-info">
              <div className="car-header">
                <h3>{car.name}</h3>
                <span className="car-price">{car.price}</span>
              </div>
              <p className="car-type">{car.type}</p>
              <p className="car-description">{car.description}</p>
              <div className="car-features">
                {car.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
              <Link to={`/CarDetails/${car.id}`} className="btn btn-primary">Rent a Car</Link>
            </div>
          </div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="no-cars">
          <p>No cars found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Cars;