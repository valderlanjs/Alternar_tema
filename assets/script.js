//Definindo um array de temas disponíveis.
const themes = ["dark", "sunset", "sunrise", "light"];
//Inicializando uma variável de contador.
let count = 0;
//Acessando o elemento HTML com o ID "themePicker" e atribuindo-o à variável themePicker
const themePicker = document.getElementById("themePicker");
//Acessando o elemento HTML com o ID "themeGrid" e atribuindo-o à variável theme
const themeList = document.getElementById("themeGrid");

// Função para mudar o tema.
const changeTheme = (theme) => {
  //Verificando se a contagem é menor que 3.
  if (count < 3) {
    count += 1;
  } else {
    count = 0;
  }
  //Definir as variáveis ​​CSS para plano de fundo, borda, superfície, cores de texto e cor primária com base no tema selecionado
  document.documentElement.style.setProperty("--bg", `var(--${theme}-bg)`); // Este trecho define a propriedade "--bg", do elemento raiz do html com base na variável theme, assim como os outros seguintes.
  document.documentElement.style.setProperty(
    "--border",
    `var(--${theme}-border)`
  );
  document.documentElement.style.setProperty(
    "--surface",
    `var(--${theme}-surface)`
  );
  document.documentElement.style.setProperty(
    "--text-primary",
    `var(--${theme}-text-primary)`
  );
  document.documentElement.style.setProperty(
    "--text-secondary",
    `var(--${theme}-text-secondary)`
  );
  document.documentElement.style.setProperty(
    "--primary",
    `var(--${theme}-primary)`
  );
  document.documentElement.style.setProperty(
    "--text-inverse",
    `var(--${theme}-text-inverse)`
  );

  //Encontrando o elemento da grade do tema dentro do seletor de temas.
  const themeGrid = themePicker.querySelector(".c-theme__grid");
  //Verificando se existe alguma caixa ativa na lista de temas.
  if (themeList.querySelector(".c-box--active")) {
    //Removendo a classe "c-box--active" da caixa ativa.
    themeList.querySelector(".c-box--active").classList.remove("c-box--active");
  }
  //Iterando cada caixa na lista de temas.
  themeList.querySelectorAll(".c-box").forEach((item) => {
    //Verificando se o atributo de dados "theme" da caixa corresponde ao tema selecionado.
    if (item.dataset.theme === theme) {
      //Adicionando a classe "c-box--active" à caixa para marcá-la como ativa.
      item.classList.add("c-box--active");
    }
  });
  // switch para lidar com diferentes casos de temas.
  switch (theme) {
    case (theme = "dark"):
      themeGrid.style.top = "0";
      break;
    case (theme = "sunset"):
      themeGrid.style.top = "-3.6rem";
      break;
    case (theme = "sunrise"):
      themeGrid.style.top = "-7.1rem";
      break;
    case (theme = "light"):
      themeGrid.style.top = "-10.7rem";
      break;
  }
};

// Define Icons
const darkIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Dark"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>`;
const sunsetIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Sunset"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>`;
const sunriseIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Sunrise"><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>`;
const lightIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Light"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>`;

// Função de conteúdo e clique para o seletor de temas.
//Atualizando o HTML interno do elemento seletor de tema.
themePicker.innerHTML = `
	<div class="c-theme__grid">
		${darkIcon}
		${sunsetIcon}
		${sunriseIcon}
		${lightIcon}
	</div>
`;
//Adicionando um evento de click ao seletor de tema.
themePicker.onclick = () => {
  changeTheme(themes[count]);
};
//Adicionando um evento de clique ao elemento de botão com o ID "botão".
document.getElementById("button").onclick = () => {
  changeTheme(themes[count]);
};

//Função para colocar a primeira letra de uma palavra em maiúscula
// Utilizado para formatar as palavaras do tema, "sunset" > Sunset.
const capitalized = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

//Iterando através de cada tema no array de temas.
themes.forEach((theme, i) => {
  //Criando um novo elemento de botão.
  let box = document.createElement("button");
  //Configurando o atributo de dados "theme" para o tema atual.
  box.dataset.theme = theme;
  //Adicionando um evento de clique ao botão.
  box.onclick = () => {
    //Chamando a função changeTheme com o tema atual.
    changeTheme(themes[i]);
  };

  //Adicionando a classe "c-box" ao botão.
  box.classList = "c-box";

  //Definir variáveis ​​CSS personalizadas para os estilos do botão com base no tema atual.
  //Substituir a cor do ellemento box com base  no tema atual.
  box.style.setProperty("--bg", `var(--${theme}-bg)`);
  box.style.setProperty("--border", `var(--${theme}-border)`);
  box.style.setProperty("--surface", `var(--${theme}-surface)`);
  box.style.setProperty("--text-primary", `var(--${theme}-text-primary)`);
  box.style.setProperty("--text-secondary", `var(--${theme}-text-secondary)`);
  box.style.setProperty("--primary", `var(--${theme}-primary)`);
  box.style.setProperty("--text-inverse", `var(--${theme}-text-inverse)`);

  //Função para renderizar um ícone baseado no tema.
  const iconRender = (theme) => {
    //Usando uma instrução switch para determinar qual ícone renderizar com base no tema.
    switch (theme) {
      //Retornando o "darkIcon" se o tema for dark.
      case (theme = "dark"):
        return darkIcon;
        break;
      //Retornando o "sunsetIcon" se o tema for sunset.
      case (theme = "sunset"):
        return sunsetIcon;
        break;
      //Retornando o "sunriseIcon" se o tema for sunrise.
      case (theme = "sunrise"):
        return sunriseIcon;
        break;
      //Retornando o "lightIcon" se o tema for light.
      case (theme = "light"):
        return lightIcon;
        break;
    }
  };
  //Configurando o HTML interno do elemento box.
  box.innerHTML = `
		<div class="c-box__title">
			<span class="c-box__icon">
				${iconRender(theme)}
			</span>
			<label>${capitalized(theme)}</label>
		</div>
		<div class="c-box__swatches">
			<span class="c-swatch" style="background: var(--bg)" title="bg"></span>
			<span class="c-swatch" style="background: var(--border)" title="border"></span>
			<span class="c-swatch" style="background: var(--surface)" title="surface"></span>
			<span class="c-swatch" style="background: var(--text-primary)" title="text-primary"></span>
			<span class="c-swatch" style="background: var(--text-secondary)" title="text-secondary"></span>
			<span class="c-swatch" style="background: var(--primary)" title="primary"></span>
			<span class="c-swatch" style="background: var(--text-inverse)" title="text-inverse"></span>
		</div>
	`;
  // Anexando o elemento box ao themeList.
  themeList.appendChild(box);
});
//Chamando a função changeTheme com o primeiro tema na matriz de tema.
changeTheme(themes[0]);

// O código acima define o conteúdo HTML do elemento `box`, que consiste em um título e um conjunto de amostras que representam diferentes propriedades de cor.
// Ele usa a função `iconRender` para determinar o ícone apropriado para o tema e o renderiza dentro do elemento span `c-box__icon`.
// A forma maiúscula do nome do tema é exibida como um rótulo dentro do elemento div `c-box__title`.
// Cada amostra é representada por um elemento span `c-swatch` com uma cor de fundo específica definida usando a propriedade personalizada CSS correspondente (`var(--property)`).
// O atributo `title` de cada amostra representa a propriedade CSS que está sendo exibida.
// Por fim, o elemento `box` é anexado ao contêiner `themeList`.
// A função `changeTheme` é chamada com o primeiro tema no array `themes` para inicialmente aplicar o tema.
