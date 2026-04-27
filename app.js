'use strict'

async function  getDadosCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
                    //fetch é igual o navegador, vai fazer uma requisição neste servidor (url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}


async function  preencherFormulario(){
    const cep = document.getElementById('cep').value
    const dadosCep = await getDadosCep(cep)

    document.getElementById('endereco').value = dadosCep.logradouro
    document.getElementById('bairro').value = dadosCep.bairro
    document.getElementById('cidade').value = dadosCep.localidade
    document.getElementById('estado').value = dadosCep.estado

}


                                //função, posteriormente a função que realiza a ação
document.getElementById ('cep').addEventListener('focusout', preencherFormulario)
