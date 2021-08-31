//FORMULARIO
module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

//SALVAMENTO 
module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    //FORMULARIO 
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Nome do Autor é obrigatório').notEmpty();
    //FUNÇÃO DA DATA 
    function isValidDate(value) {
        if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;

        const date = new Date(value);
        if (!date.getTime()) return false;
        return date.toISOString().slice(0, 10) === value;
    }

    req.assert('data_noticia').custom(isValidDate).withMessage('Data Obrigatória');
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    //ERRO DO FORMULARIO NÃO PREENCHIDO
    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    //SALVAMENTO DA NOTICIA
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });

}