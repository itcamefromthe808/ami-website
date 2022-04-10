import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Redirect({ path }) {
  const router = useRouter()

  useEffect(() => {
    router.push( path )
  },[])

  // TBD: Loading component
  return null
}