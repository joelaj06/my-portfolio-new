import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const muiTheme = createTheme({
    typography: {
      fontFamily: `"Space Grotesk", sans-serif`,
    },
  });
  return (
    <ThemeProvider theme={muiTheme}>
      <div className="flex flex-row h-screen p-2">
        <div className="w-3/12">
          <SideBar />
        </div>
        <div className=" w-9/12">
          <MainContent />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
