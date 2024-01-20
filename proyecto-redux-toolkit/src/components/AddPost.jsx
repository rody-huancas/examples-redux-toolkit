import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/postSlice";
import { selectAllUsers } from "../features/usersSlice";

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserIdChange = (e) => setUserId(e.target.value);

  const onSave = (e) => {
    e.preventDefault();
    dispatch(postAdded(title, content, userId));
    setTitle("");
    setContent("");
  };

  const users = useSelector(selectAllUsers);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <form onSubmit={onSave}>
      <input type="text" value={title} onChange={onTitleChange} />
      <textarea value={content} onChange={onContentChange}></textarea>
      <select value={userId} onChange={onUserIdChange}>
        <option value="">Seleccione</option>
        {userOptions}
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
};
