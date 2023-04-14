import { Parallax } from "react-scroll-parallax";
import cn from "classnames";
import styles from "./Development.module.sass";
import styles2 from "./Development.module.scss";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { developmentTechnology } from "@/mocks/development";

const images = [
    "/images/figures/figure-7.png",
    "/images/figures/figure-9.png",
    "/images/figures/figure-1.png",
];

type DevelopmentProps = {};

const Development = ({}: DevelopmentProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <h2 className={cn("h2", styles.title)}>
                    Explore More on Vince Chain
                </h2>
                <div className={styles.info}>
                    Other resources to set you on the right path in your Vince Chain dApp development journey!
                </div>
            </div>
            <div className={styles.list}>
                {developmentTechnology.map((item, index) => (
                    <Card
                        className={styles.card}
                        color={item.color}
                        key={index}
                        animateIn="fadeInDown"
                    >
                        <div className={cn("h3", styles.subtitle)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                        <div className={styles.preview}>
                            <div className={styles.inner}>
                                <Image
                                    src={item.image}
                                    layout="fill"
                                    alt="Figure"
                                />
                            </div>
                        </div>
                        <div className={styles.foot}>
                            <a href={item.slug}
                                className={styles2.more}
                                style={{ color: item.color }}
                            >
                                {item.slugLabel}
                            </a>
                            {/* <Icon
                                className={styles.arrow}
                                name="arrow-right"
                                size="26"
                            /> */}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
        <div className={styles.images}>
            {images.map((image, index) => (
                <Parallax
                    className={styles.image}
                    speed={4}
                    easing="easeInQuad"
                    key={index}
                >
                    <Image src={image} layout="fill" alt="Figure" />
                </Parallax>
            ))}
        </div>
    </div>
);

export default Development;
