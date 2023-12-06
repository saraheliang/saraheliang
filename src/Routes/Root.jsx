import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";

export default function Root() {
  return (
    <div className="container">
      <Navigation />

      {/* outlet means that child will be rendered through parent root */}
      {/* for ex, if it sees the url is /contact. it first render / which is the root, then it goes down to the child route, sees /contact and then it renders <Contact /> inside of the <Root /> outlet */}
      <Outlet />
    </div>
  );
}
