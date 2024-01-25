import React from "react";

import { Button, Img, List, Text } from "components";

const MainWebsiteNews = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[1512px] px-2.5 py-4 w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
            size="txtPoppinsBold32"
          >
            {props?.priceTwo}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[1512px] p-2.5 w-full">
          <Text
            className="text-[22px] text-center text-gray-800_01 sm:text-lg md:text-xl w-auto"
            size="txtPoppinsRegular22Gray80001"
          >
            {props?.loremipsumdolorOne}
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start mb-[147px] mt-[23px] w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-col gap-[31.92px] items-start justify-start pb-[15.12px] w-auto sm:w-full">
            <Img
              className="h-[210px] sm:h-auto object-cover w-full"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
            <div className="flex flex-col gap-[36.12px] items-start justify-start sm:px-5 px-[20.16px] w-auto sm:w-full">
              <div className="flex flex-col gap-[11.76px] items-start justify-start w-auto">
                <div className="flex flex-row gap-[2.69px] items-start justify-start w-auto">
                  <div className="flex flex-row gap-[5.38px] items-center justify-start w-[118px]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-[14.78px] text-gray-700 w-auto"
                      size="txtPoppinsRegular1478"
                    >
                      {props?.date}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5.38px] items-center justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_lock_gray_700.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-[14.78px] text-gray-700 w-auto"
                      size="txtPoppinsRegular1478"
                    >
                      {props?.author}
                    </Text>
                  </div>
                </div>
                <Text
                  className="max-w-[341px] md:max-w-full sm:text-[16.16px] md:text-[18.16px] text-[20.16px] text-gray-900"
                  size="txtPoppinsMedium2016"
                >
                  {props?.title}
                </Text>
                <Text
                  className="leading-[15.00px] max-w-[338px] md:max-w-full text-[13.44px] text-gray-800_01"
                  size="txtPoppinsRegular1344"
                >
                  {props?.description}
                </Text>
              </div>
              <Button
                className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[114px] text-[9.98px] text-center"
                shape="square"
                color="teal_700"
                size="xs"
                variant="fill"
              >
                {props?.readmorebutton}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[31.92px] items-start justify-start pb-[15.12px] w-auto sm:w-full">
            <Img
              className="h-[210px] sm:h-auto object-cover w-full"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
            <div className="flex flex-col gap-[36.12px] items-start justify-start sm:px-5 px-[20.16px] w-auto sm:w-full">
              <div className="flex flex-col gap-[11.76px] items-start justify-start w-auto">
                <div className="flex flex-row gap-[2.69px] items-start justify-start w-auto">
                  <div className="flex flex-row gap-[5.38px] items-center justify-start w-[118px]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-[14.78px] text-gray-700 w-auto"
                      size="txtPoppinsRegular1478"
                    >
                      {props?.date1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5.38px] items-center justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_lock_gray_700.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-[14.78px] text-gray-700 w-auto"
                      size="txtPoppinsRegular1478"
                    >
                      {props?.author1}
                    </Text>
                  </div>
                </div>
                <Text
                  className="max-w-[341px] md:max-w-full sm:text-[16.16px] md:text-[18.16px] text-[20.16px] text-gray-900"
                  size="txtPoppinsMedium2016"
                >
                  {props?.title1}
                </Text>
                <Text
                  className="leading-[15.00px] max-w-[338px] md:max-w-full text-[13.44px] text-gray-800_01"
                  size="txtPoppinsRegular1344"
                >
                  {props?.description1}
                </Text>
              </div>
              <Button
                className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[114px] text-[9.98px] text-center"
                shape="square"
                color="teal_700"
                size="xs"
                variant="fill"
              >
                {props?.readmorebutton1}
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col gap-[31.92px] items-start justify-start pb-[15.12px] w-auto sm:w-full">
            <Img
              className="h-[210px] sm:h-auto object-cover w-full"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
            <div className="flex flex-col gap-[36.12px] items-start justify-start sm:px-5 px-[20.16px] w-auto sm:w-full">
              <div className="flex flex-col gap-[11.76px] items-start justify-start w-auto">
                <div className="flex flex-row gap-[2.69px] items-start justify-start w-auto">
                  <div className="flex flex-row gap-[5.38px] items-center justify-start w-[118px]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="text-[14.78px] text-gray-700 w-auto"
                      size="txtPoppinsRegular1478"
                    >
                      {props?.date2}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5.38px] items-center justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_lock_gray_700.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-[14.78px] text-gray-700 w-auto"
                      size="txtPoppinsRegular1478"
                    >
                      {props?.author2}
                    </Text>
                  </div>
                </div>
                <Text
                  className="max-w-[341px] md:max-w-full sm:text-[16.16px] md:text-[18.16px] text-[20.16px] text-gray-900"
                  size="txtPoppinsMedium2016"
                >
                  {props?.title2}
                </Text>
                <Text
                  className="leading-[15.00px] max-w-[338px] md:max-w-full text-[13.44px] text-gray-800_01"
                  size="txtPoppinsRegular1344"
                >
                  {props?.description2}
                </Text>
              </div>
              <Button
                className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[114px] text-[9.98px] text-center"
                shape="square"
                color="teal_700"
                size="xs"
                variant="fill"
              >
                {props?.readmorebutton2}
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

MainWebsiteNews.defaultProps = {
  priceTwo: "LATEST NEWS",
  loremipsumdolorOne:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
  date: "Jan 12, 2024",
  author: "Alice Mujuni",
  title: "Tanzanian Doctors Perform First Successful Heart Transplant",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  readmorebutton: "Read more",
  date1: "Jan 12, 2024",
  author1: "Alice Mujuni",
  title1: "Tanzanian Doctors Perform First Successful Heart Transplant",
  description1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  readmorebutton1: "Read more",
  date2: "Jan 12, 2024",
  author2: "Alice Mujuni",
  title2: "Tanzanian Doctors Perform First Successful Heart Transplant",
  description2:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat",
  readmorebutton2: "Read more",
};

export default MainWebsiteNews;
