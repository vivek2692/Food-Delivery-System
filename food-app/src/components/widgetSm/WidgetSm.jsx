import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm({ data }) {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {data.map((user) => {
          return user.isAdmin ? (
            ""
          ) : (
            <li className="widgetSmListItem" key={user.id}>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.name}</span>
                <span className="widgetSmUserTitle">Customer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
