"use client";

import { Navbar } from "@/components/navs";
import { Innovation, Landing, Product, Report } from "@/components/page/home";

function HomePage() {
    return (
        <div className="no-scrollbar overflow-y-scroll flex flex-col w-[100dvw] h-fit p-0">
            <Navbar />
            <Landing />
            <Product />
            <Innovation />
            <Report />
        </div>
    );
}

export default HomePage;
