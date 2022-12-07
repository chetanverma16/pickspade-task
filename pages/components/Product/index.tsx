/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Card from "../Card";
import FootController from "../FootConroller";
import FormFactor from "../FormFactor";
import ImageCarousel from "../ImageCarousel";
import PowerAmp from "../PowerAmp";
import ProductHeader from "../ProductHeader";
import Specifications from "../Specifications";

type ProductProps = {
  setIsPowerAmp: (isPowerAmp: boolean) => void;
  setIsFootController: (isFootController: boolean) => void;
};

const Product = ({ setIsPowerAmp, setIsFootController }: ProductProps) => {
  return (
    <div className="p-5 flex items-start justify-between">
      <div className="w-1/2 sticky top-0">
        <ImageCarousel />
      </div>
      <div className="w-1/2 px-10">
        <ProductHeader />
        <FormFactor />
        <PowerAmp setIsPowerAmp={setIsPowerAmp} />
        <FootController setIsFootController={setIsFootController} />
        <Specifications />
      </div>
    </div>
  );
};

export default Product;
