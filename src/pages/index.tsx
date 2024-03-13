import Topbar from "@/components/Topbar/Topbar";
import Serviceman from "./ServiceMan/Serviceman";
import UserPage from "./Userpage/UserPage";
import Homapage from "./Homepage/Homapage";
import Mainpagenav from "@/components/Mainpagenav/Mainpagenav";


export default function Home() {
  return (
    <>
    <Mainpagenav/>
    {/* <UserPage/> */}
    {/* <Serviceman/> */}
    <Homapage/>

    </>
  );
}
