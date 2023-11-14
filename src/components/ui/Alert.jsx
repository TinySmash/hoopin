import { CheckCircle, DisabledByDefault } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

function Alert(props) {
  const { message, type } = props;

  const alertRef = useRef("");
  const [messageParams, setMessageParams] = useState({});

  useEffect(() => {
    switch (type) {
      case "success":
        setMessageParams({ icon: <CheckCircle />, color: "bg-emerald-500" });
        break;
      case "error":
        setMessageParams({ icon: <DisabledByDefault />, color: "bg-red-500" });
        break;
      default:
        setMessageParams({ icon: null, color: "bg-gray-500" });
    }
  }, []);

  return (
    <h1
      ref={alertRef}
      className={`w-5/6 py-2 left-[8.3333%] fixed lg:text-3xl flex gap-2 justify-center items-center text-primary-white rounded-sm -top-16 drop-down z-50 ${messageParams?.color}`}
    >
      {messageParams?.icon}
      {message}
    </h1>
  );
}

export default Alert;
