const yup = require('yup')
//esquema de validação
const schemaNovaPessoa = yup.object().shape(
    {
        nome: yup.string().required("O campo nome é obrigatório"),
        cpf: yup.string().required("o campo cpf é obrigatorio"),
        email: yup.string().email("E-mail invalido").required("o campo email é obrigatorio"),
        dataNascimento: yup.date().required("o campo Data de nascimento é obrigatorio"),
        genero: yup.string().required("o campo genero é obrigatorio"),
        
    }
)


//midleware de validação
async function validarNovaPessoa(req,res,next){
    try{
            await schemaNovaPessoa.validate(req.body, {abortEarly: false})
            next()
    }catch (error){
        return res.status(400).json({
            
        })
    }
}

//exporta midleware 
mudule.exports = {
    
}