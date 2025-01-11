import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex flex-row h-screen py-2">
        <div className="w-3/12">
          <SideBar />
        </div>
        <div className=" w-9/12">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
