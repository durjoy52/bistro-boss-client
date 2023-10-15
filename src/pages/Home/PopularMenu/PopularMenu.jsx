import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu] = UseMenu()
    const popular = menu.filter(item=>item.category === "popular")
    return (
        <section className="mb-12 flex flex-col items-center">
            <SectionTitle subHeading="Check it out" heading="FROM OUR MENU"></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    popular.map(item =><MenuItem key={item._id} item={item}/>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-8">view full menu</button>
        </section>
    );
};

export default PopularMenu;