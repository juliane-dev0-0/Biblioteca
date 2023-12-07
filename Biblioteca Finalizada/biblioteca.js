class EntidadeBibliografica {

    constructor(titulo, autor, anoPublicacao, codigo) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.codigo = codigo;
        this.emprestado = false;
        this.usuarioEmprestimo = null;

    }

    emprestar(usuario) {
        if (this.emprestado) {
            console.log("Já foi emprestado.");
            // alert("Já foi emprestado.");
        } else {
            this.emprestado = true;
            this.usuarioEmprestimo = usuario;
            console.log(`${this.titulo} foi emprestado para ${usuario.nome}.`);
            // alert(`${this.titulo} foi emprestado para ${usuario.nome}.`);
        }
    }

    devolver() {
        if (!this.emprestado) {
            console.log("O livro não foi emprestado.");
            // alert("O livro não foi emprestado.");
        } else {
            this.emprestado = false;
            this.usuarioEmprestimo = null;
            console.log(`${this.titulo} foi devolvido.`);
            // alert(`${this.titulo} foi devolvido.`);
        }
    }

    getInformacoes() {
        console.log(`Titulo: ${this.titulo}, autor: ${this.autor}, anoPublicacao: ${this.anoPublicacao}, codigo: ${this.codigo}, emprestado: ${this.emprestado}, usuarioEmprestimo: ${this.usuarioEmprestimo ? this.usuarioEmprestimo.nome : 'None'}`);
        // alert(`Titulo: ${this.titulo}, autor: ${this.autor}, anoPublicacao: ${this.anoPublicacao}, codigo: ${this.codigo}, emprestado: ${this.emprestado}, usuarioEmprestimo: ${this.usuarioEmprestimo ? this.usuarioEmprestimo.nome : 'Nenhum'}`);
    }
}


const genero = {
    ACAO: "Ação",
    SUSPENSE: "Suspense",
    COMEDIA: "Comédia",
    ROMANCE: "Romance",
    FANTASIA: "Fantasia",
    FICCAO_CIENTIFICA: "Ficção Científica",
    DRAMA: "Drama",
    MISTERIO: "Mistério",
    AVENTURA: "Aventura",
    TERROR: "Terror",
    POLICIAL: "Policial",
    HISTORIA: "História"
};


class Livro extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, genero) {
        super(titulo, autor, anoPublicacao, codigo);
        this.genero = genero;
    }

    imprimirInformacoes() {
        console.log(` => Título do Livro: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}, Código: ${this.codigo},  Gênero: ${this.genero}`)
    }
}
class Revista extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, edicao, codigo) {
        super(titulo, autor, anoPublicacao, codigo);
        this.edicao = edicao;
    }

    imprimirInformacoes() {
        console.log(` => Título da Revista: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}, Código:  ${this.codigo}, Edição: ${this.edicao}`)
    }

}

class Usuario {
    constructor(nome, registroAcademico, dataNascimento) {
        this.nome = nome;
        this.registroAcademico = registroAcademico;
        this.dataNascimento = dataNascimento;
        this.emprestimo = [];
    }
}

class Biblioteca {
    constructor(acervo, user) {
        this.acervo = [];
        this.user = [];
    }


    adicionarItem(item) {
        this.acervo.push(item);
        // console.log(`${item.titulo} foi adicionado ao acervo `);
    }


    adicionarUsuario(usuarios) {
        this.user.push(usuarios);
        // console.log(`${usuarios.nome} foi adicionado à lista de usuários`);
    }

    listarUsuarios() {
        console.log("Lista de Usuários");
        if (this.user.length === 0) {
            console.log(" Sem usuários registrados no sistema ");
        } else {
            this.user.forEach(usuario => {
                // const listaUsuario = usuario.usuarioEmprestimo ? ` Emprestado para ${usuario.usuarioEmprestimo.nome}` : " Disponível ";
                console.log(`Nome: ${usuario.nome} - RA: ${usuario.registroAcademico} - Data Nascimento: ${usuario.dataNascimento}`);
            });
        }
    }

    listarAcervo() {
        console.log("***********************")
        console.log("Acervo na biblioteca");
        console.log("***********************")
        if (this.acervo.length === 0) {
            console.log("***********************")
            console.log("Acervo vazio");
            console.log("***********************")
        } else {
            this.acervo.forEach(item => {
                const statusEmprestimo = item.emprestado ? "Indisponível" : "Disponível";
                item.imprimirInformacoes();
                console.log("*", statusEmprestimo)

            });
        }
    }


}


