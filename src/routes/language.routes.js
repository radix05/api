import { Router } from "express";
import { methods as languagecontrollers } from "../controlers/language.controllers";

const router = Router();

router.get("/",languagecontrollers.getLanguages );
router.post("/",languagecontrollers.addLanguages );
router.delete("/:id_producto",languagecontrollers.deleteLanguage);
router.put("/:id_factura",languagecontrollers.updateLanguage);
export default router;