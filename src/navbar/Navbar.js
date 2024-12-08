const navItems1 = [
  {
    label: "Home",
    logo: "/assets/Group-3.png",
  },
  { label: "Search", logo: "/assets/fi-rs-search.png" },
  { label: "Your Library", logo: "/assets/library.png" },
];
const navItems2 = [
  {
    label: "Create Playlist",
    logo: "/assets/add.png",
  },
  { label: "Liked Songs", logo: "/assets/smallheart.png" },
  { label: "Your episodes", logo: "/assets/episodes.png" },
];

function Navbar() {
  return (
    <div className="flex h-full w-full flex-col gap-4 px-2 py-6 text-white">
      <div className="ml-3">
        <img src="/assets/Spotify-logo.png" alt="" />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
