# node
 aulas de nodejs

 # criar arquivo
 type nul > index.js

# criar diretório
 mkdir exemplo5

 # executar arquivo - Ativa conexão para acesso via web
 node 'nomeArquivo.extensão'
    * ou *
 nodemon 'nomeArquivo.extensão'

 # executar pela aplicação
  - node.js (apenas sem o command) .. é o mesmo que executar via terminal (vscode)
  - node.js command prompt


 # criando pacote npm (node package manager)
 # Para iniciar o projeto do express (framework minimalista)
 
 1) npm init -- (para iniciar a configuração do projeto) - gera o arquivo 'package.json'
    * após a instalação/configuração, abrir o 'package.js' e inserir  >>  "type": "module",

 2) npm install express  -- >> save

 3) npm install -g nodemon
 3.1) executar a aplicação via (nodemon 'nomeArquivo.extensão) >> atualiza a página sem precisar interrupção e inicialização, apenas com recarregar (f5)
 3.2) npm install ejs

 ## Criar pluging para alterar cor/fonte
 https://www.npmjs.com/package/chalk
 - executar na linha comando (npm install chalk)

 https://www.npmjs.com/package/node-fetch
 - npm install node-fetch

 https://expressjs.com/pt-br/
 

 # Instalando o 'nodemon' ,, atualização automática para carregar no servidor
  - npm install -g nodemon  (-g >> para instalação global)

  # Controla - transportar dados do back-end para o front-end
  - npm install ejs

  # instalando recursos para mysql
  - npm install mysql2
