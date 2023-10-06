
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center mb-6 mx-auto w-4/12">
            <p className="text-yellow-600 py-2"><em>--- {subHeading} ---</em></p>
            <h3 className="text-4xl border-y-2 py-4">{heading}</h3>

        </div>
    );
};

export default SectionTitle;