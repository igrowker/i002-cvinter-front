
interface NextButtonProps {
    onClick: () => void;
    label: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
        >
            {label}
        </button>
    );
};

export default NextButton;