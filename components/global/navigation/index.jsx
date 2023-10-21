import { logOut } from "features";
import { motion } from "framer-motion";
import { useNavigateDispatch } from "hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import Menu from "./menu";
import LoggedOptions from "./options/logged";
import NoLoggedOptions from "./options/no-logged";
import { Container, NavbarCont } from "./styled";

const LINKS = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Cart",
    route: "/cart",
  },
  {
    title: "My profile",
    route: "/profile",
  },
  {
    title: "Reviews",
    route: "/profile/reviews",
  },
  {
    title: "Shops",
    route: "/profile/shops",
  },
];

const LINKS_ADMIN = [
  {
    title: "Administrator",
    route: "/admin/dashboard",
  },
];

const Navbar = () => {
  const [openAside, setOpenAside] = useState(false);
  const { logged, role, name } = useSelector((state) => state.user);

  const router = useRouter();

  const handleLogout = useNavigateDispatch(logOut, "/");

  useEffect(() => {
    setOpenAside(false);
  }, [router.route]);

  return (
    <Container>
      <NavbarCont>
        <Menu handleOpenAside={() => setOpenAside(true)} />
        {logged ? <LoggedOptions userName={name} /> : <NoLoggedOptions />}
      </NavbarCont>
      <motion.aside
        initial={{ translateX: "100vh" }}
        animate={openAside ? "show" : "hide"}
        variants={variants}
        className="h-screen w-screen z-50 fixed top-0 bg-primary-400/90 p-10 block laptop:hidden"
      >
        <div
          className="p-3 absolute top-9 right-9 rounded-full bg-moztaza-500/70"
          onClick={() => setOpenAside(false)}
        >
          <AiOutlineClose color="#fff" />
        </div>
        <div className="text-white my-14 h-full">
          {logged ? (
            <ul className="flex flex-col gap-5 h-full">
              <li className="p-3 rounded text-xl font-semibold">
                HELLO {name.toUpperCase()}
              </li>
              {LINKS.map((item, index) => (
                <Link key={index} href={item.route}>
                  <li className="p-3 hover:bg-primary-300 rounded text-sm">
                    {item.title.toUpperCase()}
                  </li>
                </Link>
              ))}
              {role >= 10 &&
                LINKS_ADMIN.map((item, index) => (
                  <Link key={index} href={item.route}>
                    <li className="p-3 hover:bg-primary-300 rounded">
                      {item.title.toUpperCase()}
                    </li>
                  </Link>
                ))}
              <li
                className="p-3 hover:bg-primary-300 rounded mt-auto mb-10"
                onClick={() => {
                  handleLogout();
                  setOpenAside(false);
                }}
              >
                LOGOUT
              </li>
            </ul>
          ) : (
            <ul className=" flex flex-col gap-5">
              <Link href={"/auth/login"}>
                <li className="p-3 hover:bg-primary-300 rounded">LOGIN</li>
              </Link>
              <Link href={"/auth/signup"}>
                <li className="p-3 hover:bg-primary-300 rounded">SIGNUP</li>
              </Link>
            </ul>
          )}
        </div>
      </motion.aside>
    </Container>
  );
};

const variants = {
  hide: { translateX: "100vw", transition: { ease: "linear" } },
  show: { translateX: "0vw", transition: { ease: "linear" } },
};

export default Navbar;
