import { QRCodeCanvas } from "qrcode.react";

export const Index = () => {
  return (
    <div className="flex justify-center items-center">
      <QRCodeCanvas
        value={"https://www.sofianedmt.com"}
        size={500}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        imageSettings={{
          src: "/images/sansfond.png",
          x: undefined,
          y: undefined,
          height: 120,
          width: 120,
          excavate: true,
        }}
      />
    </div>
  );
};

export default Index;