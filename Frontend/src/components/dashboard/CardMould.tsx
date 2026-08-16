import React from "react";
import { Card, CardContent } from "../ui/card";

interface PropInterface {
  children: React.ReactNode;
  mainText: string;
  mainTextStyle: string;
  additionalItem?: React.ReactNode;
  largeScreenColSpan: 3 | 4 | 6;
}

const CardMould = ({
  children,
  mainText,
  mainTextStyle,
  additionalItem,
  largeScreenColSpan,
}: PropInterface) => {
  const [colSpanValue, setColSpanValue] = React.useState<string>("");

  React.useEffect(() => {
    if (!largeScreenColSpan) return;
    switch (largeScreenColSpan) {
      case 3:
        setColSpanValue("lg:col-span-3");
        break;
      case 4:
        setColSpanValue("lg:col-span-4");
        break;
      case 6:
        setColSpanValue("lg:col-span-6");
        break;
      default:
        break;
    }
  }, []);

  return (
    <Card className={`bg-[#14181f] sm:col-span-6 ${colSpanValue}`}>
      <CardContent className="space-y-4">
        {/* Title Text */}
        <section className="flex items-center justify-between">
          <div className={mainTextStyle}>{mainText}</div>
          {additionalItem ?? <div>{additionalItem}</div>}
        </section>

        {children}
      </CardContent>
    </Card>
  );
};

export default CardMould;
