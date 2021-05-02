import React from "react";

const Footer = () => {
  return (
    <section className="antialiased bg-gray-100">
      <div className="container px-8 mx-auto pt-4">
        <div className="justify-between block w-full lg:flex">
          <div className="content-end pb-6 text-black font-serif tracking-wider">
            <p>Copyright &#169; 2021</p>
            <p>
              All Rights Reserved By Caron Greaves{" "}
              <a
                href="https://www.choicehr-tt.com/"
                className="text-blue-accent-700"
                target="_blank"
                rel="noreferrer"
              >
                @Choice HR Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
