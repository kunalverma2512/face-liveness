
const ProfileDetails = () => {
  // Mock data, replace with actual data fetching logic
  const userDetails = {
    name: 'John Doe',
    aadhaarNumber: '1234-5678-9012',
    email: 'johndoe@example.com',
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Profile Information</h3>
      <p><strong>Name:</strong> {userDetails.name}</p>
      <p><strong>Aadhaar Number:</strong> {userDetails.aadhaarNumber}</p>
      <p><strong>Email:</strong> {userDetails.email}</p>
    </div>
  );
};

export default ProfileDetails;
