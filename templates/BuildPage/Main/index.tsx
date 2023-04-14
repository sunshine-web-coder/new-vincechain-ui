import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import styles2 from "./Main.module.scss";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";

const images = [
    "/images/figures/figure-11.png",
    "/images/figures/figure-12.png",
    "/images/figures/figure-13.png",
    "/images/figures/figure-14.png",
];

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.stage}>Build</div>
                <div className={cn("h1", styles.title)}>
                    Vince Chain Developer Manual
                </div>
                <div className={styles.info}>
                    Explore all the resources and tools you need to build and deploy excellent dApps and Smart Contracts on Vince Chain.
                </div>
                {/* <div className={styles.heroLink}>
                    <a className={cn("button", styles2.tHeroLink)} href="https://vincechain.gitbook.io/vince-chain-documentation/">Start Building</a>
                </div> */}
            </div>
            <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines-3.svg"
                        width={1600}
                        height={1500}
                        alt="Lines"
                    />
                </div>
                {images.map((image, index) => (
                    <Parallax
                        className={styles.image}
                        speed={1}
                        easing="easeInQuad"
                        rotate={[-4, 15]}
                        key={index}
                    >
                        <Image src={image} layout="fill" alt="Figure" />
                    </Parallax>
                ))}
            </div>
            <Scroll
                className={styles2.scroll}
                title="SCROLL TO EXPLORE"
                onScroll={() =>
                    scrollToRef.current.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            />
        </div>
    </div>
);

export default Main;
