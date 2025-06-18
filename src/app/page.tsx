import Image from "next/image";
import Navbar from "@/components/Navbar";
import InputMutui from "@/components/InputMutui";
import InputGpt from "@/components/InputGpt";
import Disclamair from "@/components/Disclamair";
import Head from "next/head";
export default function Home() {
  return (
    <div className="">
      <Head>
        <script
          data-goatcounter="https://francescomutui.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
        ></script>
      </Head>
      <Navbar />
      <div>
        <InputMutui />
      </div>
    </div>
  );
}
