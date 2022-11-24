const Cards = () => {

    return (
        <div className="md:mt-20 mt-16 mx-auto">
            <h3 className="text-3xl font-bold text-center pb-8">What we offer</h3>
            <div className="mt-6 flex md:flex-row flex-col mx-auto justify-center items-center gap-8 w-full">
                <div className="bg-[#FBED04] p-4 text-center leading-relaxed rounded-md w-4/5 md:w-[18rem] min-h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold mb-2 text-lg">A Digital Marketing Plan</p>
                    <p className="text-base">
                        By choosing us, we guarantee you a suitable proposal that reflects your
                        brand&apos;s objectives, through a close, outlined coordination with your 
                        communication and marketing team or the person responsible in that area. 
                    </p>
                </div>

                <div className="bg-[#FBED04] p-4 text-center rounded-md w-4/5 md:w-[18rem] min-h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center leading-relaxed mb-2 text-lg">A qualified Content Producer </p>
                    <p className="text-base">
                        A content producer on stand-by will implement the agreed content
                        according to guidelines and a pre-defined action schedule. 
                        The above contact person will be the focal point with the company/institution/organization. 
                     </p>
                </div>

                <div className="bg-[#FBED04] p-4 text-center rounded-md w-4/5 md:w-[18rem] min-h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center leading-relaxed mb-2 text-lg">A Graphic Designer </p>
                    <p className="text-base">
                        A competent and experienced graphic designer is available, responsible for the conception and design of the graphic arts that accompanies various publications.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cards;