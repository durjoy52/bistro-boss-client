import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonial/Testimonials";
import Featured from './../Featured/Featured';
import CallUs from "./CallUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu/>
            <CallUs phone=" +88 0192345678910"/>
            <Featured />
            <Testimonials/>
        </div>
    );
};

export default Home;