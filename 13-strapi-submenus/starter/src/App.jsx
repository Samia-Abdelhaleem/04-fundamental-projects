import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import { useGlobalContext } from "./context/globalContext";

const App = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
