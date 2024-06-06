import React, { useState, useEffect, useRef } from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faGithub, url: "https://github.com" },
  { icon: faLinkedin, url: "https://linkedin.com" },
  { icon: faTwitter, url: "https://twitter.com" },
];

const Header = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      width="100%"
      backgroundColor="black"
      transform={show ? "translateY(0)" : "translateY(-200px)"}
      transition="transform 0.3s ease-in-out"
      zIndex={1000}
    >
      <HStack justifyContent="space-between" p={4}>
        <HStack spacing={4}>
          {socials.map((social, index) => (
            <Link key={index} href={social.url} isExternal color="white">
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </Link>
          ))}
        </HStack>
        <HStack spacing={4}>
          <Link
            href="#projects-section"
            onClick={(e) => handleClick(e, "#projects-section")}
            color="white"
          >
            Projects
          </Link>
          <Link
            href="#contactme-section"
            onClick={(e) => handleClick(e, "#contactme-section")}
            color="white"
          >
            Contact
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

const handleClick = (e, sectionId) => {
  e.preventDefault();
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default Header;
