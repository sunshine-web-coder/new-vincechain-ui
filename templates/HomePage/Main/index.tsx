import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Main.module.sass";
import styles2 from "./Main.module.scss";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const images = [
    "/images/figures/figure-1.png",
    "/images/figures/figure-2.png",
    "/images/figures/figure-3.png",
    "/images/figures/figure-4.png",
    "/images/figures/figure-5.png",
    "/images/figures/figure-6.png",
];

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                {/* <div className={styles.stage}>INTRODUCING ONIX</div> */}
                <div className={cn("h1", styles2.title)}>
                    EVM-Compatible & Cross-Chain Blockchain for
                   <span style={{color: "#FFCA00"}}>
                    <TypeAnimation
                    sequence={[
                        'DeFi', // Types 'One'
                        1000, // Waits 1s
                        'Remote work', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Gaming', // Types 'Three' without deleting 'Two'
                        3000, // Waits 3s
                        'web3',
                        4000, // Waits 4s
                        '',
                        () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    />
                   </span>
                   
                </div>
                <div className={styles.info}>
                    Build and foster your decentralized applications and smart contracts with easy-to-use developer tools.
                </div>
                <div className={styles.heroLink}>
                    <a className={cn("button", styles2.tHeroLink)} href="/build">Start Building</a>
                </div>
            </div>
            <div className={styles.images}>
                <div className={styles.image}>
                    <Image
                        src="/images/lines.svg"
                        width={1578}
                        height={1585}
                        alt="Lines"
                    />
                </div>
                {images.map((image, index) => (
                    <Parallax
                        className={`${styles.image} ${styles2.imageHero}`}
                        speed={1}
                        easing="easeInQuad"
                        rotate={index === 2 ? [2, -10] : [-4, 15]}
                        key={index}
                    >
                        <Image src={image} layout="fill" alt="Figure" />
                    </Parallax>
                ))}
            </div>
            <Scroll
                className={styles.scroll}
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
