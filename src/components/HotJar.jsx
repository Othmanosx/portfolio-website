import { hotjar } from "react-hotjar"
import { useEffect } from "react"

function HotJar() {
  useEffect(() => {
    hotjar.initialize(3356541, 6)
  }, [])
  return <></>
}
export default HotJar
