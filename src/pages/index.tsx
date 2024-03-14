import Topbar from "@/components/Topbar/Topbar";
import Serviceman from "./ServiceMan/Serviceman";
import UserPage from "./Userpage/UserPage";
import Homapage from "./Homepage/Homapage";
import Mainpagenav from "@/components/Mainpagenav/Mainpagenav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import AuthPage from "./auth";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <>
          <Mainpagenav />
          <Homapage />
        </>
      ) : (
        <AuthPage />
      )}
    </>
  );
}
