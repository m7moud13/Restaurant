import React from 'react'
import Footer from "../Components/Footer";
import { Landing } from "../Components/Landing";
import { LandingCards } from "../Components/LandingCards";
import Navbar from "../Components/Navbar";
import { TopRated } from "../Components/TopRated";

export const Home = () => {
    return (
    <div>
        <Navbar />
    <Landing />
    <LandingCards />
    <TopRated />
    <Footer />
    </div>
)
}
