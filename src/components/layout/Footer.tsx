const Footer = (): React.ReactNode => {
  return (
    <footer className="w-full bg-zinc-900 z-0">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Bruno Pons. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/bruaguspons"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/brunopons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:bruaguspons@gmail.com"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
