import Header from "@/components/navigation/Header/Header";
import Payment from "@/components/payment/Payment";
import Container from "@/UI/Container";

const page = () => {
    return (
        <div className="flex-1 bg-bgColor h-screen flex flex-col">
            <Header />
            <Container className="w-[70%] lg:ml-[12rem] mt-8 p-8 shadow-sm drop-shadow-sm bg-white rounded-xl space-y-7">
                <div>
                    <h1 className="font-semibold">Payment Providers</h1>
                    <p className="text-[.79rem] text-slate-700">
                        Set up payment providers to accept payments from your
                        customers.
                    </p>
                </div>
                <Payment />
            </Container>
        </div>
    );
};



export default page;
