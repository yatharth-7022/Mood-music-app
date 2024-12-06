import NavItems from "./NavItems";
function Navbar() {
  return (
    <div className="bg-navGrey fixed left-0 top-0 z-0 flex h-screen w-[13%] flex-col gap-4 py-5 pl-3 sm:w-[10%] md:w-[10%] lg:w-[8%]">
      <NavItems />
    </div>
  );
}

export default Navbar;
