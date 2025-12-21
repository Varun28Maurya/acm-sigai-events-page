import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/events" },
  { label: "Hands on", path: "/seminar" },
  { label: "Hands on workshops", path: "/seminar" },
  { label: "Hands on workshops, competitions", path: "/seminar" },
  { label: "Hands on workshops, competitions, and seminars", path: "/seminar" },
  { label: "Hands on workshops, competitions, and seminars", path: "/seminar" },
  { label: "Hands on workshops, competitions, and seminars", path: "/seminar" },
  { label: "Hands on workshops", path: "/seminar" },
  { label: "Hands on", path: "/seminar" },
  { label: "Seminars", path: "/seminar" },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[var(--nav-height)] flex items-center justify-between px-8 border-b border-border/50 bg-background/80 backdrop-blur-sm z-10">
        <div className="text-sm uppercase tracking-widest">Component 1</div>
      </header>

      {/* Menu Content */}
      <nav className="max-w-2xl w-full space-y-1 py-20">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block py-4 px-6 border-b border-border/30 hover:bg-secondary/50 hover:border-accent/50 transition-all duration-300 group"
          >
            <span className="group-hover:text-accent transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Navigation Dots */}
      <div className="flex gap-3 mt-12">
        <div className="w-2 h-2 rounded-full bg-foreground/50"></div>
        <div className="w-2 h-2 rounded-full bg-foreground"></div>
      </div>
    </div>
  );
};

export default Menu;
