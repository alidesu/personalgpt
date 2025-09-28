import React from "react";

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div
                className="container mx-auto pt-8 pb-4 flex flex-wrap p-5 md:flex-row justify-center-safe items-center gap-6">
                <a className="flex title-font font-medium items-center text-gray-900 lg:items-center lg:justify-end mb-4 md:mb-0">
                    <div className="bg-white rounded-full overflow-clip pr-14 pl-14 pt-2 pb-2">
                        <img src="/PersonalGPT-Logo.png" alt="" className="h-auto w-48"/>
                    </div>
                </a>
                <div className="bg-white rounded-full overflow-clip pr-40 pl-40 pt-4 pb-4">
                    <span className="text-4xl font-schoolbell text-black">“Your knowledge. Your AI. Your way.”</span>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-3xl bg-white rounded-full border-2 hover:scale-105 transition-transform border-black overflow-clip pl-10 pr-10 pt-4 pb-4">
                    <button className="font-alojalight items-center justify-center font-bold text-black">
                        Upload
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
