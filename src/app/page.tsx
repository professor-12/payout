import Header from "@/components/navigation/Header/Header";
import Container from "@/UI/Container";

const page = () => {
    return (
        <div className="flex-1 bg-bgColor h-screen flex flex-col">
            <Header />
            <Container className="w-[70%] ml-[12rem] mt-8 p-8 shadow-sm drop-shadow-sm bg-white rounded-lg">
                <div></div>
            </Container>
        </div>
    );
};

export default page;
