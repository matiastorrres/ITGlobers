import "./Newsletter.scss";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToArray } from "../../store/slices/mailSlice";

export function Newsletter() {
  const [mail, setMail] = useState("");
  const [state, handleSubmit] = useForm("mdovdjzg");
  const [successMessage, setSuccessMessage] = useState(false);
  const dispatch = useDispatch();
  const mails = useSelector((state) => state.mail.mails);

  const check = (e) => {
    e.preventDefault();
    const newItem = e.target[0].value;
    if (mails.includes(newItem) || newItem === "") return;
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      dispatch(addItemToArray(mail));
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
        state.succeeded = false;
        setMail("");
      }, 1000);
    }
  }, [state.submitting]);

  return (
    <>
      <section className="Newsletter__container">
        <h5>NEWSLETTER</h5>
        <h3>SUSCRIBITE</h3>
        <p>Y enterate de todas las novedades</p>
        <form onSubmit={check}>
          <input
            type="email"
            name="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <button type="submit">→</button>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </form>
        {successMessage && (
          <p className="successMessage">Thanks for joining!</p>
        )}
      </section>
    </>
  );
}
