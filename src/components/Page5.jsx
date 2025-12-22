
import Image from "./Image";
import Text from "./Text";

const Page5 = () => {
  return (
    <div className="flex w-full justify-between gap-8 p-6 h-120">
      <Image img="https://images.unsplash.com/photo-1742790364848-5b77d80152a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className="w-1/2  flex flex-col gap-5 ">
        <Text title="Independent Designers" />
        <Text title="Exclusive & Uniquity" />
      </div>
    </div>
  );
};

export default Page5;
