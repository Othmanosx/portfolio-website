import { useRouter } from "next/router"
import { useEffect } from "react"
import { pageview } from "utils/gtag"

const GoogleAnalyticsReporter = () => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
  return null
}

export default GoogleAnalyticsReporter
