import Hero from "../components/Hero/Hero.jsx";
import FeaturesCards from "../components/FeatureCards/FeatureCards.jsx";
// Home component that renders a hero section with a title and image that takes up the full width of the viewport using mantine components.
export default function Home() {
    return (
        <>
            <Hero />
            <FeaturesCards />
        </>
    );
}