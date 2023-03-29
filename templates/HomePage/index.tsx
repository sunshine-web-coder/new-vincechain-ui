import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Development from "./Development";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import Solutions from "./Solutions";
import Posts from "@/components/Posts";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { posts } from "@/mocks/posts";
import { reviews } from "@/mocks/reviews";
import UnkSect from "./UnkSect";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Development scrollToRef={scrollToRef} />
            <UnkSect />
            <AboutUs />
            <Statistics />
            <Solutions />
            <Posts
                className="section"
                title="Your gateway to everything Onix."
                info="Stay current on the latest Onix project developments, news, and content, updated daily."
                posts={posts}
            />
            <Reviews reviews={reviews} />
            <JoinCommunity title="Want to get involved?" />
        </Layout>
    );
};

export default HomePage;
