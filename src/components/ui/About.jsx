import { ArrowOutward, Instagram, Mail, Phone } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Alert from "./Alert";

function About() {
  const [text, setText] = useState("");
  const [spanText, setSpanText] = useState("");
  const fullText =
    "Hey, This app was created and deployed by me, the all mighty ";
  const secondText = "TinySmash";
  const typingSpeed = 70;
  useEffect(() => {
    let currentIndex = 0;
    let currentIndexTwo = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setSpanText(secondText.slice(0, currentIndexTwo + 1));
        currentIndexTwo++;
        setTimeout(typeText, typingSpeed);
        if (currentIndexTwo >= spanText.length) {
          return;
        }
      }
      console.log("called");
    };

    typeText();
  }, [fullText]);

  const [alertCount, setAlertCount] = useState(false);
  const [alertProps, setAlertProps] = useState({ message: "", type: "" });

  const copyToClipBoard = () => {
    const phoneNumber = "+212 682-839818";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setAlertCount(false);
      setAlertProps({
        message: "Phone number copied to clipboard",
        type: "success",
      });
      setTimeout(() => {
        setAlertCount(true);
        setTimeout(() => {
          setAlertCount(false);
        }, 5000);
      }, 100);
    });
  };

  const copyEmailToClipBoard = () => {
    const email = "islam.gueniari@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setAlertCount(false);

      setAlertProps({
        message: "Email adress copied to clipboard",
        type: "success",
      });
      setTimeout(() => {
        setAlertCount(true);
        setTimeout(() => {
          setAlertCount(false);
        }, 5000);
      }, 300);
    });
  };

  return (
    <div className="bg-about w-full min-h-screen">
      {alertCount && (
        <Alert type={alertProps?.type} message={alertProps?.message} />
      )}
      <section className="w-full h-auto min-h-screen backdrop-blur-lg pt-28 px-12">
        <h1 className="text-2xl font-semibold mb-12">
          {text}
          <span className="text-3xl text-primary-blue font-black">
            {spanText}
          </span>
          <span className="animation-typing"> _</span>
        </h1>
        <motion.div
          initial={{ opacity: "0%" }} // Start the content below the viewport
          animate={{ opacity: "100%" }} // Animate to its normal position
          transition={{ duration: 0.7, delay: 6 }}
        >
          <p className="text-lg mb-4">
            I'm a{" "}
            <span className="text-xl font-semibold text-primary-blue">
              Web Developer
            </span>{" "}
            who's deeply passionate about basketball. I've created this website
            as a blend of my love for designing web applications and the game. I
            aimed for a design that captures the essence of a basketball
            enthusiast, keeping it simple and user-friendly.{" "}
            <span className="text-xl font-semibold text-primary-blue">
              You can find my contact information below.
            </span>
          </p>
        </motion.div>
      </section>
      <section className="w-full h-auto md:my-5 pb-5 px-12 bg-primary-gray">
        <ul className="list-none w-fit sm:w-full mx-auto h-auto sm:flex sm:gap-2 sm:flex-wrap md:w-10/12 md:flex-nowrap ">
          <li className="border-2 border-primary-blue rounded-md w-fit mx-auto px-6 py-5 mb-3 text-center sm:w-2/5 md:w-1/3">
            <a
              href="https://www.instagram.com/tinys_smash_/?hl=en"
              target="blank"
              className="w-full h-full"
            >
              <Instagram sx={{ fontSize: "120px" }} />
              <span className="font-bold flex items-center gap-2 text-xl">
                My instagram account <ArrowOutward />
              </span>
            </a>
          </li>
          <li
            className="border-2 border-primary-blue rounded-md w-full mx-auto px-6 py-5 mb-3 text-center cursor-pointer sm:w-2/5 md:w-1/3"
            onClick={() => copyToClipBoard()}
          >
            <Phone sx={{ fontSize: "120px" }} />
            <h1 className="text-xl font-bold">+212 682-839818</h1>
          </li>
          <li
            className="border-2 border-primary-blue rounded-md w-full mx-auto py-5 mb-3 text-center cursor-pointer sm:w-1/2 md:w-1/3"
            onClick={() => copyEmailToClipBoard()}
          >
            <Mail sx={{ fontSize: "120px" }} />
            <h1
              className="text-xl font-bold"
              style={{ wordBreak: "break-words" }}
            >
              islam.gueniari@gmail.com
            </h1>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
