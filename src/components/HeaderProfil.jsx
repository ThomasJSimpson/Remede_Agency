import { useSelector } from "react-redux";

export default function HeaderProfil() {
  const user = useSelector((state) => state.user);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user.firstName} {user.lastName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}
// authentification par token automatique
