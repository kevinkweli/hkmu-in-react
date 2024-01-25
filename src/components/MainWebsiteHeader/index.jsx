import React from "react";

import { Button, Text } from "components";

const MainWebsiteHeader = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_header.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[99.2px] items-center justify-start w-auto md:w-full">
          <div className="flex flex-col gap-[38.4px] items-center justify-start w-auto md:w-full">
            <Text
              className="text-[17.6px] text-center text-white-A700 w-auto"
              size="txtPoppinsSemiBold176"
            >
              {props?.admissiontext}
            </Text>
            <div className="flex flex-col gap-[35.2px] items-center justify-start w-auto md:w-full">
              <Text
                className="sm:text-[37.2px] md:text-[43.2px] text-[51.2px] text-white-A700 w-auto"
                size="txtPoppinsExtraBold512"
              >
                {props?.readytoapplytext}
              </Text>
              <Text
                className="leading-[32.00px] max-w-[880px] md:max-w-full text-[17.6px] text-center text-white-A700_01"
                size="txtPoppinsRegular176"
              >
                {props?.descriptiontext}
              </Text>
            </div>
          </div>
          <Button
            className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[203px] text-[17.6px] text-center"
            shape="square"
            color="teal_700"
            size="md"
            variant="fill"
          >
            {props?.getstartedbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

MainWebsiteHeader.defaultProps = {
  admissiontext: "ADMISSION 2024/25",
  readytoapplytext: "ARE YOU READY TO APPLY",
  descriptiontext: (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      <br />
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      laborum
      <br />
      numquam blanditiis harum quisquam eius sed odit fugiat
    </>
  ),
  getstartedbutton: "Get Started",
};

export default MainWebsiteHeader;
