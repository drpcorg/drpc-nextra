export default function (props: { src: string }) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "calc(63.66666666666667% + 41px)",
        height: 0,
        marginTop: "30px",
      }}
    >
      <iframe
        src={props.src}
        loading="lazy"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          colorScheme: "light",
        }}
        title="DRPC | Web App"
      ></iframe>
    </div>
  );
}
