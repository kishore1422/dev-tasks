import Image from "next/image";

export default function Home() {
  return (
    <>
     <nav className="w-full h-10  flex justify-between items-center">
    
        <img
          className="h-10 rounded-4xl"
          src="https://imgs.search.brave.com/i_LJIY20Ct8f1rFQcMJd4IYjauGyot-_6H6yQ1aWEB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ZlY3Rvci1wLWQt/bGV0dGVyLWxvZ28t/cG5nLTIucG5n"
          alt="Logo - image"
        ></img>
        <ul className="flex items-center ">
          <li  className="ml-5"><a  href="https://www.google.com">Home</a></li>
          <li className="ml-5"><a href="https://www.google.com" >about</a></li>
          <li className="ml-5"><a  href="https://www.google.com">Contact</a></li>
        </ul>
        
        <button className="hidden md:block px-2 py-2 bg-indigo-500  text-white rounded  ">Login / Signup</button>
      
      </nav>
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
          fontSize: "50px"
        }}
      >
        Dev-Tasks
      </h1>
    </div>
    </>
  );
}
