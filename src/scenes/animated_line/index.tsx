import { motion } from "framer-motion";

type Props = {
    animateDelay: number,
    className: string
}

const AnimatedLine = ({animateDelay, className}: Props) => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: () => {
          const delay = animateDelay;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };

    return (
        <motion.svg
        className={className}
        width="100%"
        height="24"
        initial="hidden"
        animate="visible"
        >
        <motion.line
            x1="0"
            y1="12"
            x2="100%"
            y2="12"
            stroke="#8FC0A9"
            variants={draw}
            custom={2}
        />
        </motion.svg>
    )
}

export default AnimatedLine