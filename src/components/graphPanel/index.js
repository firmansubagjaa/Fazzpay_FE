import Image from "next/image";

const GraphPanel = () => {
  return (
    <>
      <div className="card w-[25rem] lg:mr-5 shadow-xl ">
        <div className="card-body">
          <Image src={require('@/assets/images/png/users/dashboard.png')} alt='' />
        </div>
      </div>
    </>
  );
};

export default GraphPanel;
