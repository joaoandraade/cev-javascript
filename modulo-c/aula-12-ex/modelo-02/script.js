function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Homem Criança')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Homem Jovem')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Homem Adulto')
            } else {
                //Idoso
                img.setAttribute('src', 'Homem Idoso')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Mulher Criança')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Mulher Jovem')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'Mulher Adulta')
            } else {
                //Idosa
                img.setAttribute('src', 'Mulher Idosa')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(h2)
    }
}