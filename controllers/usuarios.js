const usuarioGet = (req, res) => {
    const { q } = req.query;

    res.json({
        msg: "Hellow Word!!",
    });
};

const usuarioPost = (req, res) => {
    const body = req.body;
    res.json({
        msg: "Hello word Desde post",
        body,
    });
};

const usuarioPut = (req, res) => {
    res.json({
        msg: "hello word desde put",
    });
};

const usuarioPatch = (req, res) => {
    res.json({
        msg: "hello word desde patch",
    });
};

const usuarioDelete = (req, res) => {
    res.json({
        msg: "hello word desde Delete",
    });
};

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete,
};