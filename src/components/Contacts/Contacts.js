import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div className="page ContactsPage">
            <h4 className={styles.greetingsTitle}>Contacts</h4>
            <div className="contacts">
                <p><b>Cell </b> +49 177 18 99 365</p>
                <p><b>Email </b>apresnyakova88@gmail.com</p>
                <ul className="social-links">
                    <li className=""><a href="https://www.linkedin.com/in/anna-presnyakova-204b535a/"><FontAwesomeIcon  icon={['fab', 'linkedin']} size="2x"/></a></li>
                    <li className=""><a href="https://www.xing.com/profile/Anna_Presnyakova/"><FontAwesomeIcon  icon={['fab', 'xing-square']} size="2x"/></a></li>
                    <li className=""><a href="https://github.com/chiffenok"><FontAwesomeIcon  icon={['fab', 'github-square']} size="2x"/></a></li>
                </ul>
            </div>
            <div className="form">
                <form name="contact" method="POST">
                    <p>Looking forward to answering your email</p>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <input name="name" type="text" placeholder="Name *" required />
                    </div>
                    <div>
                        <input name="email" type="email" placeholder="Email" required />
                    </div>
                    <div>
                        <input name="subject" type="text" placeholder="Subject" />
                    </div>
                    <div>
                        <textarea name="message" cols="30" rows="10" required >
                            Message
                        </textarea>
                    </div>
                    <div><button type="submit">Send</button></div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
