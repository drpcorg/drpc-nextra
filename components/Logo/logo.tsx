import Image from "next/image";
import dRPC_logo from "../../public/images/dRPC.png";

export default function () {
  return <Image src={dRPC_logo} width={85} alt="dRPC logo" />;
}
