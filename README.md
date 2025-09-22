# Gerador de Senhas Seguras - React Native

<div align="center">
  <img src="./assets/projeto gerador-senhas.png" alt="App Preview" width="150"/>
</div>



## Descrição

Este projeto é um **gerador de senhas seguras** desenvolvido durante um curso da **DIO**.  
O aplicativo permite ao usuário gerar senhas personalizadas de forma prática e interativa, utilizando **React Native**.

Funcionalidades principais:

- Seleção de tipos de caracteres: **numéricos, letras e símbolos**.
- Ajuste da **quantidade de caracteres** usando um **slider**.
- **Geração dinâmica** da senha baseada nas escolhas do usuário.
- **Copiar** a senha para a área de transferência.
- **Limpar** a senha gerada.

---

## Tecnologias

- **React Native**
- **Expo**
- **TypeScript**
- **@react-native-community/slider**
- **expo-clipboard**

---

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone <https://github.com/bswbruno/gerador-senhas.git>
cd <gerador-senhas>
```

## Instale as dependências

```bash
npm install
# ou
yarn install
```

## Execute o projeto

```
npx expo start

ou

npm run start
```

Abra no seu emulador ou dispositivo físico usando o QR code fornecido pelo Expo.

## Estrutura do projeto

```
src/
├── components/
│   ├── BatButton/
│   ├── BatOption/
│   ├── BatTextInput/
│   ├── BatLogo/
├── screens/
│   └── Home/
├── services/
│   └── passwordService.ts
assets/
App.tsx

```
BatOption: Componente para selecionar tipos de caracteres e quantidade de caracteres.

BatButton: Componente para gerar, copiar e limpar a senha.

BatTextInput: Componente que exibe a senha gerada.

passwordService.ts: Lógica de geração de senhas baseada nas opções do usuário.

## Autor

Bruno Santos

GitHub:[[Acesse aqui !](https://github.com/bswbruno)]

Portfólio: [[Acesse aqui!](https://bswbruno.github.io/portifolio/)]



## Licença

Este projeto está sob a licença MIT.