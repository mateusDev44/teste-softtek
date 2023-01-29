# ConsultarCpf

Projeto construido com o Angular 15.0.0 a versão mais atualizada e com o node na versão v16.16.0.

## Rodar o projeto

Após baixa-lo na sua máquina deve-se abrir o terminal cmd, power shell, git bash e etc... garantir que esta dentro da pasta do projeto e executar primeiramente o comando npm install para instalar todas as dependencias presentes no projeto. Essas dependências podem ser encontradas no arquivo package.json. Após instalar todas as depêndencias para rodar o projeto execute o comando ng serve. Pra rodar a api json server ir no link desse repositório: https://github.com/mateusDev44/json-server-consultar-cpf e baixar também a api mock, rodar o comando npm install e rodar a api com o comando: json-server --watch db.json

## Testar o projeto
Para realizar o teste da aplicação para o caminho feliz, testar com os seguintes cpfs:' 
59251792500
95258462617
95258462617
11709147300
72427651290
41852809558

Para simular um erro de busca, basta digitar qualquer cpf sem ser os de exemplo.

## Sugestão de como eu continuaria o projeto

Criando os componentes com as outras etapas do cadastro, na pasta steps. Para manipular os dados inseridos e salvar a etapa e os dados salvos em cada etapa, utilizaria o footerService para manipular os dados com os Subjects e os components se inscreverem nessas alterações para estar se atualizando de cada etapa salva. O melhor caminho a seguir seria em cada etapa ser salvo no backend os dados já cadastrados de cada cpf e salvar a etapa onde foi parado para que assim o backend e front estejam alinhados.

## libs e frameworks

No projeto foi utilizado o PrimeNg e o boostrap como libs de estilização. O PrimeNg foi escolhido pela sua diversidade ampla de componentes e pela sua facilidade na customização dos componentes, tendo os componentes utilizados bem dinâmicos e adaptáveis. O boostrap foi escolhido para facilitar a construção de telas responsivas, com suas classes disponibilizadas fica bem mais fácil realizar a responsividade devido os seus breekpoints como: lg,md,xl e entre outros.

## Arquitetura e estrutura

A arquitetura do projeto Angular é toda baseada em componentização. Utilizando o conceito da modulação utiliza-se o Lazy loading, para facilitar na renderização dos componentes, ajudando numa melhor performance do sistema ao todo. Separando cada parte da aplicação em modulos, e os referenciando no modulo principal main deixando o app.module mais limpo. Utilizando também os conceitos do clean code, para fazer códigos fáceis de reutilizar e de entender. Fazendo funções pequenas e com nomes sugestivos respeitando sempre o princípio da responsabilidade única. Também e criado todas as classes dos dados que vão ser retornados, para poder facilitar o que cada objeto vai conter de dados e os tipos de dados que são permitidos.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
