import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkSchedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [error, setError] = useState(false); // State to track if there's an error
  
    useEffect(() => {
      const fetchSchedule = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/schedules');
          setSchedule(response.data);
          setError(false); // Reset error state if the fetch succeeds
        } catch (error) {
          console.error('Error fetching the schedule data:', error);
          setError(true); // Set error to true if the fetch fails
        }
      };
  
      fetchSchedule();
    }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-nav-black">
      <div className="w-full max-w-6xl p-8 bg-darkGray shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-highlightRed mb-6">Employee Work Schedule</h2>
        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-gray-100">
              <th className="px-6 py-4 border-b-2 border-gray-300">First Name</th>
              <th className="px-6 py-4 border-b-2 border-gray-300">Last Name</th>
              <th className="px-6 py-4 border-b-2 border-gray-300">Email</th>
              <th className="px-6 py-4 border-b-2 border-gray-300">Phone</th>
              <th className="px-6 py-4 border-b-2 border-gray-300">Hours Today</th>
              <th className="px-6 py-4 border-b-2 border-gray-300">Hours This Week</th>
              <th className="px-6 py-4 border-b-2 border-gray-300">Hourly Rate</th>
              <th className="px-6 py-4 border-b-2 border-gray-300">Estimated Weekly Earnings</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              // Display this row if fetching data fails
              <tr>
                <td colSpan="8" className="text-center px-6 py-4 text-red-600">Failed to fetch data.</td>
              </tr>
            ) : (
              // Display table rows if data fetching is successful
              schedule.map((person, index) => (
                <tr key={person.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-6 py-4 border-b">{person.first_name}</td>
                  <td className="px-6 py-4 border-b">{person.last_name}</td>
                  <td className="px-6 py-4 border-b">{person.email}</td>
                  <td className="px-6 py-4 border-b">{person.phone}</td>
                  <td className="px-6 py-4 border-b">{person.hours_worked_today}</td>
                  <td className="px-6 py-4 border-b">{person.hours_worked_week}</td>
                  <td className="px-6 py-4 border-b">${person.hourly_rate.toFixed(2)}</td>
                  <td className="px-6 py-4 border-b">${person.estimated_weekly_earnings.toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkSchedule;
