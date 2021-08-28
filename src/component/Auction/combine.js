import AuctionList from "./AuctionList"
import CategoryList from "../Category/CategoryList"
import { useSelector } from "react-redux"
import { useState } from "react"
import { Redirect } from "react-router"

const Combine = () => {
  const [select, setSelect] = useState()
  const user = useSelector((state) => state.user.user)

  if (!user) return <Redirect to="/" />

  return (
    <>
      <CategoryList setSelect={setSelect} />

      <AuctionList _auction={select} />
    </>
  )
}

export default Combine
