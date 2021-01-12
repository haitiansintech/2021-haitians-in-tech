import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/background-image.css"
import { motion } from "framer-motion"

const BgImage = () => (
  <div className="hero-container">
    <div className="black-overlay">
      <div className="content-box">
        <h1>
          {'"Success is not an accident,'.split(" ").map(word => (
            <>
              <div className="d-inline-block">
                {word.split("").map((char, index) => (
                  <motion.div
                    key={index}
                    className="d-inline-block"
                    initial={{ opacity: 0, translateY: 100 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: index / 19 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.div>
                ))}
              </div>
              <div className="d-inline-block">{"\u00A0"}</div>
            </>
          ))}
        </h1>
        <h1>
          {'success is a choice."'.split(" ").map(word => (
            <>
              <div className="d-inline-block">
                {word.split("").map((char, index) => (
                  <motion.div
                    key={index}
                    className="d-inline-block"
                    initial={{ opacity: 0, translateY: 100 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: index / 19 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.div>
                ))}
              </div>
              <div className="d-inline-block">{"\u00A0"}</div>
            </>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          — Stephen Curry
        </motion.p>
      </div>
    </div>
  </div>
)

export default BgImage
