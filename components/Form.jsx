import { useForm, ValidationError } from '@formspree/react';
import styles from "styles/Home.module.css"
import comon from "styles/Comon.module.css"
export function Form(){

    const [state, handleSubmit] = useForm("mknarkpg");
    if (state.succeeded) {
        return <div className={styles.formall}>
        <div className={comon.hlbox}>お問い合わせ</div>
        <div className={comon.container}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat eveniet iste inventore reprehenderit! Magni id in assumenda laborum voluptatem neque Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <div className={styles.comp}>送信が完了しました</div>
        </div>;
    }
  return(
    <div className={styles.formall}>
        <div className={comon.hlbox}>お問い合わせ</div>
        <div className={comon.container}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat eveniet iste inventore reprehenderit! Magni id in assumenda laborum voluptatem neque Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/mknarkpg" method="POST" className={styles.formsub}>
        <label htmlFor="email" className={styles.formhl}>
            メールアドレス
        </label>
        <input
            id="email"
            type="email" 
            name="email"
            className={styles.inputbox}
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <p className={styles.formhl}>お問い合わせ内容</p>
        <textarea
            id="message"
            name="message"
            className={styles.textbox}
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className={styles.submitbtn}>
            <p>送信</p>
        </button>
        </form>
    </div>
  )
}