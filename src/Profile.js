import React from 'react';
import axios from 'axios';

const Profile = () => {
  const handleDeleteEvent = async () => {
    const eventIdToDelete = prompt('Please enter the Event ID to delete:');
    if (eventIdToDelete) {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8181/delete/user/${eventIdToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'cache-control': 'no-cache',
            },
          }
        );
        if (response.status === 200) {
          alert('Event details deleted successfully!');
        }
      } catch (error) {
        console.error('Event deletion failed:', error);
      }
    } else {
      alert('Event ID cannot be empty. Deletion canceled.');
    }
  };


  return (
    <div>
    
      <button type="button"  onClick={handleDeleteEvent}>
        Delete Event
      </button>

    </div>
  );
};

export default Profile;
