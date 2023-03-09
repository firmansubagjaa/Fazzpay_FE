import Image from "next/image";
import dashboard from "@/assets/images/png/users/dashboard.png"

const GraphPanel = () => {
  return (
    <>
      <div className="card w-[25rem] lg:mr-5 shadow-xl ">
        <div className="card-body">
          <Image src={dashboard} />
        </div>
      </div>
    </>
  );
};

export default GraphPanel;
