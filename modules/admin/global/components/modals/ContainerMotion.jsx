import { motion } from "framer-motion";

const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export default function ContainerMotion({ children, visible }) {
  return (
    <motion.section className="hidden" animate={visible ? show : hide}>
      {children}
    </motion.section>
  );
}
