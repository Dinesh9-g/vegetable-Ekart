import BannerSection from "./Components/BannerSection";
import BlogSection from "./Components/BlogSection";
import Category from "./Components/Category";
import Featuresectionbreakfast from "./Components/Featuresectionbreakfast";
import FeatureSectionFruits from "./Components/FeatureSectionFruits";
import Hero from "./Components/Hero";
import Navbar from "./Navbar";
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <Featuresectionbreakfast/>
      <BannerSection/>
      <BlogSection/>
    </main>
  );
};

export default App;
   