import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";

const SupportPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
        </Layout>
    );
};

export default SupportPage;
