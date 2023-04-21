import { useRef } from "react";
// import SimpleBar from "simplebar-react";
import { useDraggable } from "react-use-draggable-scroll";
import cn from "classnames";
import styles from "./Main.module.sass";
import styles2 from "./Main.module.scss";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { development } from "@/mocks/development";
import Link from "next/link";

type DevelopmentProps = {};

const Main = ({}: DevelopmentProps) => {
//   const ref =
//     useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
//   const { events } = useDraggable(ref);

  return (
    <div className={cn("section", styles.section)} style={{ paddingTop: 130 }}>
      <div className={cn("container-wide", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Vince Chain Terms of Service</h2>
        <div className={styles2.tou}>
          <div className={styles2.inner_tou}>
            <p>Please read these terms carefully before using Vince Chain because they govern how you use and navigate Vince Chain (hereinafter referred to as “Vince Chain Services” or just “the Service or Product”). By the end of this Terms, acknowledge that you have read and accepted the terms and conditions by clicking the “accept” button.</p>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>1. Introduction</p>
                <p>This Vince Chain Terms of Service (hereinafter referred to as “these Terms”) you are about to accept is between you (“user” or “your”), Vince Chain Labs, and its operators worldwide as expressed in these Terms. By accepting these Terms in whatever way, whether by downloading or clicking on “Accept”, you confirm, approve, and sign a legally binding agreement to whatever terms and conditions are stipulated in these Terms. </p>
                <p>In addition to using some features and products of Vince Chain, you may be subject to specific additional terms and conditions applicable to the specific features and products. Therefore, you must carefully read these Terms as they contain important legally binding provisions, including arbitration provisions that require any disputes between Vince Chain and its users to be resolved through individual arbitration rather than by a judge or jury in court. The arbitration provision set in these Terms complies with Article 10, which requires that all claims be resolved by any legal means possible: Forum, Arbitration, Class Action Waiver, etc.</p>
                <p>By accessing or using Vince Chain services in whatever way possible, you acknowledge that you pledge to these Terms (revised or not) and all the terms incorporated therein effective as of the date these Terms are updated. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>2. Definitions</p>
                <p>For the purposes of these Terms, the words with initialized capital letters have meanings defined under these Terms. The following definitions shall have similar meanings regardless of whether they appear in singular or plural.</p>

                <p className={styles2.title2}>Vince Chain</p>
                <p>(collectively represented subsequently as “us,” “our,” or “we”)  A layer-1 blockchain and ecosystem comprising Vince Chain websites (whose primary domain name is but is not limited to <a href="https://www.vincechain.com/">https://www.vincechain.com/</a>), mobile and web applications, clients, smart contracts, nodes, and other centralized and decentralized applications developed under Vince Chain Labs, including Vince Chain NFTs, EVM smart contracts, launchpad, DEX, Blithe Wallet, remote work, and onramps; which are not limited to applications whitelisted from the Cosmos and Ethereum ecosystems. Peradventure, there are inconsistencies between the above mentioned applications or protocols and these Terms, the Terms of such application or protocol shall prevail.</p>

                <p className={styles2.title2}>Accounts</p>
                <p>A virtual registry that is peculiar to respective users of Vince Chain who interact with the blockchain using nodes and digital wallets. Accounts allow users to interact with the Vince Chain mainnet and testnet. Users may, through accounts, build decentralized applications or perform certain transactions on Vince Chain.</p>

                <p className={styles2.title2}>Validators</p>
                <p>An essential part of Vince Chain that is responsible for maintaining the network and its ecosystem, ensuring that secure services are rendered to the community.</p>

                <p className={styles2.title2}>Vince Chain Services</p>
                <p>(“the Service” or “the Services”) Vince Chain “as a” blockchain and ecosystem, including its website, web and mobile applications, features and products (including those yet to be included in the ecosystem at the time of writing), clients and nodes, DAO governance, and the community at large.</p>

                <p className={styles2.title2}>Terms of Service</p>
                <p>(referred to as “these Terms” or “terms and conditions” ). The Terms that form the entire agreement between You and Vince Chain regarding the use of its Service.</p>

                <p className={styles2.title2}>Third-party</p>
                <p>Any service or content (including data, information, product, tools, fiat gateways, features, links, or service) provided by a third party that may be displayed, included, or made available on Vince Chain.</p>

                <p className={styles2.title2}>Website and Platform </p>
                <p>Vince Chain accessible from “<a href="https://www.vincechain.com/">https://www.vincechain.com/</a>," including all the instructions, announcements, statements, letters of consent, and Content that have been and will be subsequently released by Vince Chain Labs and its subsidiaries (related directly or through third-party whitelisting as presented on <a href="https://www.vincechain.com/">https://www.vincechain.com/</a>) or through its Help Center.</p>

                <p className={styles2.title2}>“You, User, Your”</p>
                <p>The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable, who meet the criteria and conditions stipulated by Vince Chain through these Terms.</p>

                <p className={styles2.title2}>Digital Currency</p>
                <p>Refers to any virtual currency traded or used to perform transactions on Vince Chain and its Product. Just like any digital asset, Digital Currencies' values (as stipulated in these Terms) may experience regular significant fluctuations, which could pose substantial risks of losses during interactions (buying, selling, holding, investing) with these Digital Currencies.</p>
                <p className={styles2.olist}>By using Vince Chain services and its digital currencies, you acknowledge and agree that:
                    <ol>
                        <li>You know the risks associated with using or transacting with digital currencies.</li>
                        <li>You bear the consequences of the risks associated with using digital currencies on Vince Chain.</li>
                        <li>Vince Chain is not by any means liable for the outcomes of your use of digital currencies in its ecosystem.</li>
                    </ol>   
                </p>
                
                <p className={styles2.title2}>Vince Chain Operators</p>
                <p>Refer to all parties that run Vince Chain nodes, including but not limited to legal persons, not-yet-whitelisted institutions, and teams that contribute to the Vince Chain ecosystem, including validators, delegators, and community members who hold Vince Chain Coin (“Vince” or “VCE”) and are responsible for their actions on Vince Chain.</p>
                <p>For convenience, unless otherwise stated, references to “Vince Chain” and “we” in these Terms specifically mean Vince Chain Operators. Under these terms, Vince Chain operators may change as Vince Chain evolves, in which case, the operators shall perform their duties under these Terms (updated or not) and provide services to you, as such changes or evolution do not affect your obligations and rights under these Terms. Furthermore, Vince Chain may expand its ecosystem over time, in which case, continual usage of Vince Chain implies that you agree to future terms under Vince Chain’s expansion.</p>
                
                <p className={styles2.title2}>Decentralized Exchange (DEX)</p>
                <p>A non-custodial peer-to-peer marketplace in the Vince Chain ecosystem, where users can trade digital assets.</p>
                
                <p className={styles2.title2}>Digital Assets</p>
                <p>Digital Currencies, their derivatives, or other types of digitalized assets with a certain value on Vince Chain.</p>
                
                <p className={styles2.title2}>Fiat Partner</p>
                <p>Any third-party service fiat provider partnering with Vince Chain directly, through whitelisting, or via its ecosystem.</p>
                
                <p className={styles2.title2}>DApp</p>
                <p>Decentralized application. Apps running smart contracts on Vince Chains that may be included in the Vince Chain ecosystem.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>3. About These Terms</p>
                <p>These Terms constitute a legal agreement and create a binding contract between you and Vince Chain (including the Service provided by Vince Chain Labs and its operators).</p>

                <p className={styles2.title2}>3a. Supplementary Terms</p>
                <p>Due to the Vince Chain’s rapid growth and development, these Terms between you and Vince Chain do not cover all your rights and obligations on Vince Chain and do not completely align with growing demands from future integration on the blockchain. So therefore, additional agreements or Terms entered separately between you and the Service (be it the Privacy Policy, Platform Instructions, etc.) shall be deemed supplementary and shall become an integral part of these Terms, bearing similar legal effect. By your continued usage of Vince Chain, you accept the supplementary terms of the specific Service in conjunction with the Terms herein.</p>

                <p className={styles2.title2}>3b. Prohibition of Use</p>
                <p>Vince Chain does not accept users from economically sanctioned jurisdictions. By accessing and using Vince Chain, you admit that you do not represent or have interest or warrant from any trade embargoes or economically sanctioned jurisdictions in the United Nations Security Council sanctions list, The list of nationals of The Foreign Assets Control of the US Department of Treasury maintained by OFAC, or the list of persons or entities who have been denied by the US Department of Commerce. Vince Chain reserves the right to determine its own markets and jurisdiction in which it may operate and manage its Services at its sole discretion. Vince Chain also reserves the right to restrict or refuse, when it deems necessary, the operation and conduct of its Services in any country or region.</p>

                <p className={styles2.title2}>3c. Changes to These Terms</p>
                <p>Vince Chain reserves the right to change or modify these Terms whenever it deems fit. We will make efforts to communicate to you if any changes are made to these terms through occasional notices or press releases or by updating the “Last Updated” date at the beginning of these Terms. It is your sole responsibility to review the Terms from time to time to view such changes and to ensure that you understand the terms and conditions that apply when you access or use the Service.</p>
                <p>The changes or modifications made to these Terms will become effective upon publication on the website or any form of its release. Your continual usage of Vince Chain Services confirms that you accept the modified Terms. You must stop using Vince Chain Services if you do not agree to the modified Terms. We advise you to regularly review these Terms to have a clearer understanding of the Terms that apply to using and accessing Vince Chain Services.</p>

                <p className={styles2.title2}>3d. Vince Chain Service Rights</p>
                <p>We reserve the right, but not the obligation, to (i) monitor the Service for violations of these Terms; (ii) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms, including without limitation, reporting such user to law enforcement authorities; (iii) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Content or any portion thereof; (iv) in our sole discretion and without limitation, notice, or liability, to remove from the Service or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (v) otherwise manage the Service in a manner designed to protect our rights and property and to facilitate the proper functioning of the Service.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>4. About Vince Chain</p>
                <p>Vince Chain is a layer-1 public blockchain that empowers peer-to-peer Web3 services. Vince Chain does not outrightly provide wallet services, manage digital assets through crypto exchanges, or act as a financial institution or creditor of any kind. You can only interact with the Vince Chain network and its ecosystem by connecting your crypto wallet. Vince Chain does not have custody or control of your digital assets or the digital assets you are interacting with. Vince Chain does offer financial help or support of any kind to execute or effectuate purchases, sales, or transfers of tokens available on its network or through its ecosystem.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>5. Account Registration, Eligibility, and Requirements</p>
                
                <p className={styles2.title2}>5a. User Representation</p>
                <p>By using Vince Chain Services, you represent and warrant that: (i) you have the legal capacity and you agree to comply with these Terms; (ii) you are not a minor in the jurisdiction in which you reside; (iii) you will not access the Service through automated or non-human means, whether through a bot, script or otherwise; (iv) you will not use the Service for any illegal or unauthorized purpose; and (v) your use of the Service will not violate any applicable law or regulation.</p>
                <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Service (or any portion thereof).</p>

                <p className={styles2.title2}>5b. Registration Terms</p>
                <p>Vince Chain provides peer-to-peer non-custodial services and therefore does not require you to register as a user, developer, or delegator. You need a third-party wallet to interact with the Vince Chain network. However, you are solely responsible for your activity using third-party wallets of any kind on Vince Chain. Your security on Vince Chain when using a third-party wallet is solely your responsibility and Vince Chain shall not be held responsible for any adverse situation arising from using any third-party wallet. You bear full responsibility for verifying the identity, legitimacy, and authenticity of tokens that you acquire from third parties. We do not claim the identity, legitimacy, functionality, or authenticity of users or tokens (and any content associated with such tokens) visible on the Service.</p>
                <p>Notwithstanding, you must register to become a validator on Vince Chain. However, this form of registration is not similar to the traditional KYC methods. All you need to do is broadcast a “create-validator” transaction to the network’s governance. A “create-validator” transaction is one in which a candidate fills out a compulsory form with some primary information such as validator address, public key, self-bonding amount, etc. You can see more on Vince Chain’s technical documentation, which you’ll find on the landing page of its website “<a href="https://www.vincechain.com/">https://www.vincechain.com/.</a>” You agree to provide complete and accurate information when opening a “create-validator” account and agree to timely update any information you provide to the governance network to maintain the integrity and accuracy of the information.</p>

                <p className={styles2.title2}>5c. Eligibility Terms</p>
                <p>By accessing or using Vince Chain Services, you affirm and warrant that as an individual: (i) you are at least 18 or are of legal age to form a binding contract under applicable laws; (ii) you use Vince Chain Services under a parent or guardian if you are below 18; (iii) and as a legal person or any other organization, you have the sufficient legal capacity and authorizations to enter into these Terms; (iv) you have not been previously penalized by the Vince Chain DAO governance; (v) you are not resident, located in or otherwise attempting to access the Vince Chain or its Services from, or otherwise acting on behalf of a person or legal entity that is resident or located in, a “restricted location” or jurisdiction. In this case, “restricted location” shall include jurisdictions that do not permit the use or distribution of blockchain or crypto services.</p>
                <p>Entering into these Terms on behalf of a legal entity or institution or as an employee or agent of a legal entity, (i) you affirm that you have all the necessary qualifications and authorizations from such entity to use and access Vince Chain Services on their behalf; and (ii) your use of Vince Chain Services shall not breach any or all laws and regulations applicable to you or the legal entity on whose behalf you are acting, including but not limited to regulations on anti-money laundering (AML), anti-corruption, and counter-terrorist financing.</p>
                <p>You must understand that legal requirements may differ for different countries or jurisdictions, and this may affect Vince Chain Services thereof. Also, some Vince Chain features or products may be restricted in certain jurisdictions or to certain individuals. While we may not know who uses Vince Chain due to the high level of anonymity, you confirm by accepting these Terms that you do not fall short of any legal concerns as stipulated herein. You shall be responsible for informing yourself about and observing any restrictions and/or requirements imposed with respect to the access to and use of Vince Chain in the respective country in which you access or use (by you or on your behalf) Vince Chain products or features. Vince Chain Labs and its operators reserve the right to change, modify or impose additional restrictions with respect to the access to and use of Vince Chain Services occasionally at their discretion without any prior notice.</p>

                <p className={styles2.title2}>5d. Account Security</p>
                <p>Vince Chain is committed to maintaining the security of its users, delegators, and validators. However, as a decentralized service, it is the duty of the Vince Chain community to maintain the network and protect its ecosystem according to the laws and regulations of its DAO governance protocol. You shall be solely responsible for keeping your assets, including those in your digital or hardware wallet, safe; this includes keeping safe your public and private keys, wallet seed phrase, passwords, or any link between your assets, identity, and the Vince Chain network.</p>
                <p>Vince Chain will not be held accountable, legally or otherwise, for situations arising from the loss of digital assets through third-party wallets or fiat services linked to its network. Vince Chain will not be liable for any loss or consequences caused by authorized or unauthorized use of your wallet account credentials, including but not limited to information disclosure, information release, consent, or submission of various rules and agreements by clicking on the website, connecting your wallet, interacting with the tokens and features or products in its ecosystem, etc. </p>
                <p>By connecting your wallet and using Vince Chain Services, you hereby agree that: (i) you agree to immediately notify us if you discover or otherwise suspect any security issues on the Service or your Account to <a href="mailto:legal@vincechain.com">legal@vincechain.com</a>; (ii) you will strictly abide by all of Vince Chain’s security mechanisms or procedures, including those regarding authentication, trading, charging, and withdrawal; and (iii) you will take appropriate steps to disconnect your wallet from Vince Chain at the end of each visit or use.</p>

            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>6. Vince Chain Services</p>
                <p>Upon connecting a valid wallet and funding it with the sufficient amount of token required on the platform, you may use Vince Chain to perform transactions, build dApps or smart contracts, as well as perform many other Vince Chain Services, including but not limited to staking, transaction validation, delegation, DAO governance, farming, etc., in accordance with these Terms and rule guiding the use and application of the respective services in the Vince Chain ecosystem.</p>
                <p>Vince Chain reserves the right to:
                    <ul className={styles2.ulist}>
                        <li>provide, modify, or terminate, at its discretion, any of its Services; and</li>
                        <li>allow or prohibit some Users’ addresses from using any of its Services in accordance with relevant rules and guidelines stipulated by its DAO governance protocol.</li>
                    </ul>
                </p>
                <p>Vince Chain, alongside its community, reserves the exclusive power to approve digital assets listed and used on its network; and may add or remove any digital assets at its sole discretion whenever it deems necessary. Regarding the additions, removals, or amendments of digital assets, Vince Chain may notify users in advance in whatever method it chooses. However, Vince Chain is not obliged to notify Users and shall have no liability to Users in connection with such updates.</p>
            </div>            

            <div className={styles2.tou_list}>
                <p className={styles2.title}>7. Guidelines on Using the Service</p>
                
                <p className={styles2.title2}>7a. License To Access and Use the Service and Content</p>
                <p>You are hereby granted a revocable, limited, royalty-free, non-exclusive, non-transferable, and non-sublicensable license to access and use Vince Chain and its products with any of your computer or Internet-compatible devices for your personal purposes, provided you regularly comply with all of the terms and conditions stated in these Terms.</p>
                <p>You may not access or use Vince Chain Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                <p>You violate these Terms if you expressly do any of the prohibited acts above. Vince Chain reserves the right to instruct and update you on how to access and use its platform at its discretion, including rights not expressly stated in these Terms. Vince Chain prohibits you from using its Services in a way it does not authorize you to as stipulated in these Terms.</p>
                <p>By using Vince Chain, you agree that you or the entity you represent do not own any ownership and intellectual property rights on Vince Chain. All the text, graphics, user interfaces, copies, visual interface, photos, sounds, diagrams, charts, codes (including HTML), programs, software, products, information, and documents, as well as the design, structure, selection, coordination, expression, environment, and layout of any content on Vince Chain or provided through Vince Chain, are exclusive properties of Vince Chain, Vince Chain Labs, and its operators or affiliates.</p>
                <p>Vince Chain reserves the rights to any feedback, suggestion, update, integration, resources, and information (hereinafter collectively referred to as “Update”) published and distributed to you through email, blog, website, or any other ways. You hereby transfer all rights and ownership of the Updates and all related intellectual property rights to Vince Chain. You have no right and hereby waive any request for acknowledgment or compensation, or modification based on any Update.</p>

                <p className={styles2.title2}>7b. Restrictions and Prohibitions When Using the Service</p>
                <p className={styles2.olist}>By accessing and using Vince Chain, you agree to the following restrictions and prohibitions:
                    <ol>
                        <li>All your activities on Vince Chain must comply with the requirements applicable by the law of your region, including those of these Terms and various instructions and regulations stipulated by Vince Chain;</li>
                        <li>You shall not circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein;</li>
                        <li>Your activities and usage of Vince Chain shall not violate public interests or the legitimate interests of others in your region, including actions that would disrupt, negatively affect, or prohibit other Users from using Vince Chain Services;</li>
                        <li>You should not upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of Vince Chain Services;</li>
                        <li>You must not use the Services in a manner inconsistent with any applicable laws or regulations;</li>
                        <li>You must not use the Service for market manipulation of any sort, including but not limited to pump and dump schemes, wash trading, self-trading, front running, quote stuffing, and spoofing or layering, whether or not it is prohibited or accepted by law;</li>
                        <li>You are not permitted to modify, replicate, duplicate, copy, download, store, further transmit, disseminate, transfer, disassemble, broadcast, publish, alter, or remove any copyright statement, license, sub-license, or sell, photocopy, redesign, rent, lease, white-label, modify security protocols,  attract the interest of security personnel, or take advantage of any part of Vince Chain properties in any way possible;</li>
                        <li>You shall not systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without expressly written permission from us;</li>
                        <li>You may not:

                            <ul className={styles2.aList}>
                                <li>engage in unauthorized framing of or linking to the Services, or engage in any automated use of the system, such as using scripts to send comments or messages or using any data mining, robots, bots, spiders, web crawlers, or similar manual or automatic data gathering and extraction tools.</li>
                                <li>attempt to access any part or feature of Vince Chain (without authorization or connect to the blockchain systems, servers, or any part of the Vince Chain network) by hacking, password mining, or any other unlawful or prohibited means;</li>
                                <li>probe, scan, or test the vulnerabilities of the Vince Chain network or any protocol or dApp connected to the network, or violate any security or authentication measures of the blockchain and any network connected to blockchain;</li>
                                <li>reverse-engineer, track, or plan to uncover any information of any other Users or visitors of Vince Chain;</li>
                                <li>take any actions or use any programs, devices, or software that disrupt or interfere with the activities on the blockchain by imposing an unreasonable or disproportionately large load on the blockchain or that of any smart contract or systems connected to the blockchain; </li>
                                <li>make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited emails or creating user accounts by automated means or under false pretenses;</li>
                                <li>trick, defraud, or mislead other users and us, especially in any attempt to learn sensitive account information such as user passwords;</li>
                                <li>disparage, tarnish, or otherwise harm, in our opinion, Vince Chain Services or use any information obtained from the Services in order to harass, abuse, or harm another person;</li>
                                <li>take improper use of our support services or submit false reports of abuse or misconduct;</li>
                                <li>delete the copyright or other proprietary rights notice from any Content;</li>
                                <li>attempt to impersonate another user or person or use the username of another user;</li>
                                <li>upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including, without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "PCMs");</li>
                                <li>harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you;</li>
                                <li>attempt to bypass any measures of the Services designed to prevent or restrict access to Vince Chain Services or any portion of the Services;</li>
                                <li>copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code;</li>
                                <li>use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
                            </ul>
                        </li>
                    </ol>   
                </p>
                <p>Prohibited activities apply to all Vince Chain users, including but not limited to validators, delegators, and community members on Vince Chain. You agree that Vince Chain has the complete right to investigate any violation of these Terms, determine whether you have violated these Terms, and take actions under relevant regulations without your consent or prior notice. Examples of such actions include but are not limited to penalizing you, freezing your account, publishing the alleged violations and actions that have been taken, deleting any information you published that are found to be violations, and reporting your address to relevant authorities.</p>
                
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>8. Terms on Content Submissions</p>

                <p>Please review this section and the "Guidelines on Using the Service" section carefully prior to using Vince Chain Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content on or through Vince Chain Services.</p>
                <p>By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (generally referred to as "Submissions"), you agree to assign to us all intellectual property rights on such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without prior notice, acknowledgment, or compensation to you.</p>
                <p>You are responsible for what you post or upload on Vince Chain through its community channels, blog, GitHub repository, DAO governance protocols, or any other method you may upload submissions on Vince Chain. By sending us Submissions through any part of the Services you:
                    <ul className={styles2.romanlist}>
                        <li>confirm that you have read and agree with our "Guidelines on Using the Service" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                        <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
                        <li>warrant that any such Submission is original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
                        <li>warrant and represent that your Submissions do not constitute confidential information</li>
                    </ul>
                </p>
                <p>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>9. User-Generated Content Terms</p>

                <p>Vince Chain Services may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (hereafter collectively referred to as "Content"). Other users of Vince Chain Services, including third-party websites, may be able to view your Content on Vince Chain. Therefore, your published Content may be treated in accordance with Vince Chain’s Privacy Policy.</p>

                <p>When you create any Content, you represent and warrant that:
                    <ul className={styles2.romanlist}>
                        <li>The distribution, transmission, display (public or private), or performance, plus the accessing, downloading, or copying of your Content, will “and do” not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of Vince Chain operators.</li>
                        <li>You are the legitimate owner of or have the necessary licenses, rights, consents, and permissions to use and to authorize other users of Vince Chain Services and us to use your Content in any manner contemplated by the Services and these Terms.</li>
                        <li>Your Content is not false, inaccurate, or misleading.</li>
                        <li>Your Content is not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                        <li>Your Content is not obscene, lewd, lascivious, filthy, violent, harassing, libelous, or slanderous as determined by us.</li>
                        <li>Your Content does not violate the privacy or publicity rights of any third party.</li>
                        <li>Your Content does not otherwise violate or link to material that violates any provision of these Terms or any applicable law or regulation.</li>
                    </ul>
                </p>
                <p>Any use of Vince Chain Services in violation of the foregoing violates these Terms and may result in, among other things, termination or suspension of your rights to use Vince Chain and Vince Chain Services.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>10. Third-Party Websites and Content Terms</p>
                <p>Vince Chain is a peer-to-peer (P2P) Web3 Service committed to helping you deploy interoperable decentralized applications (dApps) and smart contracts that bridge between Ethereum Virtual Machines (EVM) and the Cosmos blockchain. Vince Chain Services may contain (via the Website “<a href="https://www.vincechain.com/">https://www.vincechain.com/</a>”) links to other websites (collectively called "Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content").</p>
                <p>Vince Chain may not investigate, monitor, or check for accuracy, appropriateness, or completeness of Third-Party Websites and Third-Party Content, including but not limited to tokens, applications, products, or tools in its ecosystem, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from Vince Chain, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.</p>
                <p>The availability or inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave Vince Chain and access a Third-Party Website or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms no longer cover you. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relate to any applications you use or install from the Services.</p>
                <p>You are solely responsible for corroborating the legitimacy and authenticity of tokens you purchase or hold from third parties available or connected, directly or indirectly, to Vince Chain Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases, which are exclusively between you and the applicable third party. We do not and cannot guarantee that any tokens available on Vince Chain will always remain available to be bought, sold, or transferred.</p>
                <p>You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites, and you shall not hold us responsible for any adverse concerns or problems caused by your purchases, sales, transfers, and investments made from these Third-Party Websites, platforms, tokens, applications, products, tools, and so forth on Vince Chain. Additionally, you shall not hold us responsible for any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>11. Privacy Policy</p>
                <p>We care about your data privacy and security. So, please review our <Link href="/privacy-policy">Privacy Policy</Link> alongside these Terms. By using Vince Chain Services, you agree to be bound by our <Link href="/privacy-policy">Privacy Policy</Link> as well as these Terms. Vince Chain Services is located in Germany; accessing our Services from any other region of the world may attract different laws or requirements governing personal data collection, use, or disclosure that differ from applicable laws in Germany. You consent that by your continued usage of Vince Chain, you accept that your data be transferred and processed in Germany.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>12. Terms on Account Termination</p>
                <p>These Terms shall remain in full force and effect while you use Vince Chain Services. <br />WITHOUT ANY LIMITATION TO THE PROVISIONS OF THESE TERMS, WE RESERVE EVERY RIGHT TO, AT OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES, INCLUDING BLOCKING CERTAIN IP ADDRESSES, TO ANY PERSON FOR ANY OR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR AGREEMENT CONTAINED IN THESE TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, AT OUR SOLE DISCRETION.</p>
                <p>If we terminate or suspend your account for any reason, you are prohibited from connecting a new or old wallet or registering or creating a new account under your IP address, blockchain address, public or private key (fake or original), or the blockchain address or private or pubic keys of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account (including Validator or community membership accounts), we reserve the right to take appropriate legal action, including, without limitation, pursuing civil, criminal, and injunctive redress.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>13. Content Modifications and Interruptions</p>
                <p>By using Vince Chain Services, you agree that we reserve the right to change, modify, or remove the Content of our Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
                <p>We cannot guarantee that Vince Chain Services will be available at all times, as we may experience hardware, software, or other problems or need to perform maintenance related to the Service, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Service at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Service during any downtime or discontinuance of the Service. Nothing in these Terms will be construed to obligate us to maintain and support Vince Chain Services or to supply any corrections, updates, or releases in connection thus.</p>                
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>14. Content Errors and Inaccuracies</p>
                <p>There may be information on Vince Chain that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time without prior notice.</p>                
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>15. Disclaimer</p>
                <p className={styles2.title2}>15a. Disclaimer on Using Vince Chain Services</p>
                <p>VINCE CHAIN SERVICES ARE PROVIDED ON AN “AS-IS” AND “AS-AVAILABLE” BASIS. YOU AGREE THAT USING VINCE CHAIN SHALL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENTS.</p>
                <p>WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE CONTENT OF VINCE CHAIN SERVICES OR THE CONTENT OF ANY THIRD-PARTY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE VINCE CHAIN, AND WE WILL NOT ASSUME ANY LIABILITY OR RESPONSIBILITY FOR ANY
                    <ul className={styles2.ulist}>
                        <li>ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,</li>
                        <li>PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES,</li>
                        <li>ANY UNAUTHORIZED ACCESS TO OR USE OF OUR MAINNET, SERVERS, NETWORK, APPLICATIONS, FEATURES, AND TOOLS, AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,</li>
                        <li>ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES,</li>
                        <li>ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR</li>
                        <li>ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. </li>
                    </ul>
                </p>
                <p>WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</p>                

                <p className={styles2.title2}>15b. Disclaimer on Staking the Vince Chain Coin (“Vince” or “VCE”)</p>
                <p>Staking is one of the various ways to interact with the Vince Chain ecosystem. Users of Vince Chain can stake the Vince Chain’s native and governance coin (collectively called “Vince” or “VCE”) and earn rewards from transaction fees. VINCE CHAIN IS COMMITTED, THROUGH ITS OPEN-SOURCE COMMUNITY, TO MAKING ITS STAKING SERVICE ACCESSIBLE AND SECURE BY ALL MEANS WITHIN ITS POWERS. HOWEVER, WE DO NOT AND CANNOT GUARANTEE THAT YOUR STAKED TOKENS WILL BE VISIBLE IN YOUR WALLET AND/OR BE SUCCESSFUL OR WITHDRAWN AS AT WHEN DUE.</p>
                <p>WE SHALL NOT BE LIABLE OR RESPONSIBLE FOR ADVERSE SITUATIONS CAUSED BY IMPERMANENT LOSS OR LOSS OF FUNDS DUE TO BUGS OR VULNERABILITIES ON THE THIRD-PARTY WALLET SERVICES OR FIAT GATEWAYS YOU USE, LINKED TO US OR NOT. BY USING THE STAKING SERVICE ON VINCE CHAIN, YOU AGREE THAT YOU WILL BE SOLELY RESPONSIBLE AND LIABLE FOR YOUR TOKENS AND STAKES DURING THE LOCKING PERIOD AND BEAR THE RISKS ASSOCIATED WITH STAKING. YOU ALSO AGREE THAT YOU UNDERSTAND THE RISKS INVOLVED IN STAKING AND ARE READY TO BEAR THE CONSEQUENCES WITHOUT INVOLVING VINCE CHAIN OR VINCE CHAIN LABS.  Vince Chain shall not be liable to losses due to bugs or security glitches, or loss of funds from the liquidity pool or network. We shall not be held liable for penalties caused by validators to whom you have delegated your digital assets or tokens. You agree that by choosing a specific validator to run nodes on your behalf, you understand the risks involved and have done the necessary due diligence.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>16. Limitation of Liability</p>
                <p>IN NO EVENT WILL VINCE CHAIN, ITS AGENTS, AFFILIATES, OR DEVELOPERS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO $100.00 USD. CERTAIN UNITED STATES LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>17. Indemnification</p>
                <p>By regularly using Vince Chain, you agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (i) the use of Vince Chain Services; (ii) breach of these Terms; (iii) any breach of your representations and warranties set forth in these Terms; (iv) your violation of the rights of a third party, including but not limited to intellectual property rights; or (v) any overt harmful act toward any other user of Vince Chain Services with whom you connected via Vince Chain or its approved communities. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>18. User Data</p>
                <p>We reserve the right and obligation to maintain certain data you transmit to Vince Chain for the purpose of managing the performance of the Service, as well as data relating to your use of the Service. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Service. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>19. Electronic Communication, Transactions, and Signatures</p>
                <p>Accessing and using Vince Chain Services, sending us emails, and completing online forms constitute electronic communications. By accessing and using Vince Chain (including visitation or creating an Account), you consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications provided by us to you electronically, via email, and on the Service satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS AND TO THE ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA VINCE CHAIN SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>20. Miscellaneous</p>
                <p>These Terms and any policies or operating rules posted by us on Vince Chain or with respect to Vince Chain constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. These Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions. You agree that these Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms and the lack of signing by the parties hereto to execute these Terms.</p>
            </div>

            <div className={styles2.tou_list}>
                <p className={styles2.title}>21. Contact Us</p>
                <p>For complaint and dispute resolution regarding the access and use of Vince Chain or Vince Chain Services or to receive further information or feedback regarding the access and use of the Service, please contact us at <a href="legal@vincechain.com">legal@vincechain.com.</a> </p>                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
