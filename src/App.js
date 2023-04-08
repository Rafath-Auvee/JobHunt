import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      dispatch(setUser(user.email));
    });
  });
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
