import cn from "classnames";
import styles from "./Community.module.sass";
import styles2 from "./Community.module.scss";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";
import { socialList } from "@/constants/social";

// const community = [
//     {
//         value: "$110M",
//         content:
//             "Stay current on the latest Onix project developments, news, and content, updated daily.",
//     },
//     {
//         value: "90M+",
//         content:
//             "Stay current on the latest Onix project developments, news, and content, updated daily. Stay current on the latest Onix project developments, news, and content, updated daily.",
//     },
//     {
//         value: "220K+",
//         content:
//             "Stay current on the latest Onix project developments, news, and content, updated daily.",
//     },
// ];

type CommunityProps = {};

const Community = ({}: CommunityProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("container-large", styles.container)}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <div className={styles.details}>
                        <div className={cn("h2", styles.title)}>
                            Connect with the community.
                        </div>
                        <div className={styles.info}>
                            Learn from other developers and contributors in the community.
                        </div>
                    </div>
                    <div className={styles2.social_container}>
                        <div className={styles2.social}>
                            {socialList.map((item, i) => (
                                <a key={i} target="_blank" rel="noreferrer" href={item.slug}>
                                <button>{item.icon}</button>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.list}>
                {community.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h2", styles.value)}>
                            {item.value}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div> */}
        </div>
    </div>
);

export default Community;
