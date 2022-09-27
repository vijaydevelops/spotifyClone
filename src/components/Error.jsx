const Error = ({ error }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <h1 className="font-bold text-2xl text-white mt-2">
      { error || "Something went wrong. Please try again.." }
    </h1>
  </div>
);

export default Error;
