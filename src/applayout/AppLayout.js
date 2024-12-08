import Navbar from "../navbar/Navbar";
import Main from "../ui/Main";
function AppLayout() {
  return (
    <>
      <div className="flex h-screen w-screen flex-row">
        <div className="bg-navbar h-screen basis-1/6">
          <Navbar />
        </div>
        <div className="bg-custom-gradient h-screen flex-1">
          <Main />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
