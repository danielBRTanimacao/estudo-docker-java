# Estudando DOCKER + SQL + JAVA ☕

> Um simples "Olá, mundo!" em spring para deploy e instalação dos pacotes necessarios em java... Esté estudo esta sendo feito com base em pesquisas no ChatGPt além de tutoriais e documentações.

<a href="https://www.youtube.com/@GrandeFiasco">Canal do Fiasco</a> |
<a href="https://www.youtube.com/@kipperdev">Canal da Fernanda Kipper</a>

## Explicação do DOCKERFILE 🐋

<small>aqui está as modificações que precisei fazer no projeto</small>

-   FROM `maven:3.9.6-eclipse-temurin` AS `build`

### 🟢 Por que usar essa imagem? 💭

-   `Maven`: Por o projeto usar o Maven, e necessario de uma <em>IMAGEM</em> que já tenha Maven instalado para baixar dependências e compilar o código.

-   `JDK21`: O projeto usa Java 21, então precisamos de uma versão do Maven que rode com essa versão do Java.

-   `Eclipse Temurin`: A fundação Eclipse mantém distribuições de Java de código aberto, conhecidas por serem leves e bem otimizadas.

### O que e uma imagem DOCKER? 🖼️

Uma imagem Docker é um modelo imutável usado para criar contêineres Docker. Ela contém tudo o que um aplicativo precisa para rodar, incluindo:

-   ✅ O sistema operacional base (como Ubuntu, Alpine, Debian)
-   ✅ Bibliotecas e dependências necessárias
-   ✅ O código-fonte da aplicação
-   ✅ Configurações e variáveis de ambiente
-   ✅ Comandos para inicialização da aplicação

### 🟢 Por que usar essa imagem? 💭

-   FROM `openjdk:21-jdk-slim`

Por que usar...
