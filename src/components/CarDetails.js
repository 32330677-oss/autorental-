import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CarDetails.css';

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // بيانات السيارات
  const cars = {
    1: {
      name: "Toyota Camry",
      price: "$50/day",
      type: "Sedan",
      image: "",
      description: "Comfortable and reliable sedan perfect for city driving."
    },
    2: {
      name: "BMW X5", 
      price: "$120/day",
      type: "SUV",
      image: "",
      description: "Luxury SUV with premium features and comfort."
    },
    3: {
      name: "Honda Civic",
      price: "$45/day",
      type: "Sedan",
      image: "",
      description: "Stylish and fuel-efficient compact car."
    },
    4: {
      name: "Mercedes C-Class",
      price: "$100/day",
      type: "Luxury", 
      image: "",
      description: "Elegant and powerful luxury sedan."
    }
  };

  const car = cars[id] || cars[1];

  // حالة نموذج الحجز
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    license: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Booking confirmed for ${car.name}!\nWe will contact you at ${formData.phone}`);
    navigate('/');
  };

  return (
    <div className="car-details">
      <div className="rental-header">
        <h1>Rent {car.name}</h1>
        <div className="car-summary">
          <p className="car-type">{car.type}</p>
          <p className="car-price">{car.price}</p>
          <p className="car-description">{car.description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rental-form">
        <h2>Rental Information</h2>
        
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+961 XX XXX XXX"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Pick-up Date</label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Return Date</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Driver License Number</label>
          <input
            type="text"
            name="license"
            value={formData.license}
            onChange={handleChange}
            placeholder="License number"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Confirm Rental
        </button>
      </form>
    </div>
  );
}

export default CarDetails;