import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("할 일을 입력해 주세요 ✍️");
      return;
    }
    addTodo(text);
    setText("");
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          variant="standard"
          color="success"
          sx={{ width: "325px" }}
          onChange={handleChange}
          value={text}
          placeholder="할 일..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
