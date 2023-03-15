import Image from "next/image";

const TransactionPanel = () => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-md hover:shadow-2xl transition-all ease-in-out h-full">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">Transaction History</h2>
          </div>

          {[1, 2,].map((items) => {
            return (
              <>
                <div className='flex justify-between mt-10'>
                  <div className='flex'>
                    <Image src={require('@/assets/images/png/users/user2.png')} alt='user' />
                    <div className='ml-3 pt-2'>
                      <p className="font-semibold pr-10">Firman Subagja</p>
                      <p className="font-normal">Accept</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <span>Rp.200.000</span>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default TransactionPanel;
