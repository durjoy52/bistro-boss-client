import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./featured.css";

const Featured = () => {
    return (
        <div className="featured-item text-white my-8">
            <div className="relative">
            <SectionTitle heading="FROM OUR MENU" subHeading="Check it out"/>
            </div>
            <div className="md:flex justify-center items-center px-36 py-24 relative ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos labore culpa quam sed voluptatem? Itaque ea modi doloremque quos. Dolorem quia reprehenderit beatae nobis quod accusantium in possimus doloribus praesentium.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;