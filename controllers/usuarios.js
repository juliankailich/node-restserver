

export const usuariosGet = (req, res) => {

    // para obtener los query params (?nombre='Julian'&edad=25..etc)
    const { q, nombre, apikey, page, limit } = req.query;

    res.json({
        "msg": "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

export const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        "msg": "put API -  controlador",
        id
    })
}

export const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        "msg": "post API - controlador",
        nombre,
        edad
    })
}

export const usuariosDelete = (req, res) => {
    res.json({
        "msg": "delete API - controloador"
    })
}