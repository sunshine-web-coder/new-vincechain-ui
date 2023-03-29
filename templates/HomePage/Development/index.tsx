import { useRef } from "react";
// import SimpleBar from "simplebar-react";
import { useDraggable } from "react-use-draggable-scroll";
import cn from "classnames";
import styles from "./Development.module.sass";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { development } from "@/mocks/development";

type DevelopmentProps = {
    scrollToRef: any;
};

const Development = ({ scrollToRef }: DevelopmentProps) => {
    const ref =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);

    return (
        <div className={cn("section", styles.section)}>
            <div
                className={cn("anchor", styles.anchor)}
                ref={scrollToRef}
            ></div>
            <div className={cn("container-wide", styles.container)}>
                <h2 className={cn("h2", styles.title)} style={{marginTop: 100}}>
                The vince ecosystem.
                </h2>
                <div className={styles.list} {...events} ref={ref}>
                    {development.map((item, index) => (
                        <Card
                            className={styles.card}
                            url={item.url}
                            color={item.color}
                            key={index}
                            animateIn="fadeInDown"
                            delay={item.delay}
                        >
                            <div className="" style={{marginTop: 20, marginBottom: 30}}>
                                <img
                                    src={item.image}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {item.title}
                            </div>
                            <div className={styles.content}>{item.content}</div>
                            <div className={styles.foot}>
                                <div
                                    className={styles.more}
                                    style={{ color: "#FFCA00" }}
                                >
                                    {item.label}
                                </div>
                                <Icon
                                    className={styles.arrow}
                                    name="arrow-right"
                                    size="26"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Development;
