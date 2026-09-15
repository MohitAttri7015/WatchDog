import Nav from "@/components/nav/nav";

export const metadata = {
  title: "Watch Dog",
  description: "",
};

export default function MarketingLayout({ children }) {
  return (
    <div className="w-full">
        <header>
          <Nav />
        </header>

        {children}
        
    </div>
  );
}
