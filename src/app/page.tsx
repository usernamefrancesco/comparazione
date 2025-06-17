import Image from "next/image";
import Navbar from "@/components/Navbar";
import InputMutui from "@/components/InputMutui";
import InputGpt from "@/components/InputGpt";
import Disclamair from "@/components/Disclamair";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div>
        <InputMutui />
      </div>
    </div>
  );
}
