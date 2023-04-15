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
import Script from "next/script";

const HomePage = () => {
  const scrollToRef = useRef(null);

  return (
    <Layout>
      <Main scrollToRef={scrollToRef} />
      <Solutions scrollToRef={scrollToRef} />
      <Development />
      {/* <UnkSect /> */}
      <AboutUs />
      <Statistics />
      <Posts
        className="section"
        title="Stay Connected"
        info="Be in the loop with the latest news and update from the development team & community."
        posts={posts}
      />
      <Reviews reviews={reviews} />
      {/* <JoinCommunity title="Want to get involved?" /> */}
    </Layout>
  );
};

export default HomePage;
