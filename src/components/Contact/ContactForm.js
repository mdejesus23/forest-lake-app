import { useRef } from "react";
import emailjs from "@emailjs/browser";

import useUserInput from "../../hooks/use-userInput";
import { motion } from "framer-motion";

// import Button from "../components/UI/Button/Button";
import classes from "./ContactForm.module.scss";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = (props) => {
  const form = useRef();
  // const [sendIsValid, setSendIsValid] = useState(true);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInputValue: resetNameValue,
  } = useUserInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInputValue: resetEmailValue,
  } = useUserInput(isEmail);

  const {
    value: enteredSubject,
    isValid: subjectIsValid,
    hasError: subjectInputHasError,
    inputChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    resetInputValue: resetSubjectValue,
  } = useUserInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    inputChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    resetInputValue: resetMessageValue,
  } = useUserInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        "service_zyb8zuy",
        "template_qvsilol",
        form.current,
        "FG1leMBGFx4I46VAK"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Message successfully sent");
        },
        (error) => {
          // console.log(error.text);
          alert("Failed to send the message, please try again");
        }
      );

    resetNameValue();
    resetEmailValue();
    resetSubjectValue();
    resetMessageValue();
  };

  // toggle className to add invalid to indicate to the user using some styles that
  // the input value is invalid.
  const nameClasses = nameInputHasError
    ? classes.nameInput + " " + classes.invalid
    : classes.nameInput;

  const emailClasses = emailInputHasError
    ? classes.emailInput + " " + classes.invalid
    : classes.emailInput;

  const subjectClasses = subjectInputHasError
    ? classes.subjMessageInput + " " + classes.invalid
    : classes.subjMessageInput;

  const messageClassname = messageInputHasError ? classes.messageInvalid : "";

  return (
    <motion.div
      className={classes.contact}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 0.3 }}
    >
      <h1>Contact Us</h1>
      <p>
        Get in touch with us for any of your concerns. Send us a message through
        the form below.
      </p>
      <motion.form
        ref={form}
        onSubmit={formSubmitHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className={classes.InputContainer}>
          <div className={classes.controlForm}>
            <div className={nameClasses}>
              <input
                name="user_name"
                id="name"
                type="text"
                placeholder="Name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
              />
            </div>
            <div className={emailClasses}>
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
            </div>
          </div>
          <div className={subjectClasses}>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              onChange={subjectChangeHandler}
              onBlur={subjectBlurHandler}
              value={enteredSubject}
            />
            <textarea
              className={messageClassname}
              name="message"
              placeholder="Message"
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              value={enteredMessage}
            />
          </div>
          <div className={classes.formControl}>
            <motion.button
              disabled={!formIsValid}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px #cccc00",
                boxShadow: "0px 0px 8px #cccc00",
              }}
            >
              Send
            </motion.button>
          </div>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
