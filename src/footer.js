import React from "react";

const Footer = () => {
  return (
    <footer style={{ color: "black", padding: "10px" }}>
      <div className="d-flex justify-content-between align-items-center">
        <p className="font mb-0">
          © 2023 &nbsp; &nbsp;
          <span className="text-primary">ผู้จัดทำ Natthawut Banrueangthong</span>
        </p>
        <a
          href="#top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
