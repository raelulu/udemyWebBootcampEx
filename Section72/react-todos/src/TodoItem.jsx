import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoItem({ todo, remove, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const removeTodo = () => {
    remove(todo.id);
  };
  return (
    <div>
      <ListItem
        key={todo.id}
        secondaryAction={
          <DeleteIcon edge="end" aria-label="comments" onClick={removeTodo}>
            <CommentIcon />
          </DeleteIcon>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
              onChange={toggle}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={todo.text} />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
