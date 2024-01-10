interface CardType {
    children: React.ReactNode;
    className?: any;
}
const Card = ({ children, className }: CardType) => {
    return (
        <div
            className={`${className} mx-auto w-[85%] flex text-gray-300 cursor-pointer  items-center  p-1 space-x-4 rounded px-4`}
        >
            {children}
        </div>
    );
};

export default Card;
