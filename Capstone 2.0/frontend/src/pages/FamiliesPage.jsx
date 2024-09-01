import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FamiliesPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const res = await axios.get('/api/activities?type=family');
      setActivities(res.data);
    };

    fetchActivities();
  }, []);

  return (
    <div className="container">
      <h1>Family Activities</h1>
      {activities.map(activity => (
        <div key={activity._id} className="card">
          <h3>{activity.name}</h3>
          <p>{activity.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FamiliesPage;
