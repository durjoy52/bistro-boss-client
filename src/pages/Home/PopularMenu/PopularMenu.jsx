import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item => item.category === "popular")
            setMenu(popularItems)
        })
    },[])
    return (
        <section className="mb-12 flex flex-col items-center">
            <SectionTitle subHeading="Check it out" heading="FROM OUR MENU"></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    menu.map(item =><MenuItem key={item._id} item={item}/>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-8">view full menu</button>
            <div className="mt-16 bg-black">
                <h3 style={{fontFamily:" 'Raleway', sans-serif"}} className="text-4xl py-10 px-36 text-white">Call Us: +88 0192345678910</h3>
            </div>
        </section>
    );
};

export default PopularMenu;