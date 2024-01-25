import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold147: "font-poppins font-semibold",
  txtPoppinsMedium2016: "font-medium font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsRegular1344: "font-normal font-poppins",
  txtSairaRomanSemiBold1575: "font-saira font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular99: "font-normal font-poppins",
  txtPoppinsRegular1478: "font-normal font-poppins",
  txtPoppinsRegular1638Gray800: "font-normal font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsBold1638: "font-bold font-poppins",
  txtPoppinsExtraBold512: "font-extrabold font-poppins",
  txtPoppinsRegular1638: "font-normal font-poppins",
  txtPoppinsSemiBold176: "font-poppins font-semibold",
  txtPoppinsSemiBold216: "font-poppins font-semibold",
  txtInterRegular147: "font-inter font-normal",
  txtPoppinsSemiBold1575: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular1408Gray80001: "font-normal font-poppins",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsSemiBold3072: "font-poppins font-semibold",
  txtPoppinsRegular22Gray80001: "font-normal font-poppins",
  txtPoppinsRegular176: "font-normal font-poppins",
  txtPoppinsRegular1408: "font-normal font-poppins",
  txtInterRegular12: "font-inter font-normal",
  txtPoppinsRegular1638Gray80001: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
