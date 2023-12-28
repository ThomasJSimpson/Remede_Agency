import { useSelector, useDispatch } from "react-redux";
import { enableEdit, updateInputFirstname, updateInputLastname, cancelEdit } from "../features/login/editNameSlice";
import { updateUserInfo } from "../features/login/userSlice";
import authService from "../services/auth.service.js";

export default function HeaderProfil() {
  const user = useSelector((state) => state.user);
  const firstName = useSelector((state) => state.editNameInput.firstName);
  const lastName = useSelector((state) => state.editNameInput.lastName);
  const onEdit = useSelector((state) => state.editNameInput.onEdit);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(enableEdit());
  };

  const handleSave = async (e) => {
    if (user.isLoggedIn) {
      const updatedNames = {
        firstName: firstName.trim() || user.firstName,
        lastName: lastName.trim() || user.lastName,
      };
      try {
        console.log(firstName, lastName, user);
        const reqResponse = await authService.putUserProfil(updatedNames, user);
        console.log(reqResponse);
        if (reqResponse.data.status === 200) {
          dispatch(updateUserInfo({ ...reqResponse.data.body }));
          dispatch(cancelEdit());
        }
      } catch (err) {
        console.error("Erreur lors de la requête:", err);
      }
    }
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  return (
    <div className="header">
      <h1>
        Welcome back <br />
        {!onEdit ? `${user.firstName} !` : null}
      </h1>

      {onEdit ? (
        <div>
          <div className="input-wrapper-edit">
            <input type="text" onChange={(e) => dispatch(updateInputFirstname(e.target.value))} value={firstName} placeholder={user.firstName} />
            <input type="text" onChange={(e) => dispatch(updateInputLastname(e.target.value))} value={lastName} placeholder={user.lastName} />
          </div>
          <button className="edit-button" onClick={handleSave}>
            Save
          </button>
          <button className="edit-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
      )}
    </div>
    // <button className="edit-button">Edit Name</button>
  );
}
// authentification par token automatique
