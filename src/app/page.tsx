import { Footer, Header, Library, Main, PlayingNow } from "@/components";

export default function Home() {
  return (
    <div className="m-2">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Header />
        <div className="flex flex-1 w-full gap-2 h-auto">
          <Library />
          <Main />
          <PlayingNow />
        </div>
        <Footer />
      </div>
    </div>
  );
}