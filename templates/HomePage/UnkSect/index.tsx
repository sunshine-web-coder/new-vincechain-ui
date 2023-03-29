import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./UnkSect.module.sass";
import customStyles from "./CustomUnkSect.module.scss";
import Card from "@/components/Card";
import Image from "@/components/Image";

import { unkSect } from "@/constants/unkSect";

type SolutionsProps = {};

const UnkSect = ({}: SolutionsProps) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container-small", styles.container)}>
                {/* <div className={styles.head}>
                    <div className={cn("h2", styles.title)}>
                        Scaling solutions, amplified.
                    </div>
                    <div className={styles.info}>
                        Onix&apos;s complete suite of blockchain-scaling
                        solutions.
                    </div>
                </div> */}
                <div className={styles.list}>
                    {unkSect.map((item, index) => (
                        <Card
                            className={styles.card}
                            innerCardClass={styles.inner}
                            key={index}
                            animateIn="fadeInDown"
                            delay={isMobile ? 0 : item.delay}
                            small
                        >
                            <div className={styles.icon}>
                                <Image
                                    src={item.icon}
                                    width={32}
                                    height={32}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {item.title}
                            </div>
                            <div className={styles.content}>{item.content}</div>
                            <div className={customStyles.sLinkDiv}>
                                <a className={customStyles.sLink} href={item.slug}>{item.button}</a>
                            </div>
                        </Card>
                    ))}
                </div>
                {/* <div className={styles.images}>
                    {images.map((image, index) => (
                        <Parallax
                            className={styles.image}
                            speed={1}
                            easing="easeInQuad"
                            rotate={index === 1 ? [2, -6] : [-4, 15]}
                            key={index}
                        >
                            <Image
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                alt={image.alt}
                            />
                        </Parallax>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default UnkSect;
