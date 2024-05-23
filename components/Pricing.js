import React, { useMemo, useState } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Modal } from "./Modal";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPack, setSelectedPack] = useState("Classique")
  const handleButtonClick = (pack) => {

    setSelectedPack(pack)
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Nos packs
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Choisissez parmis nos offres celle qui vous correspond le mieux.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-6 py-4 lg:py-6 px-3 sm:px-0 lg:px-3">
            <ScrollAnimationWrapper className="flex justify-center mb-4">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center hover:border-orange-500 items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-2 lg:p-0 mt-3 lg:mt-8">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={80}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Mom's Classique
                </p>
                <ul className="flex flex-col list-inside pl-3 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Ramassage
                  </li>
                  <li className="relative check custom-list my-2">
                    Lavage
                  </li>
                  <li className="relative check custom-list my-2">
                    Repassage
                  </li>
                  <li className="relative check custom-list my-2">
                    Livraison
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center flex-none">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    10Kg <span className="text-black-500">/mois</span>
                  </p>
                  <ButtonOutline onClick={() => handleButtonClick("Classique")}>5.000 Fcfa/Mois</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center mb-4">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center hover:border-orange-500 items-center border-2 border-gray-500 rounded-xl py-4 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-2 lg:p-0 mt-3 lg:mt-8">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={80}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Mom's Premium
                </p>
                <ul className="flex flex-col list-inside pl-3 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Ramassage
                  </li>
                  <li className="relative check custom-list my-2">
                    Lavage
                  </li>
                  <li className="relative check custom-list my-2">
                    Repassage
                  </li>
                  <li className="relative check custom-list my-2">
                    Livraison
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-4 flex-none">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    15Kg <span className="text-black-500">/mois</span>
                  </p>
                  <ButtonOutline onClick={() => handleButtonClick("Premium")}>7.500 Fcfa/Mois</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center mb-4">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center hover:border-orange-500 items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-6 xl:px-10"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-2 lg:p-0 mt-3 lg:mt-8">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={80}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Mom's Gold
                </p>
                <ul className="flex flex-col list-inside pl-3 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Ramassage
                  </li>
                  <li className="relative check custom-list my-2">
                    Lavage
                  </li>
                  <li className="relative check custom-list my-2">
                    Repassage
                  </li>
                  <li className="relative check custom-list my-2">
                    Livraison
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-4 flex-none">
                  <p className="text-2xl text-black-600 text-center mb-2">
                    20Kg <span className="text-black-500">/mois</span>
                  </p>

                  <ButtonOutline onClick={() => handleButtonClick("Gold")}>10.000 Fcfa/Mois</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-8">
          <ScrollAnimationWrapper>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-8" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-3/4 sm: lg:w-2/6 mx-auto">
              Ils nous ont fait confiance.
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-2 w-5/6 sm:w-3/6 lg:w-3/6"
            >
              Decouvrez les avis de nos clients et partagez leurs expériences.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-6">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-6">

          </ScrollAnimationWrapper>
        </div>
      </div>
      <Modal visible={isModalVisible} onClose={handleCloseModal} selectPack={selectedPack} />

    </div>
  );
};

export default Pricing;
