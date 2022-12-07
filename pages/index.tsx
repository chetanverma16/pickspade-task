import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";

export default function Home() {
  const [isPowerAmp, setIsPowerAmp] = useState(false);
  const [isFootController, setIsFootController] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Product
          setIsPowerAmp={setIsPowerAmp}
          setIsFootController={setIsFootController}
        />
      </div>
      <Footer isPowerAmp={isPowerAmp} isFootController={isFootController} />
    </>
  );
}
