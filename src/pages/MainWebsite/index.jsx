import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import MainWebsiteColumnrectangletwo from "components/MainWebsiteColumnrectangletwo";
import MainWebsiteCources from "components/MainWebsiteCources";
import MainWebsiteFooter from "components/MainWebsiteFooter";
import MainWebsiteHeader from "components/MainWebsiteHeader";
import MainWebsiteNavbar from "components/MainWebsiteNavbar";
import MainWebsiteNews from "components/MainWebsiteNews";
import MainWebsiteOffsetitem from "components/MainWebsiteOffsetitem";

const MainWebsitePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start max-w-[1504px] mx-auto md:px-5 w-full">
          <header className="flex sm:flex-col flex-row md:gap-10 h-[54px] md:h-auto items-center justify-between md:px-10 sm:px-5 px-[180px] w-full">
            <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-[19px] w-[19px]"
                  src="images/img_contrast.svg"
                  alt="contrast"
                />
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  +255-22-2700021/4
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-[19px] w-[19px]"
                  src="images/img_lock.svg"
                  alt="lock"
                />
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  info@hkmu.ac.tz
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-[19px] w-[19px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <a href="javascript:" className="text-black-900 text-xs w-auto">
                  <Text size="txtInterRegular12">Login</Text>
                </a>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start pl-2 pr-4 py-2 w-auto">
                <Img
                  className="h-[19px] w-[19px]"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterRegular12"
                >
                  Search
                </Text>
              </div>
            </div>
          </header>
          <MainWebsiteNavbar className="bg-gray-100 flex md:flex-col flex-row font-poppins md:gap-10 items-end justify-between max-w-[1504px] md:px-10 sm:px-5 px-[180px] py-[30px] w-full" />
        </div>
        <div className="flex flex-col font-poppins items-center justify-start w-full">
          <div className="h-[1876px] md:h-[2291px] sm:h-[2973px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[145px] items-center justify-start w-full">
                <MainWebsiteHeader
                  className="bg-cover bg-no-repeat flex flex-col h-[851px] items-center justify-end p-[228px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_header.png')" }}
                />
                <MainWebsiteColumnrectangletwo className="bg-white-A700 flex flex-col items-center justify-center p-[170px] md:px-10 sm:px-5 w-full" />
              </div>
            </div>
            <MainWebsiteOffsetitem className="absolute bg-white-A700 flex md:flex-col flex-row gap-[18.4px] h-max inset-[0] items-center justify-center m-auto sm:pl-5 pl-[25.6px] shadow-bs1 w-auto" />
          </div>
          <MainWebsiteCources
            className="bg-cover bg-no-repeat flex flex-col h-[982px] items-center justify-start py-[94px] w-full"
            style={{ backgroundImage: "url('images/img_cources.png')" }}
          />
          <MainWebsiteNews className="bg-gray-100_01 flex flex-col items-center justify-start py-[91px] w-full" />
          <MainWebsiteFooter
            className="bg-teal-900 flex flex-col font-inter items-center justify-end pt-[41px] w-full"
            connectwithustext={
              <Text className="font-saira font-semibold leading-[135.00%] text-[15.75px] text-white-A700">
                <span className="text-white-A700 font-poppins text-left font-black">
                  <>
                    Connect with us
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left">
                  <>
                    70 Chwaku Streat - Mikocheni, <br />
                    P.O. Box 65300, <br />
                    Dar Es Salaam, Tanzania.
                    <br />
                    <br />
                    Mobile: 255-22-2700021/4
                    <br />
                    Fax: 255-22-2775591
                    <br />
                    <br />
                    Email: vc@hkmu.ac.tz <br /> info@hkmu.ac.tz
                  </>
                </span>
              </Text>
            }
            resourcestext={
              <Text className="font-poppins font-semibold leading-[135.00%] text-[14.7px] text-white-A700">
                <span className="text-white-A700 text-left text-[15.75px] font-black">
                  <>
                    Resources
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-white-A700 text-left">
                  <>
                    Forms and Admission materials
                    <br />
                    Guidance Documents
                    <br />
                    Hardcopy
                    <br />
                    FAQs
                    <br />
                    Professional Education
                    <br />
                    Courses in Education
                  </>
                </span>
              </Text>
            }
          />
        </div>
      </div>
    </>
  );
};

export default MainWebsitePage;
