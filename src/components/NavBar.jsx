const Navbar = () => {
  return (
    <nav className="bg-primary text-black px-8 py-3 flex justify-between items-center">
      <ul className="flex gap-6">
        {["Home", "About", "Solution", "Sector", "Gallery", "Contact", "Payment"].map(
          (item, i) => (
            <li
              key={i}
              className={`cursor-pointer hover:text-secondary ${
                item === "Home" && "text-secondary"
              }`}
            >
              {item}
            </li>
          )
        )}
      </ul>

      <button className="bg-secondary px-5 py-2 font-semibold hover:bg-blue-600 transition">
        GET A QUOTE
      </button>
    </nav>
  );
};

export default Navbar;
