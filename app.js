function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let pesquisa = document.getElementById("campo-pesquisa").value
    let append = "";

    if(pesquisa == "") {
        section.innerHTML = "<p>Nenhum atleta encontrado</p>";
        return;
    }

    for(let atleta of atletas) {    
        if(atleta.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
            atleta.descricao.toLowerCase().includes(pesquisa.toLowerCase()) ||
            atleta.tags.toLowerCase().includes(pesquisa.toLowerCase()))
        //if(atleta.titulo.toLowerCase().indexOf(pesquisa.toLowerCase()) > -1)
            append += 
                `<div class="item-resultado">
                        <h2>
                            <a href=${atleta.insta} target="_blank">${atleta.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${atleta.descricao}</p>
                        <a href=${atleta.wiki} target="_blank">Mais informações</a>
                    </div>`
    }

    if(append == "")
        append = "<p>Nenhum atleta encontrado</p>";
    section.innerHTML = append;
}