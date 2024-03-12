import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar CSS file
import Orders from './Orders';

function Report() {
  // State to manage the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orderIds, setOrderIds] = useState([]);

  // Sample orders data
  const orders = [
    { orderId: 101, productId: 1, orderDate: '2024-03-15', quantity: 2 },
    { orderId: 102, productId: 8, orderDate: '2024-03-16', quantity: 1 },
    { orderId: 103, productId: 3, orderDate: '2024-03-17', quantity: 3 },
    { orderId: 104, productId: 4, orderDate: '2024-03-18', quantity: 2 },
    { orderId: 105, productId: 10, orderDate: '2024-03-19', quantity: 1 },
    { orderId: 106, productId: 7, orderDate: '2024-03-20', quantity: 4 },
    { orderId: 107, productId: 4, orderDate: '2024-03-21', quantity: 2 },
    { orderId: 108, productId: 11, orderDate: '2024-03-22', quantity: 1 },
    { orderId: 109, productId: 6, orderDate: '2024-03-23', quantity: 3 },
    { orderId: 110, productId: 9, orderDate: '2024-03-24', quantity: 2 }
    
  ];

  // Function to handle date changes
  const handleDateChange = date => {
    setSelectedDate(date);
    const selectedDateString = date.toISOString().split('T')[0];
    const filteredOrders = orders.filter(order => order.orderDate === selectedDateString);
    const filteredOrderIds = filteredOrders.map(order => order.orderId);
    setOrderIds(filteredOrderIds);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h4>Calendar</h4>
      <div>
        {/* Render the calendar component */}
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
      <div>
        {/* Display the selected date */}
        <p>Selected Date: {selectedDate.toDateString()}</p>
        <p>Order IDs on selected date: {orderIds.join(', ')}</p>
      </div>
    </div>
  );
}

export default Report;
