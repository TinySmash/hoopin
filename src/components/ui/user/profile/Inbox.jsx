function Inbox() {
  return (
    <div className="w-full min-h-full pt-16 px-6 md:pl-52">
      <h1 className="text-4xl text-primary-blue font-bold w-full border-b-2 border-primary-blue">
        Inbox
      </h1>
      <ul className="list-none w-full">
        <li className="relative my-3 w-full h-auto px-3 py-2 border-2 border-black rounded-sm">
          <div className="w-3 h-3 rounded-full bg-red-600 absolute -right-1 -top-1 animate-ping"></div>
          <div className="w-3 h-3 rounded-full bg-red-600 absolute -right-1 -top-1"></div>
          <h1 className="text-xl text-primary-blue font-semibold mb-3 w-full border-b border-dark-yellow">
            Thanks for joining
          </h1>
          <p className="font-thin">
            Welcome to{" "}
            <span className="text-lg text-primary-blue font-semibold">
              Hoopin'
            </span>{" "}
            <br></br> We want to extend a warm welcome to you as a new member of
            the Hoopin' community! We're thrilled to have you on board, and we
            appreciate your decision to join us.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Inbox;
