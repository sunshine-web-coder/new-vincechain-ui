import styles from "./Main.module.scss";
import Script from "next/script";

const Main = () => (
  <div className={styles.support}>
    <div className={styles.inner_support}>
        <Script>{`
            window.fwSettings={
                'widget_id':150000003011,
                };
                !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}()
            `}
        </Script>
        <Script type='text/javascript' src='https://widget.freshworks.com/widgets/150000003011.js' async defer></Script>
    </div>
  </div>
);

export default Main;
