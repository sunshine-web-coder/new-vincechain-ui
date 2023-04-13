import cn from "classnames";
import styles from "./Resources.module.sass";
import styles2 from "./Resources.module.scss";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";


const Resources = () => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container-large", styles.container)}>
            <div className={styles2.wrap}>
                <div className={styles2.m9JKn}>
                    <div className={styles2.details}>
                        <div className={cn("h2", styles2.title)}>
                            More Resources to Keep You Going.
                        </div>
                        <div className={styles2.info}>
                            Watch and learn from discussions, courses, DIYs, and contributions from the Vince Chain core dev. team, Resources, and industry leaders tailored to keep you on track in your development journey. 
                        </div>
                    </div>
                    <div className={styles2.b658}>
                        <a href="">Youtube <svg xmlns="http://www.w3.org/2000/svg" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85" fill="red"/><path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff"/></svg></a>
                        <a href="">Podcast <img src="https://i.ibb.co/9sdvy1B/Podcasts-i-OS.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Resources;
