import useAuth from "../../hooks/useAuth";

const AdminProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <img src={user.photoURL} alt="" />
      </div>
      <h1>Admin: {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default AdminProfile;
