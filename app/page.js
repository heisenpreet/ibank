import Borrower from "../components/Borrower";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Intermediares from "../components/Intermediares";
import Investor from "../components/Investor";
import SubSection from "../components/SubSection";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SubSection />
        <div className="container  mx-auto ">
          <Borrower />
          <Investor />
          <Intermediares />
        </div>
      </main>
      <Footer />
    </>
  );
}
