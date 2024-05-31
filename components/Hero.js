import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import img1 from "./../public/assets/images/img-1.jpg"
import img2 from "./../public/assets/images/img-2.jpg"
import img3 from "./../public/assets/images/img-3.jpg"
const Hero = ({
  listUser = [
    {
      name: "Clients",
      number: "100",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Quartier",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Vetements",
      number: "26 tonnes",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}>
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Des vêtements impeccables sans quitter votre maison.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Chez <strong>Mom's company</strong>, nous comprenons que votre temps est précieux. C'est pourquoi nous vous offrons un service de pressing de haute qualité directement à votre domicile. Avec quelques clics, bénéficiez d'un linge parfaitement nettoyé et repassé, livré à votre porte.
            </p>
            <ButtonPrimary>Souscrire</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-900 sm:text-lg dark:text-gray-900">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nous n'avons pas réinventé la roue</h2>
            <p className="mb-4">Nous sommes des experts en pressing, des spécialistes de la propreté et des soins textiles. Innovateurs et résolveurs de problèmes. Assez petits pour être simples et rapides, mais assez grands pour offrir l'ampleur que vous souhaitez à la vitesse dont vous avez besoin. Assez petits pour être simples et rapides, mais assez grands pour offrir l'ampleur que vous souhaitez à la vitesse dont vous avez besoin.</p>
            <p>Nous sommes des experts en pressing, des spécialistes de la propreté et des soins textiles. Innovateurs et résolveurs de problèmes. Assez petits pour être simples et rapides.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src="/assets/images/img-1.jpg"
              alt="Service de pressing"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
            <Image className="rounded-lg" src={img3} alt="service de pressing 3" />
          </div>
        </div>
      </section>
    </div >
  );
};

export default Hero;
