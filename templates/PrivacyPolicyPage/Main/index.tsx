import { useRef } from "react";
// import SimpleBar from "simplebar-react";
import { useDraggable } from "react-use-draggable-scroll";
import cn from "classnames";
import styles from "./Main.module.sass";
import styles2 from "./Main.module.scss";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import Link from "next/link";

const Main = ({}) => {
  return (
    <div className={cn("section", styles2.section)} style={{ paddingTop: 130 }}>
      <div className={cn("container-wide", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Vince Chain Privacy Policy</h2>
        <div className={styles2.tou}>
          <div className={styles2.inner_tou}>
            <p>
              This Privacy Policy describes how Vince Chain (hereinafter
              referred to as “we,” “us,” or “our”) might collect, store, share,
              use, or process your information or data when you use Vince Chain
              Services (collectively referred to as “our Service,” “Services,”
              or “the Service”).
            </p>
            <br />
            <p className={styles2.ulist}>
              By using our Service, we mean:
              <ul>
                <li>
                  Visiting our website (“
                  <a href="https://vincechain.com">https://vincechain.com</a>”)
                  and using any of the blockchain features, tools, digital
                  assets, white-listed software or program, products, etc.,
                  linked to our website.
                </li>
                <li>
                  Engaging with our ecosystem, including but not limited to our
                  community, DAO governance, liquidity pool, mainnet, testnet,
                  or any other related ways such as marketing, partnerships, or
                  events, etc.
                </li>
              </ul>
            </p>
            <br />

            <p>
              This Privacy Policy will help clear your questions and concerns
              about how we might use and process your personal information or
              data, thus helping you understand your rights and obligations,
              including legitimate concerns that affect you when you use Vince
              Chain Services.
            </p>
            <br />
            <p>
              For further questions or doubts, you can reach us at{" "}
              <a href="mailto:privacy@vincechain.com">
                privacy@vincechain.com.
              </a>
            </p>

            <h2 className={cn("h2", styles2.title3)}>
              Key Points and Summary of Our Privacy Policy
            </h2>

            <p>
              This key point summary details what to expect in our Privacy
              Policy and the questions we have answered to help you understand
              the dos and don’ts and your rights and obligations while you use
              Vince Chain.
            </p>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                1. What personal information do we collect?
              </p>
              <p>
                When you visit, use, or navigate our Service, the choices you
                make, the links you navigate, and the products, features, and
                tools you use— the information we might collect depends on how
                you interact with Vince Chain. You can learn more about this as
                you go down the drain in this Privacy Policy.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                2. Do we process any sensitive personal information?
              </p>
              <p>
                Vince Chain is a decentralized Web3 service. We do not process
                sensitive personal information like payment data; all your
                activities —private or public— are controlled by you and at your
                sole discretion.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                3. Do we receive any information from third parties
              </p>
              <p>
                Vince Chain does not receive or buy your information from third
                parties. All your information with us is organic and
                legitimately approved by you.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                4. Why we process your information
              </p>
              <p>
                We process any information you legitimately provide to Vince
                Chain to provide, improve, and administer Vince Chain Services,
                communicate with you for security and fraud prevention, and to
                comply with the law. In situations where we may need your
                information for other purposes other than that stated above, we
                may do so with or without your consent.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                5. In what situations and with which entities does Vince Chain
                share your personal information?
              </p>
              <p>
                Depending on the situation, we may share legitimately provided
                information with specific third parties or partners. As you read
                through, you’ll learn more about this, including when and with
                whom we share your personal information.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                6. How does Vince Chain protect your information?
              </p>
              <p>
                While it is not ideally possible to completely protect user
                information on any electronic transmission protocol, Vince Chain
                employs organizational and high-tech methodologies to safeguard
                user information online. We, however, do not promise or
                guarantee 100% user information security. We do not promise or
                guarantee also, that cybercriminals or unauthorized third
                parties will not be able to bypass our firewalls or security
                protocols to illegitimately access, steal, or modify your
                information on Vince Chain.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                7. What are your rights on Vince Chain?
              </p>
              <p>
                Your privacy rights on Vince Chain depend on where you are
                located geographically. Applicable privacy laws, which may mean
                you have certain rights regarding your personal information, may
                vary from one geographical location or the other.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                8. Demonstrating your right as a Vince Chain user
              </p>
              <p>
                Though we collect limited personal information legitimately, you
                still possess rights to the information you provide. You may
                easily express or exercise your privacy rights by submitting a
                Data Subject Access Request (DSAR) or by contacting us (“
                <a href="mailto:privacy@vincechain.com">
                  privacy@vincechain.com
                </a>
                ”). We will consider and act upon any request in accordance with
                applicable data protection laws.
              </p>
            </div>

            <p>
              The ball is in your court now; read or browse this privacy policy
              in full to understand your privacy rights as a Vince Chain.
            </p>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                1. What Personal Information Do We Collect and Process?
              </p>
              <p>
                Though a peer-to-peer Web3 service, we may still collect your
                personal information. However, this information shall be given
                to us directly or indirectly. You may read our{" "}
                <Link href="/terms-of-use">Terms of Service</Link> to have a
                better understanding of the information rights you may grant us
                indirectly or automatically.{" "}
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                A. The Personal Information You Disclose to Us
              </p>
              <p>
                We will collect any personal information that you voluntarily
                provide to us. You may provide your personal information to us
                when you sign up or register for any service in our ecosystem or
                product catalog; when you fill out any form requesting your
                information on our Service; or when you participate in Vince
                Chain events that require your information; or when you contact
                us.
              </p>
              <p className={styles2.ulist}>
                The personal information we collect may include the following:
                <ul>
                  <li>
                    <b>Email addresses.</b> You may provide your email address
                    to us when you sign up for our newsletters, blogs, or email
                    updates.
                  </li>
                  <li>
                    <b>
                      Details you provide when you register for Vince Chain
                      Services.
                    </b>{" "}
                    In situations like Vince Chain clients, validation, DAO
                    governance, and delegation, we may collect information
                    regarding your interest in the protocol. information we may
                    need includes
                  </li>
                </ul>
              </p>
              <ul
                className={`${styles2.romanlist} ${styles2.MBromanlist}`}
                style={{ marginLeft: "100px", marginBottom: 10 }}
              >
                <li>Public and private addresses</li>
                <li>Validator website URL</li>
                <li>
                  Validator staking amount, etc. You can learn more about this
                  in our{" "}
                  <a href="https://vincechain.gitbook.io/vince-chain-documentation/">
                    {" "}
                    documentation.
                  </a>
                </li>
              </ul>
              <p>
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>B. Sensitive Information </p>
              <p>
                Vince Chain does not process sensitive information. We do not
                accept online payments directly on our website (“
                <a href="https://vincechain.com">https://vincechain.com</a>”).
                However, we may host third-party payment services through our
                ecosystem and affiliate or partner programs. Third-party payment
                services on our platform or website shall not be understood as
                endorsements of any sort. If you must use “Third Party Websites
                or Services” to purchase or sell digital assets or items or swap
                crypto or fiat on or off Vince Chain, notwithstanding the
                process involved in accessing or using this “Third Party
                Service,” you must understand that you do so at your own risk.
                You shall bear responsibility and liability for adverse concerns
                from using third-party fiat services on Vince Chain. We advise
                that you read the Privacy Policies of third-party payment
                services you use on Vince Chain and properly understand them
                before using their services or interacting with them in any
                possible.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                C. Information Automatically Collected or Indirectly Provided{" "}
              </p>
              <p>
                Vince Chain may collect some personal information automatically.
                Information such as your Internet Protocol (IP) address and/or
                browser and device information is collected automatically or
                provided indirectly when you access, use, or visit Vince Chain
                Services (at “
                <a href="https://vincechain.com">https://vincechain.com</a>”)
                This information we collect does not reveal your specific
                identity (like your name or contact information) but may include
                device and usage information, such as your IP address, browser
                and device characteristics, operating system, language
                preferences, referring URLs, device name, country, location,
                information about how and when you use our Services, and other
                technical information. Assuredly, we basically need this
                information to maintain the security and operation of our
                Services and also for user improvement programs, internal
                analytics, and report purposes.
              </p>
            </div>

            <p style={{ marginTop: 30, marginBottom: 30 }}>
              <b>Note:</b> As a decentralized service, we do not collect
              information through cookies and similar technologies.
            </p>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                D. Other Information We Collect May
              </p>

              <div className={styles2.tou_list879}>
                <h3>Log and Usage Data</h3>
                <p>
                  These are service-related, diagnostic, usage, and performance
                  information our servers automatically collect and record in
                  log files when you access or use Vince Chain Services. Your
                  log data includes but is not limited to your IP address,
                  device information, browser type, and settings and information
                  about your activity in the Services (such as the date/time
                  stamps associated with your usage, pages, and files viewed,
                  searches, and other actions you take such as which features
                  you use), device event information (such as system activity,
                  error reports (often called &quot;crash dumps&quot;), and
                  hardware settings).
                </p>
              </div>

              <div className={styles2.tou_list879}>
                <h3>Device Data </h3>
                <p>
                  We may collect device data such as information about your
                  computer, phone, tablet, or other device you use to access the
                  Services. Depending on the device used, this device data may
                  include information such as your IP address (or proxy server),
                  device and application identification numbers, location,
                  browser type, hardware model, Internet service provider and/or
                  mobile carrier, operating system, and system configuration
                  information.
                </p>
              </div>

              <div className={styles2.tou_list879}>
                <h3>Location Data </h3>
                <p>
                  We may collect data about your location, including information
                  about your device&apos;s location, which can be either precise
                  or imprecise. How much information we collect depends on the
                  type and settings of the device you use to access Vince Chain
                  Services. For example, we may use GPS and other technologies
                  on our website (“
                  <a href="https://vincechain.com">https://vincechain.com</a>”)
                  to collect geolocation data that tells us your current
                  location (based on your IP address). You can prevent us from
                  accessing information about your location by disabling your
                  Location setting on your device. However, opting out may
                  prevent you from using certain Vince Chain Services, which may
                  require your location to be accessed or activated.
                </p>
              </div>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                2. Why Do We Process Your Personal Information?
              </p>
              <p>
                We process any information you legitimately provide to Vince
                Chain to provide, improve, and administer Vince Chain Services,
                communicate with you for security and fraud prevention, and to
                comply with the law. In situations where we may need your
                information for other purposes other than that stated above, we
                may do so with or without your consent.
              </p>
            </div>

            <div className={styles2.tou_list879}>
              <h3>Other Reasons We May Process Your Personal Information</h3>

              <p className={styles2.ulist}>
                These reasons may depend on how you interact with Vince Chain
                Services:
                <ul>
                  <li>
                    <b>
                      For account creation or authentication purposes and
                      managing user accounts.
                    </b>{" "}
                    We may process your information so you can create and log in
                    to your account (on Vince Chain Services), as well as keep
                    your account in working order.
                  </li>
                  <li>
                    <b>To request feedback.</b> We may process your information
                    when necessary to request feedback and to contact you about
                    your use of our Services.
                  </li>
                  <li>
                    <b>For marketing and promotional communications.</b> We may
                    process the personal information you send to us for our
                    marketing purposes if this is in accordance with your
                    marketing preferences. You can opt out of our marketing
                    emails at any time.
                  </li>
                  <li>
                    <b>For targeted advertising and content delivery.</b> We may
                    process your information to develop and display personalized
                    content and advertising tailored to your interests,
                    location, and more.
                  </li>
                  <li>
                    <b>To protect Vince Chain Services and its users.</b> We may
                    process your information as part of our efforts to keep our
                    Services safe and secure, including fraud monitoring and
                    prevention.
                  </li>
                  <li>
                    <b>To identify usage trends.</b> We may process information
                    about how you use our Services to better understand how they
                    are being used so we can improve them.
                  </li>
                  <li>
                    <b>
                      To determine the effectiveness of our marketing campaigns.
                    </b>{" "}
                    We may process your information to better understand how to
                    provide marketing and promotional campaigns that are most
                    relevant to you.
                  </li>
                </ul>
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                3. Our Legal Bases for Processing Your Personal Information
              </p>
              <p>
                Vince Chain (and Vince Chain Services) will only process your
                personal information when we deem it necessary and have a legal
                reason or warrant as applicable by law. We, in most cases,
                require your consent to process your personal information. Other
                legitimate reasons may include complying with laws, providing
                you with services to enter into or fulfill our contractual
                obligations, protecting your rights, or fulfilling our
                legitimate business interests.
              </p>
            </div>

            <div className={styles2.tou_list879}>
              <h3>Users Residing in the EU or UK</h3>

              <p className={styles2.ulist}>
                The General Data Protection Regulation (GDPR) and UK GDPR
                warrant valid legal bases for processing your personal
                information. Hence, we may rely on the following legal bases to
                process your personal information:
                <ul>
                  <li>
                    <b>Consent or permission.</b> We may process your
                    information if you have given us permission (“consent”) to
                    use your personal information for a specific purpose. You
                    can withdraw your consent at any time. You may write to us
                    if you wish to withdraw your consent. You must write to us
                    three (3) days prior to the use of your personal information
                    for a proposed legitimate course of action.
                  </li>
                  <li>
                    <b>Legitimate business Interests</b> We may process your
                    information for our legitimate business interests, and
                    interests do not outweigh your interests and fundamental
                    rights and freedoms. Below are some instances where we may
                    process your personal information: <br />
                    <div className={styles2.inner_list}>
                      <ul>
                        <li>
                          Sending special announcements, product updates,
                          promotional copies, or special product offers and
                          discounts.
                        </li>
                        <li>
                          Personalized, strategic, or relevant advertising
                          content for Vince Chain users
                        </li>
                        <li>
                          Diagnose problems and/or prevent fraudulent activities
                        </li>
                        <li>
                          Understand how Vince Chain users interact with our
                          ecosystem so we can improve user experience
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <b>Legal interests.</b> We may process your information for
                    compliance with our legal obligations, such as cooperating
                    with the law enforcement body or regulatory agency,
                    exercising or defending our legal rights, or disclosing your
                    information as evidence in litigation in which we are
                    involved.
                  </li>
                  <li>
                    <b>Important user or partner interests.</b> We may process
                    your information where we believe it is necessary to protect
                    your vital interests or the vital interests of a third
                    party. For example, situations involving potential threats
                    to the safety of any person or entity
                  </li>
                </ul>
              </p>
            </div>

            <div className={styles2.tou_list879}>
              <h3>Users Residing in Canada</h3>
              <p>
                For users in Canada, we may process your information if given
                express or implied consent to use your personal information for
                the intended purpose by which it was requested. You can withdraw
                your consent at any time.
              </p>

              <p className={styles2.ulist}>
                In certain cases, we may be legally obliged under applicable law
                to process your information without your consent. For example:
                <ul>
                  <li>
                    If the collection is clearly in the interests of a certain
                    or legal individual and consent cannot be obtained in a
                    timely way
                  </li>
                  <li>For investigations and fraud detection and prevention</li>
                  <li>
                    For business transactions, provided certain conditions are
                    met
                  </li>
                  <li>
                    If it is contained in a witness statement and the collection
                    is necessary to assess, process, or settle an insurance
                    claim
                  </li>
                  <li>
                    For identifying injured, ill, or deceased persons and
                    communicating with next of kin
                  </li>
                  <li>
                    If we have reasonable grounds to believe an individual has
                    been, is, or maybe a victim of financial abuse
                  </li>
                  <li>
                    If it is reasonable to expect collection and use with
                    consent would compromise the availability or the accuracy of
                    the information and the collection is reasonable for
                    purposes related to investigating a breach of an agreement
                    or a contravention of the laws of Canada or a province
                  </li>
                  <li>
                    If disclosure is required to comply with a subpoena,
                    warrant, court order, or rules of the court relating to the
                    production of records
                  </li>
                  <li>
                    If it was produced by an individual in the course of their
                    employment, business, or profession, and the collection is
                    consistent with the purposes for which the information was
                    produced
                  </li>
                  <li>
                    If the collection is solely for journalistic, artistic, or
                    literary purposes
                  </li>
                  <li>
                    If the information is publicly available and is specified by
                    the regulations
                  </li>
                </ul>
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                4. When Do We Share Your Personal Information?
              </p>
              <p>
                Vince Chain may share information in certain situations as
                described in this section and/or generally in this Privacy
                Policy.
              </p>

              <p className={styles2.ulist}>
                We may need to share your personal information in the following
                situations:
                <ul>
                  <li>
                    <b>Transfer of business holding or ownership</b> Vince Chain
                    Services may share or transfer your information in
                    connection with or during negotiations of any merger, sale
                    of company assets, financing, or acquisition of all or a
                    portion of our business to another company.
                  </li>
                  <li>
                    <b>Affiliates.</b> Vince Chain Services may share your
                    information with our affiliates, in which case we will
                    require those affiliates to honor this privacy notice.
                    Affiliates include our parent company and any subsidiaries,
                    joint venture partners, or other companies that we control
                    or that are under common control with us.
                  </li>
                  <li>
                    <b>Partnerships.</b> Vince Chain Services may share your
                    information with our business partners for certain benefits
                    or programs and/or to offer you certain products, services,
                    or promotions.
                  </li>
                </ul>
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                5. Do We Use Cookies To Collect Your Personal Information?
              </p>
              <p>
                Due to our decentralized service structure, Vince Chain or Vince
                Chain Services does not use cookies or any other tracking
                technologies to collect and store your information. Information
                given to us will be organic, for specific or legitimate purposes
                and uses. If we eventually, adopt cookies as a means of
                collecting your data, we will do well to notify you through this
                Privacy Policy and regular press releases or available
                notification media.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                6. Do We Transfer Your Information Internationally?
              </p>
              <p>
                We may transfer, store, and process your information in
                countries other than your own, as our server is located in
                Germany. If you are accessing Vince Chain Services from outside
                Germany, please be aware that your information may be
                transferred to, stored, and processed by us in our facilities
                and by those third parties with whom we may share your personal
                information and in other countries. (see the &quot;When do we
                share your personal information?&quot; section above)
              </p>
              <p>
                As a resident of the European Economic Area (EEA) or the United
                Kingdom (UK), the data protection laws or other similar laws in
                our host country may not align or be as comprehensive as those
                in your country. However, we will take all necessary measures to
                protect your personal information in accordance with this
                Privacy Policy and other applicable laws.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                7. How Long Do We Keep Your Information?
              </p>
              <p>
                We keep your information for as long as necessary to fulfill the
                purposes outlined in this Privacy Policy unless otherwise
                required by law.
              </p>
              <p>
                Your personal information will remain with us for as long as it
                is necessary for the purposes set out in this Privacy Policy
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements).
                Meanwhile, no purpose in this Policy requires us to keep your
                personal information for longer than the period of time in which
                you have an account with us.
              </p>
              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                8. How Do We Protect Your Information?
              </p>
              <p>
                Vince Chain employs systemic and secure technical measures to
                protect your personal information. We have appropriate and
                reasonable technical and organizational security measures
                designed to protect your personal information with us. However,
                we do not guarantee 100% security for your personal information
                with us, as electronic transmissions over the Internet or
                information storage technology can be vulnerable to third-party
                infiltration at any time. We cannot promise or guarantee that
                hackers, cybercriminals, or other unauthorized third parties
                will not be able to defeat our security or firewall and
                improperly collect, access, steal, or modify your information.
                Although we will do our best to protect your personal
                information, the transmission of personal information to and
                from Vince Chain Services is at your own risk. We advise that
                you only our Services within a secure electronic environment.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                9. Policy on Minors That Use Vince Chain
              </p>
              <p>
                Vince Chain or Vince Chain Services does not knowingly collect
                data from minors, nor do we knowingly market our services to
                them. Vince Chain is only open for access and usage to people
                who are 18 years and above. Minors below the age of 18 or those
                between 13 to 18 years of age shall use Vince Chain under the
                umbrella of their parent, guardian, or counselor. By using Vince
                Chain as a minor, you agree that you are represented by a
                superior, parent, or guardian.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                10. What Are Your Vince Chain Privacy Rights?
              </p>
              <p>
                In some regions, such as the European Economic Area (EEA),
                United Kingdom (UK), and Canada, you have rights that allow you
                greater access to and control over your personal information.
                You may review, change, or terminate our access to your personal
                information at any time.
              </p>

              <p>
                These rights under applicable data protection laws may include
                the right
                <ul className={styles2.romanlist}>
                  <li>
                    to request access and obtain a copy of your personal
                    information,{" "}
                  </li>
                  <li>to request rectification or erasure;</li>
                  <li>
                    to restrict the processing of your personal information; and{" "}
                  </li>
                  <li>if applicable, to data portability.</li>
                </ul>
              </p>
              <p>
                In specific circumstances, you may have the right to object to
                the processing of your personal information. To do so, simply
                contact us through email at:{" "}
                <a href="mailto:privacy@vincechain.com">
                  privacy@vincechain.com.
                </a>{" "}
                We will consider and act upon any request in accordance with
                applicable data protection laws.
              </p>
              <p>
                If you are located in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your{" "}
                <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                  Member State data protection authority
                </a>{" "}
                or{" "}
                <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
                  UK data protection authority.
                </a>
              </p>
              <p>
                If you are located in Switzerland, you may contact the{" "}
                <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                  Federal Data Protection and Information Commissioner.
                </a>
              </p>
            </div>

            <h2 className={cn("h2", styles2.title3)}>
              Your Rights With Respect to Your Personal Data
            </h2>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                1. Right To Request Deletion of the Data
              </p>
              <p>
                You can ask for the deletion of your personal information. If
                you ask us to delete your personal information, we will respect
                your request and delete your personal information, subject to
                certain exceptions provided by law, such as, but not limited to,
                the exercise by another consumer of his or her right to free
                speech, our compliance requirements resulting from a legal
                obligation, or any processing that may be required to protect
                against illegal activities.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                2. The Right To Be Informed or Request To Know
              </p>
              <p className={styles2.ulist}>
                Depending on the circumstances, you have a right to know:
                <ul>
                  <li>whether we collect and use your personal information;</li>
                  <li>
                    the categories of personal information that we collect;
                  </li>
                  <li>
                    the purposes for which the collected personal information is
                    used;
                  </li>
                  <li>
                    whether we sell or share personal information with third
                    parties;
                  </li>
                  <li>
                    the categories of personal information that we sold, shared,
                    or disclosed for a business purpose;
                  </li>
                  <li>
                    the categories of third parties to whom the personal
                    information was sold, shared, or disclosed for a business
                    purpose;
                  </li>
                  <li>
                    the business or commercial purpose for collecting, selling,
                    or sharing personal information; and
                  </li>
                  <li>
                    the specific pieces of personal information we collected
                    about you.
                  </li>
                </ul>
              </p>
              <p>
                In accordance with applicable law, we are not obligated to
                provide or delete consumer information that is de-identified in
                response to a consumer request or to re-identify individual data
                to verify a consumer request.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                3. Right to Non-Discrimination for the Exercise of a Consumer’s
                Privacy Rights
              </p>
              <p>
                We will not discriminate against you if you exercise your
                privacy rights.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                4. Right To Limit Use and Disclosure of Sensitive Personal
                Information
              </p>
              <p>
                We do not process consumers&apos; sensitive personal
                information.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>5. Right To Withdraw Your Consent</p>
              <p>
                If we are relying on your consent to process your personal
                information, which may be express and/or implied consent,
                depending on the applicable law, you have the right to withdraw
                your consent at any time. You can withdraw your consent at any
                time by contacting us via email at{" "}
                <a href="mailto:privacy@vincechain.com">
                  privacy@vincechain.com
                </a>
                .
              </p>
              <p>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal, nor when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                6. Right To Opt Out of Marketing and Promotional Content
              </p>
              <p>
                You can unsubscribe from our marketing and promotional content
                or updates at any time by clicking on the unsubscribe link in
                the emails that we send or by contacting us via email at{" "}
                <a href="mailto:privacy@vincechain.com">
                  privacy@vincechain.com
                </a>
                . We will immediately remove you from our marketing list.
                However, we may still communicate with you — for example, to
                send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes. You may still opt
                out of this communication using the aforementioned method.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>7. Right to Verification Process</p>
              <p>
                Upon receiving your request, we will need to verify your
                identity to determine you are the same person with whom we have
                the information in our system. These verification efforts
                require us to ask you to provide information so that we can
                match it with the information you have previously provided us.
                For instance, depending on the type of request you submit, we
                may ask you to provide certain information so that we can match
                the information you provide with the information we already have
                on file, or we may contact you through a communication method
                (e.g., phone or email) that you have previously provided to us.
                We may also use other verification methods as the circumstances
                dictate.
              </p>
              <p>
                We will only use the personal information provided in your
                request to verify your identity or authority to make the
                request. To the extent possible, we will avoid requesting
                additional information from you for the purposes of
                verification. However, if we cannot verify your identity from
                the information already maintained by us, we may request that
                you provide additional information for the purposes of verifying
                your identity and for security or fraud-prevention purposes. We
                will delete such additionally provided information as soon as we
                finish verifying you.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                8. Other Privacy Rights on Vince Chain
              </p>

              <p className={styles2.ulist}>
                <ul>
                  <li>
                    Objecting to the processing of your personal information.
                  </li>
                  <li>
                    Requesting the correction of your personal data if it is
                    incorrect or no longer relevant or asking to restrict the
                    processing of the information.
                  </li>
                  <li>
                    Designating an authorized agent to make a request under the
                    CCPA on your behalf. We may deny a request from an
                    authorized agent that does not submit proof that they have
                    been validly authorized to act on your behalf in accordance
                    with the CCPA.
                  </li>
                  <li>
                    Requesting to opt out from future selling or sharing of your
                    personal information with third parties. Upon receiving an
                    opt-out request, we will act upon the request as fast as we
                    can, but no later than fifteen (21) days from the date of
                    the request submission.
                  </li>
                </ul>
              </p>
              <p>
                To exercise these rights, you can contact us by email at{" "}
                <a href="mailto:legal@vincechain.com">legal@vincechain.com</a>{" "}
                or by referring to the contact details at the bottom of this
                document. If you have a complaint about how we handle your data,
                we would like to hear from you.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                11. Do-Not-Track Features and Controls Policy
              </p>
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track (&quot;DNT&quot;) feature or
                setting you can activate to signal your privacy preference and
                not to have data about your online browsing activities monitored
                and collected. At this stage, no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised and updated version of this
                Privacy Policy.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                12. Will We Share Your Information With Third Parties?
              </p>
              <p>
                We do not sell or share your personal information with website
                visitors, users, and other consumers. However, we may disclose
                your personal information with our service providers pursuant to
                a written contract between us and each service provider. Each
                service provider is a for-profit entity that processes the
                information on our behalf, following the same strict privacy
                protection obligations mandated by the CCPA.
              </p>
              <p>
                We may use your personal information for our own business
                purposes, such as for undertaking internal research for
                technological development and demonstration. This shall not be
                considered to be the &quot;selling&quot; of your personal
                information.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>13. Updating Our Privacy Policy</p>
              <p>
                We will update this Privacy Policy as often as necessary to stay
                compliant with relevant laws. The updated version will be
                indicated by an updated &quot;Revised&quot; date and the updated
                version will be effective as soon as it is accessible. If we
                make material changes to this Privacy Policy, we may notify you
                either by publishing a press release or any notice of such
                changes or by directly sending you a notification. We encourage
                you to review this Privacy Policy regularly to stay updated on
                how we are using, processing, and protecting your personal
                information.
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                14. Contacting Us About Your Privacy Concerns
              </p>
              <p>
                If you have questions or comments about this notice, you may
                email us at{" "}
                <a href="mailto:legal@vincechain.com">legal@vincechain.com</a>{" "}
                or{" "}
                <a href="mailto:privacy@vincechain.com">
                  privacy@vincechain.com
                </a>
                .
              </p>
            </div>

            <div className={styles2.tou_list}>
              <p className={styles2.title}>
                15. How To Review, Update, and Delete Your Personal Information
                With Us
              </p>
              <p>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it. To request to
                review, update, or delete your personal information, please
                email us at{" "}
                <a href="mailto:privacy@vincechain.com">
                  privacy@vincechain.com
                </a>{" "}
                and we’ll send you a Data Subject Access Request (DSAR) form to
                fill out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
