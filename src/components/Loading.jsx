import logo from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="py-[20%]">
      <img
        src={logo}
        className="m-auto"
        width={100}
        height={100}
        alt=""
      />
    </div>
  );
};

export default Loading;
