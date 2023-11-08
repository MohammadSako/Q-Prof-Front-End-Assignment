import "./globals.css";
import Navigation from "./Navigation";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="flex ...">
        <div className="flex-none w-14 h-14 ..."></div>
        <div className="grow h-14 ...">
          <main>{children}</main>
        </div>
        <div className="flex-none w-14 h-14 ..."></div>
      </div>
    </>
  );
}
