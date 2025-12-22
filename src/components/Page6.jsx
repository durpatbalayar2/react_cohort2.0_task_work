import Image from "./Image";
import Text from "./Text";

const Page6 = () => {
  return (
    <div className="flex w-full justify-between gap-8 p-6 h-120">
      <div className="w-1/2  flex flex-col gap-5 ">
        <Text title="High Quality" />
        <Text title="Eco-friendly" />
      </div>

      <Image img="https://images.unsplash.com/photo-1534413298607-48ba59e8a06d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
};

export default Page6;