const biblioteca = new Biblioteca();

const usuario1 = new Usuario("Jepeto Fagundes", "1", "1990-08-21")
const usuario2 = new Usuario("FUlano de TAl", "2", "1990-08-22")

biblioteca.adicionarUsuario(usuario1)
biblioteca.adicionarUsuario(usuario2)


function AdicionarItem() {
    const escolha = prompt("Deseja Adicionar um Livro ou Revista? ");

    if (escolha.toLowerCase() !== "revista" && escolha.toLowerCase() !== "livro") {
        console.log("Por favor, as opções são apenas Revista ou Livro <(^ ^)>");
    }

    if (escolha.toLowerCase() === "livro") {
        const titulo = prompt("Digite o Título do livro: ");
        const autor = prompt("Digite o autor: ");
        const anoPublicacao = prompt("Digite o ano que foi publicado: ");
        const codigo = prompt("Digite um código: ");
        const generoLivro = prompt("Digite o gênero do livro: ");

        const novoLivro = new Livro(titulo, autor, anoPublicacao, codigo, genero[generoLivro.toUpperCase()]);
        biblioteca.adicionarItem(novoLivro);

    } else if (escolha.toLowerCase() === "revista") {
        const titulo = prompt("Digite o Título da revista: ");
        const autor = prompt("Digite o autor: ");
        const anoPublicacao = prompt("Digite o ano que foi publicado: ");
        const codigo = prompt("Digite um código: ");
        const edicao = prompt("Digite a edição da revista: ");

        const novaRevista = new Revista(titulo, autor, anoPublicacao, edicao, codigo);
        biblioteca.adicionarItem(novaRevista);
    }
}



function addUsuario() {
    const nome = prompt("Digite o nome do usuário: ");
    const registroAcademico = prompt("Digite o RA do usuário: ");
    const dataNascimento = prompt("Digite a data de nascimento do usuário: ");

    const novoUser = new Usuario(nome, registroAcademico, dataNascimento);

    biblioteca.adicionarUsuario(novoUser);
}

function emprestarLivro() {
    const codigo = prompt("Digite o código do livro para emprestar: ");
    const userRA = prompt("Digite o RA do usuário: ");

    const livro = biblioteca.acervo.find(item => item.codigo === codigo);
    const usuario = biblioteca.user.find(user => user.registroAcademico === userRA);

    if (livro && usuario) {
        if (!livro.emprestado) {
            livro.emprestado = true;
            usuario.emprestimo.push(livro);
            console.log(`Livro ${livro.titulo} emprestado com sucesso para ${usuario.nome}!!`);
        } else {
            console.log("***************************")
            console.log("Livro já emprestado!");
            console.log("***************************")
        }
    } else {
        console.log("Livro ou usuário não encontrado!");
    }
}

function devolverLivro() {
    const codigo = prompt("Digite o código do livro para devolver: ");
    const livro = biblioteca.acervo.find(item => item.codigo === codigo);

    if (livro) {
        if (livro.emprestado) {
            livro.emprestado = false;
            livro.usuarioEmprestimo = null;
            console.log("***********************************************")
            console.log(`Livro ${livro.titulo} devolvido com sucesso!`);
            console.log("***********************************************")
        } else {
            console.log("O livro não está emprestado atualmente.");
        }
    } else {
        console.log("Livro não encontrado!");
    }
}

async function API() {
    try {
        const resposta = await fetch("https://api-biblioteca-mb6w.onrender.com/acervo");
        const dadosAPI = await resposta.json();

        dadosAPI.forEach(data => {
            const { codigo, titulo, autor, anoPublicacao, genero, entidadeBibliografica } = data;

            if (data.entidadeBibliografica == "Livro") {
                const novoLivro = new Livro(titulo, autor, anoPublicacao, codigo, genero);
                biblioteca.adicionarItem(novoLivro);
            } else if (data.entidadeBibliografica == "Revista") {
                const novaRevista = new Revista(titulo, autor, anoPublicacao, data.edicao, codigo);
                biblioteca.adicionarItem(novaRevista);
            }
        });




        console.log("****************************")
        console.log("Dados carregados fih! ihuu")
        console.log("****************************")
        return dadosAPI;

    } catch (erro) {
        console.log("****************************")
        console.error("Erro ao obter dados da API:", erro);
        console.log("****************************")
        return [];
    }
}

API();