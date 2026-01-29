export default function DesktopView({
  navLinks,
  activeLink,
  handleLinkClick,
  getSectionId,
}) {
  return (
    <nav className="hidden lg:flex lg:items-center lg:gap-7">
      {navLinks?.map((link) => (
        <a
          key={link}
          href={`#${getSectionId(link)}`}
          onClick={(e) => handleLinkClick(e, link)}
          className={`text-[14px] font-medium uppercase transition-colors duration-300
          ${activeLink === link ? "text-[#6033FF]" : "text-[#4D4D4D]"}
          hover:text-[#6033FF]`}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}
