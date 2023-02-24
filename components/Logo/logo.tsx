import Logo from "../../public/images/logo.svg";

export default function () {
  return (
    <div>
      <img alt="DRPC" src={Logo.src} style={{ display: "inline-block" }} /> DRPC
    </div>
  );
}
