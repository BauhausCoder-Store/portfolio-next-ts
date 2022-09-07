import styles from '../styles/SendEmail.module.css';
import { useEffect, useState } from 'react';
import { send } from 'emailjs-com';

export const SendEmail = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(process.env.NEXT_PUBLIC_GMAIL_SERVICE_ID === undefined){
        throw new Error('Undefined GMAIL Service ID')
    } else if(process.env.NEXT_PUBLIC_GMAIL_TEMPLATE_ID === undefined){
        throw new Error('Undefined GMAIL Template ID')
    } else if(process.env.NEXT_PUBLIC_GMAIL_PUBLIC_KEY === undefined){
        throw new Error('Undefined GMAIL Public Key')
    };

    send(
        process.env.NEXT_PUBLIC_GMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_GMAIL_TEMPLATE_ID,
        toSend,
        process.env.NEXT_PUBLIC_GMAIL_PUBLIC_KEY,
    )
        .then((response) => {
        console.log('GMAIL Send Email success...', response.status, response.text);
        })
        .catch((err) => {
        console.log('GMAIL Send Email failed...', err);
        });


    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (

      <form onSubmit={onSubmit} className={styles.send_email_form}>

            <input
                type='text'
                name='from_name'
                placeholder='From'
                minLength={1}
                maxLength={20}
                value={toSend.from_name}
                onChange={handleChange}
                required
            />
            <textarea
                rows={5}
                cols={5}
                name='message'
                placeholder='Your message'
                minLength={1}
                maxLength={150}
                value={toSend.message}
                onChange={handleChange}
                required
            />
            <input
                type='email'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
                required
            />
            
            <input type='submit' value='Submit' />

        </form>

    )
};