import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./components/Login/Login";
import AdminPanel from "./components/Admin/AdminPanel";
import Project from "./components/Admin/Project";
import Timeline from "./components/Admin/Timeline";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>

      <Router>
        {loading ? (
          <Loader />
          ) : (
            <>
            {console.log(isAuthenticated)}
            <Routes>
              <Route path="/" element={<Main  user={user}/>} />
              <Route
                path="/account"
                element={isAuthenticated ? <AdminPanel /> : <Login />}
              />
              <Route
                path="/admin/timeline"
                element={isAuthenticated ? <Timeline /> : <Login />}
              />
              <Route
                path="/admin/project"
                element={isAuthenticated ? <Project /> : <Login />}
              />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
