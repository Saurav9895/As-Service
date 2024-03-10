import Topbar from "@/components/Topbar/Topbar";
import Serviceman from "./ServiceMan/Serviceman";
import UserPage from "./Userpage/UserPage";


export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="main-head">Kindly Fill your Details</div>
    <Serviceman/>
    </>
  );
}
