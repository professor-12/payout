import Image from "next/image";

const walletImg = (
    <Image src={"/wallet.svg"} alt="walletImg" width={19} height={19} />
);
const CreditBalance = () => {
    return (
        <div className="bg-[#353C53] space-x-3 text-slate-50 p-3 px-4 rounded items-center  flex  m-2">
            <div className="bg-[#FFFFFF1A] p-2 flex justify-center items-center rounded-lg">
                {walletImg}
            </div>
            <div className="text-[.7rem] tracking-tighter font-light">
                      <h1>Availabe Credits</h1>
                      <span className="font-normal text-[.75rem]">222.10</span>
            </div>
        </div>
    );
};

export default CreditBalance;
