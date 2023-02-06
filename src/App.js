import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { SignIn } from "./feature/auth/SignIn/SignIn";
import { SignUp } from "./feature/auth/SignUp/SignUp";
import { SideBarRoute } from "./layouts/SideBarApp/SideBarRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chatroom" element={<SideBarRoute />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
