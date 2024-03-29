import { useSelector, useDispatch } from "react-redux";
import { enableEdit, updateInputFirstname, updateInputLastname, cancelEdit } from "../features/editNameSlice.js";
import { updateUserInfo } from "../features/userSlice.js";
import authService from "../services/authService.js";

export default function HeaderProfil() {
  const user = useSelector((state) => state.user);
  const editNameInput = useSelector((state) => state.editNameInput);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(enableEdit());
  };

  const handleSave = async (e) => {
    if (user.isLoggedIn) {
      const updatedNames = {
        firstName: editNameInput.firstName.trim() || user.firstName,
        lastName: editNameInput.lastName.trim() || user.lastName,
      };

      try {
        const reqResponse = await authService.putUserProfil(updatedNames, user);
        if (reqResponse.data.status === 200) {
          const userDataUpdated = { ...user, ...reqResponse.data.body };
          user.isRemembered ? localStorage.setItem("user", JSON.stringify(userDataUpdated)) : sessionStorage.setItem("user", JSON.stringify(userDataUpdated));
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
        {!editNameInput.onEdit ? `${user.firstName} !` : null}
      </h1>
      {editNameInput.onEdit ? (
        <div>
          <div className="input-wrapper-edit">
            <input type="text" onChange={(e) => dispatch(updateInputFirstname(e.target.value))} value={editNameInput.firstName} placeholder={user.firstName} />
            <input type="text" onChange={(e) => dispatch(updateInputLastname(e.target.value))} value={editNameInput.lastName} placeholder={user.lastName} />
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
          Edit Name
        </button>
      )}
    </div>
  );
}
