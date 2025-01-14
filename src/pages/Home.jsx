import HomeSectionCarousel from "../components/HomeSectionCarousel";
import MainCarousel from "../components/MainCarousel";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <div className="space-y-10 py-70 flex flex-col justify-center px-5 lg:px-0">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </>
  );
};
export default Home;
