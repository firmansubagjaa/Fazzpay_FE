import Image from "next/image";

const GraphPanel = () => {
  return (
    <>
      <div className="card h-full mb-5 lg:mr-5 shadow-xl ">
        <div className="card-body">
          <Image src={require('@/assets/images/png/users/dashboard.png')} alt='' className="w-[25rem] h-full" />
        </div>
      </div>
    </>
  );
};

export default GraphPanel;
