import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "react-bootstrap"
import { number } from "prop-types"

const AnimatedCard = ({ delay, ...props }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView])
  return (
    <Card
      {...props}
      ref={ref}
      as={motion.div}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, translateY: 50 },
        visible: { opacity: 1, translateY: 0 },
      }}
      animate={controls}
      transition={{ duration: 0.5, delay: delay || 0.1 }}
    />
  )
}

AnimatedCard.propTypes = {
  delay: number,
  ...Card.propTypes
};

export default AnimatedCard;