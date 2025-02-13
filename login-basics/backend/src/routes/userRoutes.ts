import Router from "express"
import { getUsers } from "../controllers/userControllers"

const router=Router()

router.get("/",getUsers)
router.get("/:id")

export default router