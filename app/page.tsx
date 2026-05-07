import Image from "next/image";

export default function Home() {
  return (
   <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "cyan",
          fontSize: "80px",
        }}
      >
        Dev-Tasks
      </h1>
    </div>
  );
}
