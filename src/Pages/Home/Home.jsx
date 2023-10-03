import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>

            {/* breaking news part start */}
                <BreakingNews></BreakingNews>
            {/* breaking news part end */}
            
            <Navbar></Navbar>
            {/* This is Home body part  */}
            <div className="grid grid-cols-4 gap-6">
                <div className="border"> <LeftSideNav></LeftSideNav> </div>
                <div className="col-span-2 border">We have more news pleace click hare</div>
                <div className="border"> <RightSideNav></RightSideNav></div>
            </div>



        </div>
    );
};

export default Home;