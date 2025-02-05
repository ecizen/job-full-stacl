
import { Suspense } from "react";
import Container from "./components/atoms/container";
import MarqueBrand from "./components/atoms/marque_brang";
import { SkeletonAbout, SkeletonBlog, SkeletonBrandMarque, SkeletonCategories, SkeletonFeature, SkeletonHeroSection, SkeletonTestimonial } from "./components/atoms/skeleton-loader";
import ExploreByCategorie from "./components/oragnisms/ExploreJob";
import HeroSection from "./components/oragnisms/HeroSection";
import Head from "next/head";
import AboutSection from "./components/oragnisms/AboutSection";
import BlogSection from "./components/oragnisms/BlogSection";
import FeatureSection from "./components/oragnisms/FeatureSection";
import HowItsWork from "./components/oragnisms/HowIts";
import Testimonial from "./components/oragnisms/Testimonial";

const LangingPage = () => {
  return (
    <>
      <Container>
        <main className="">
          <Suspense fallback={<SkeletonHeroSection />}>
            <HeroSection />
          </Suspense>

          <Suspense fallback={<SkeletonBrandMarque />}>
            <MarqueBrand />
          </Suspense>

         

          <Suspense fallback={<SkeletonAbout />}>
            <HowItsWork />
          </Suspense>

          <Suspense fallback={<SkeletonCategories />}>
            <ExploreByCategorie />
          </Suspense>


          <Suspense fallback={<SkeletonFeature/>}>
            <FeatureSection/>
          </Suspense>


          <Suspense fallback={<SkeletonBlog/>}>
            <BlogSection/>
          </Suspense>
          
          <Suspense fallback={<SkeletonTestimonial/>}>
            <Testimonial/>
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default LangingPage;
