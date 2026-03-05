// page.tsx (الصفحة الرئيسية في app/page.tsx)
import HomePages from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlavorLand - Discover Delicious Recipes",
  description: "Explore thousands of delicious recipes from around the world. Find easy cooking instructions, healthy meals, and gourmet dishes for every occasion.",
  openGraph: {
    title: "FlavorLand - Discover Delicious Recipes",
    description: "Explore thousands of delicious recipes from around the world.",
    images: ["/og-home.jpg"],
  },
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <HomePages />
    </div>
  );
};

export default page;
