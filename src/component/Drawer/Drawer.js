import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/actions/authActions";
import Badge from "@material-ui/core/Badge";

//icons
import { RiHeartAddFill } from "react-icons/ri";
import { FaHistory, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdPerson } from "react-icons/md";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);

  const handelSignout = (event) => {
    event.preventDefault();
    dispatch(signout(history));
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="user">
          <ListItemIcon>
            <MdPerson size={30} color="black" />
          </ListItemIcon>
          <ListItemText primary={user.username} />
        </ListItem>

        <Divider />

        <Link className="link" to="/fav">
          <ListItem button key="Favourite">
            <ListItemIcon>
              <RiHeartAddFill size={26} color="black" />
            </ListItemIcon>
            <ListItemText primary="Favourite" />
          </ListItem>
        </Link>

        <Link className="link" to="/cart">
          <ListItem button key="Cart">
            <ListItemIcon>
              <FaShoppingCart size={24} color="black" />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
        </Link>
        <Link className="link" to="/paid">
          <ListItem button key="Purchase History">
            <ListItemIcon>
              <FaHistory size={23} color="black" />
            </ListItemIcon>
            <ListItemText primary="Purchase History" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button key="Signout" onClick={handelSignout}>
          <ListItemIcon>
            <FaSignOutAlt size={23} color="black" />
          </ListItemIcon>
          <ListItemText primary="Signout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>
          <Badge badgeContent={6} color="primary">
            <AiOutlineMenu size={30} />
          </Badge>
        </Button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
