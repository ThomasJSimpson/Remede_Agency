import { useSelector } from "react-redux";

export default function HeaderProfil() {
  const profil = useSelector((state) => state.profil);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {profil.firstName} {profil.lastName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}
