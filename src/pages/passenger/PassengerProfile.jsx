import React from 'react';

function ProfileP() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user || user.role !== "passenger") {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Passenger Profile</h1>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <p className="text-gray-600">No passenger is logged in.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Passenger Profile</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
        <p><strong>Name:</strong> {user.fullName || 'Guest'}</p>
        <p><strong>Email:</strong> {user.email || 'N/A'}</p>
        <p><strong>Role:</strong> Passenger</p>
      </div>
    </div>
  );
}

export default ProfileP;
