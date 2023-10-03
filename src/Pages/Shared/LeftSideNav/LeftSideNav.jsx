import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [catagory, setCatagory] = useState([])
    const [spotsCard, setSportCard] = useState([])

    // for nationnal
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])

    // for sports
    useEffect(() => {
        fetch('/sports.json')
            .then(res => res.json())
            .then(data => setSportCard(data))
    }, [])

    return (
        <div>
            {/* national news start */}
            <div>
                <button className="btn btn-ghost w-full bg-[#E7E7E7] mb-7">Nationnal News</button>
                {
                    catagory.map(item => <div key={item.id} className="grid justify-center">
                        <ul className="">
                            <li className="mb-7 text-[#9F9F9F] hover:text-black">
                                <NavLink className={"mb"}>{item.name}</NavLink>
                            </li>
                        </ul>
                    </div>)
                }
            </div>

            {/* spotsCard item start */}
            <div>
                {
                    spotsCard.map(sportItem => <div key={sportItem.id} className="mb-8">
                        <img src={sportItem.image} alt="" />
                        <h3 className="text-xl my-8">{sportItem.description.slice(0,80)}</h3>
                        <div className="flex justify-between">
                            <p>{sportItem.gameName}</p>
                            <p>{moment().format("MMM D ,  YYYY")}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;