### Documentação explicação do DOCKERFILE 🐋

<small>aqui está as modificações que precisei fazer no primeiro projeto</small>

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

Depois que o código está compilado, não precisamos mais do `Maven`. Só precisamos de um ambiente `Java` para rodar o `JAR`.

`Slim` = versão mais leve: A versão slim remove ferramentas desnecessárias (como compiladores e pacotes extras), tornando a imagem menor e mais rápida.

Baseada no `OpenJDK 21`: Garante que seu JAR seja executado na mesma versão de Java que foi usado na compilação.

Copiamos o JAR gerado na fase de build `(/app/target/JavaProject-0.0.1-SNAPSHOT.jar) `para dentro do contêiner.

```
CMD ["java", "-jar", "app.jar"]
```
