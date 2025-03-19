import { Link } from "react-router-dom";
import { ArrowRight, Search, ShoppingBag, Grid } from "lucide-react"
import Hero from "./components/Hero";
import Story from "./components/Story";
import Categories from "./components/Categories";

import WeeklyDeals from "./components/WeeklyDeals";

import CustomerReviews from "./components/CustomerReviews";
import ProductCard from "./components/ProductCard";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import ScrollAnimationComponent from "./components/ScrollAnimationComponent.jsx";



export default function LandingPage() {
    return (
        <>
            <Hero></Hero>
            <Story></Story>
            <WeeklyDeals></WeeklyDeals>
            <ScrollAnimationComponent></ScrollAnimationComponent>
            <ProductCard></ProductCard>
            <Categories></Categories>
            <CustomerReviews></CustomerReviews>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </>
    )
}

