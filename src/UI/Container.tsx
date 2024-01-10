const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return <div className={`${className} mx-auto`}>{children}</div>;
};

export default Container;
