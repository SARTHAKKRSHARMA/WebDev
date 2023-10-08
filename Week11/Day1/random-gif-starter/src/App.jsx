import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col background gap-5">
      <h1 className="mt-3 w-11/12 max-w-[1160px] mx-auto bg-white rounded-[8px] text-center p-5 font-bold text-2xl">Random GIFS</h1>
      <div className="flex flex-col w-[60%] mx-auto gap-10 my-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
