This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

https://github.com/axios/axios
https://jsonplaceholder.typicode.com/

# Atividades
## Jogo da velha
Implementar o jogo da velha. Quando houver vitória deve coibir as jogadas dos jogadores. Não é necessário exibir o vencedor. Implementar uma funcionalidade para voltar uma jogada e outra para reiniciar a partida.
## Listagem
Utilizar web speech API do javascript para listar as vozes disponíveis através do método _speechSynthesis.getVoices_.
Os itens da lista devem exibir as propriedades _name_ e _lang_ da voz.
Também deve ser disponibilizado um botão _play_ em cada item para falar a frase escrita em uma entrada de texto que não faz parte da lista. Após a implementação da da funcionalidade, alterar a exibição da propriedade _lang_: mostrar a bandeira de um país que fale o idioma em questão.

### Referência da web speech API:
> https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Speech_synthesis

### Sugestão de biblioteca para as bandeiras:
>https://github.com/stephenway/react-flagkit

## Paginação
Criar componente de paginação. Utilizar como fonte de dados as fotos do endpoint "/photos" do jsonplaceholder. Exibir a foto e o título. Informar o título na propriedade **alt** da imagem. 

Após concluir a paginação, criar compoenente para exibir um placeholder/loader enquanto a imagem é carregada.
O objetivo é instalar uma biblioteca de terceiros e apenas criar um componente para encapsular o componente de terceiros. Para testar o carregamento da imagem é possível simular uma rede mais lenta pela chrome, na aba _network_ o _throttling_ pode ser configurado.

### Exemplo de url com paginação:
> https://jsonplaceholder.typicode.com/photos?_start=2&_limit=3