import cn from "classnames";
import styles from "./Resources.module.sass";
import styles2 from "./Resources.module.scss";
import Socials from "@/components/Socials";
import tLogo from "../../../../images/twitter-logo.png"

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
                        <a href="https://www.youtube.com/@vincechain5256">Youtube 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85" fill="red"/><path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff"/></svg></a>

                        <a href="https://twitter.com/vincechain">Spaces 
                        <img src="https://i.ibb.co/sH6jzNr/twitter-logo.png" alt="" />
                        {/* <svg className={styles2.b658Svg} viewBox="0 0 1156 1190" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1156" height="1190" rx="200" fill="#00A1F6"/>
                        <path d="M972 361.384C944.066 373.761 914.029 382.012 882.342 385.911C914.561 366.787 939.341 336.285 950.973 300.246C920.829 317.919 887.439 330.895 851.905 337.735C823.532 307.658 783.061 289 738.225 289C652.094 289 582.292 358.203 582.292 443.523C582.292 455.594 583.702 467.359 586.364 478.777C456.794 472.269 341.876 410.678 264.994 317.2C251.486 340.038 243.887 366.787 243.887 395.014C243.887 448.66 271.355 495.878 313.237 523.706C287.671 522.921 263.61 515.814 242.543 504.409C242.543 504.875 242.543 505.567 242.543 506.219C242.543 581.185 296.308 643.601 367.575 657.814C354.546 661.381 340.785 663.364 326.598 663.364C316.524 663.364 306.716 662.219 297.213 660.516C317.056 721.774 374.628 766.557 442.833 767.874C389.467 809.25 322.26 834.03 249.17 834.03C236.541 834.03 224.204 833.312 212 831.834C281.03 875.552 363.023 901.184 451.031 901.184C737.813 901.184 894.692 665.68 894.692 461.383C894.692 454.689 894.479 448.021 894.159 441.434C924.782 419.821 951.159 392.539 972 361.384Z" fill="white"/>
                        </svg> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Resources;
