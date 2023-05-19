import { motion } from "framer-motion";

type Props = {
    duration: number,
    delay: number
}

const FadeInDiv = (props: React.PropsWithChildren<Props>) => {
  return (
    <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
        duration: props.duration,
        delay: props.delay,
        }}>
      {props.children}
    </motion.div>
  )
}

export default FadeInDiv