
const CallUs = ({phone}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="mt-16 bg-black">
                <h3 style={{fontFamily:" 'Raleway', sans-serif"}} className="text-4xl py-10 px-36 text-white">Call Us: {phone}</h3>
            </div>
        </div>
    );
};

export default CallUs;