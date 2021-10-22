const { Router } = require("express");
const {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
    usuarioPatch,
} = require("../controllers/usuarios");

const router = Router();

router.get("/:id", usuarioGet);

router.post("/", usuarioPost);

router.patch("/", usuarioPatch);

router.put("/", usuarioPut);

router.delete("/", usuarioDelete);

module.exports = router;