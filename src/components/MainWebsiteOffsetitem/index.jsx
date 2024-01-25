import React from "react";

import { Button, Img, Text } from "components";

const MainWebsiteOffsetitem = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[24.96px] items-start justify-start pb-[19.2px] pt-[12.8px] w-auto sm:w-full">
          <div className="flex flex-col gap-[24.96px] h-[257px] md:h-auto items-start justify-center w-auto sm:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[14.08px] text-black-900 text-center w-auto"
                size="txtPoppinsRegular1408"
              >
                {props?.welcometext}
              </Text>
              <Text
                className="leading-[40.00px] max-w-[363px] md:max-w-full sm:text-[26.72px] md:text-[28.72px] text-[30.72px] text-black-900"
                size="txtPoppinsSemiBold3072"
              >
                {props?.universityname}
              </Text>
            </div>
            <Text
              className="leading-[25.00px] max-w-[488px] md:max-w-full text-[14.08px] text-gray-800_01"
              size="txtPoppinsRegular1408Gray80001"
            >
              {props?.description}
            </Text>
          </div>
          <Button
            className="!text-white-A700_01 cursor-pointer font-medium font-poppins min-w-[207px] text-[14.08px] text-center"
            shape="square"
            color="teal_700"
            size="sm"
            variant="fill"
          >
            {props?.buttontext}
          </Button>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[363px] md:h-auto items-center justify-center w-[421px] sm:w-full"
          style={{ backgroundImage: "url('images/img_frame35625.png')" }}
        >
          <Img
            className="h-24 w-24"
            src="images/img_overflowmenu.svg"
            alt="overflowmenu"
          />
        </div>
      </div>
    </>
  );
};

MainWebsiteOffsetitem.defaultProps = {
  welcometext: "WELCOME TO",
  universityname: "HUBERT KAIRUKI MEMORIAL UNIVERSITY",
  description:
    "Hubert Kairuki Memorial University is fully accredited and chartered Higher Learning Institution, recognized in the United Republic of Tanzania, through the Tanzania Commission for Universities (TCU).",
  buttontext: "Get to know more",
};

export default MainWebsiteOffsetitem;
