let nomeDoHeroi
let quantidadeDeXp
let rankingDoHeroi

nomeDoHeroi = prompt('Digite o nome do seu Herói: ')
quantidadeDeXp = prompt('Digite a quantidade de Xp do seu Herói (0 - 15000): ')

if(quantidadeDeXp <= 1000){
    rankingDoHeroi = 'Ferro'
} else if (quantidadeDeXp >= 1001 && quantidadeDeXp <= 2000){
    rankingDoHeroi = 'Bronze'
} else if (quantidadeDeXp >= 2001 && quantidadeDeXp <= 5000){
    rankingDoHeroi = 'Prata'
} else if (quantidadeDeXp >= 5001 && quantidadeDeXp <= 7000){
    rankingDoHeroi = 'Ouro'
} else if (quantidadeDeXp >= 7001 && quantidadeDeXp <= 8000){
    rankingDoHeroi = 'Platina'
} else if (quantidadeDeXp >= 8001 && quantidadeDeXp <= 9000){
    rankingDoHeroi = 'Ascendente'
} else if (quantidadeDeXp >= 9001 && quantidadeDeXp <= 10000){
    rankingDoHeroi = 'Imortal'
} else {
    rankingDoHeroi = 'Radiante'
}

console.log('O Herói do nome ' + nomeDoHeroi + ' está no nível de ' + rankingDoHeroi + '.')