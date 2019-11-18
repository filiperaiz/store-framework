<p align="center" >
  <img src="https://imagens.genmarket.com.br/logo_genstore.png" width="">
</p>

# Gerando uma nova loja

-   Obs: Se você já tem o Node.js, Yarn, Gulp.js e GenStore CLI instalados, você pode pular as etapas 1, 2, 3 e 4.

#

## 1 - Instalar o Node.js

#### [Clique aqui para baixar o Node.js](https://nodejs.org/en/)

-   Verifique se você tem o node e o npm instalados executando:

```sh
# Node
node -v


# Npm
npm -v
```

#

## 2 - Instalar o Yarn

#### [Clique aqui para baixar o Yarn](https://yarnpkg.com/lang/pt-br/docs/install/#windows-stable)

-   Verifique se o Yarn está instalado executando:

```sh
yarn -v
```

#

## 3 - Instalar o Gulp.js

#### [Documentação do Gulp.js](https://gulpjs.com/)

```sh
# Instale o gulp-cli global
npm install gulp-cli -g


# Instale gulp global
npm install gulp -g


# Para confirmar que você tenha gulp instalado
gulp -v
```

#

## 4 - Instalar o GenStore CLI

```sh
# Instale o genstore-cli global via npm
npm install genstore-cli -g


# Ou instale o genstore-cli global via yarn
yarn global add genstore-cli


# Para confirmar que você tenha genstore instalado
genstore -v
```

#

## 5 - Crie o repositório da sua loja no Gitlab

1. Crie apenas o repositório com a branch master;

2. Não crie o repositório adicionando o readme, pois ja está inserido um template padrão;

3. Após criar repositório, seguir para os próximos passos.

#

## 6 - Criando uma loja com o GenStore CLI

obs: Use o comando abaixo na pasta onde voçê crias os seus projetos

```sh
# Use o comando para criar a loja
genstore new
```

1.  Responda todas as perguntas corretamente e não deixe nenhuma em branco;

2.  O nome da loja será o mesmo da pasta existente da loja tanto no ambiente de desenvolvimento quanto no ambiente de homologação

3.  Se tiver tudo ok, só confirmar que a pasta da loja será criada e pode começar

#

## 7 - Instalando as dependências da loja

```sh
yarn
```

#

## 8 - Fazendo Deploy dos templates e arquivos a primeira vez com Gulp (ambiente de dev e homolog)

```sh
gulp
```

#

## 9 - Configurando o git

```sh
# Inicializando um novo arquivo .git
git init


# Adicionando todos arquivos
git add .


# Fazendo o primeiro commit
git commit -m "Iniciando a loja"


# Adicionando o remote da sua loja
git remote add origin < url remote >

Exemplo: git remote add origin https://gitlab.com/rakutenbrasil/implantacao/store-custom-gulp.git


# Para verificar o remote, execute o comando abaixo:
git remote -v


#Faça o push para a branch MASTER
git push -u origin master
```

#

## 10 - Fluxo de desenvolvimento com o git

1. Com a MASTER atualizada, criaremos uma nova branch a partir dela, por exemplo: feature-header;

```sh
# Para criar a branch e entrar nela
git checkout -b feature-header

# Junta a master com a branch atual
git merge master
```

2. Adicione os arquivos e faça o commit sempre que possível, não espere finalizar a feature para realizar esta etapa;

3. Quando terminar a feature atual, siga os passos abaixo:

```sh
# Faça o push da branch atual
git push

# Faça o checkout para a branch master
git checkout master

# Junte a feature que foi finalizada com a branch master
git merge feature-header
```

4. Repita o passo 1, 2 e 3 até concluir o projeto;

#### Obs: Devemos ficar sempre nesse ciclo enquanto estivermos desenvolvendo a loja, sempre deixando a MASTER atualizada

#

## 11 - Tasks Gulp.Js

#### Tasks unitárias

```sh
# Executa as tarefas e copia todos os templates e arquivos (ambiente de dev e homolog )
gulp


# Executa a tarefa de transformação dos ícones svg em fonts
gulp icon


# Executa a tarefa de verificação de erros em javascript
gulp lint
```

#### Tasks de desenvolvimento

```sh
# Executa a tarefa de copiar todos os templates
gulp dev -t


# Executa as tarefas e copia todos os templates e arquivos
gulp dev -d


# Executa todas as tarefas, copia todos os templates e arquivos, e inicializa o Watch para as mudanças
gulp dev -w
```

#### Tasks de homologação

```sh
# Executa a tarefa de copiar todos os templates
gulp homolog -t


# Executa as tarefas e copia todos os templates e arquivos
gulp homolog -d


# Executa todas as tarefas, copia todos os templates e arquivos, e inicializa o Watch para as mudanças
gulp homolog -w
```

#### Obs: Ao rodar os comandos de homologação, o ambiente de desenvolvimento sempre será atualizado junto, fazendo com que tenhamos sempre os dois ambientes igualmente atualizado.
