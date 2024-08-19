// Names

const nameCats = [
	'Кот с депресняком',
	'Кот с пренебрежением',
	'Кот блатота',
	'Кот с планами по захвату мира'
]

for (let i = 0; i < nameCats.length; i++) {
	const dataNameCats = document.createTextNode(nameCats[i]);
	const textCats = document.getElementById(`name-cat-${i + 1}`);
	textCats.appendChild(dataNameCats);
}

// Images

const imageCats = [
	'img/cats2/01.jpg',
	'img/cats2/02.jpg',
	'img/cats2/03.jpg',
	'img/cats2/04.gif',
]

const imagePaths = document.querySelectorAll('.thumb img')

for (let i = 0; i < imagePaths.length; i++) {
	imagePaths[i].src = imageCats[i];
	imagePaths[i].alt = nameCats[i];
}

//List

const infoCats = [
	{
		type: "Гладкошерстный",
		color: "Провел лето взглядом",
		vaccine: "Вгонит вас в депрессию своими неудачами",
		passport: "Есть ветпаспорт",
		things: "Приучен к когтеточке",
		tray: "Знает лоточек",
		character: "Мягкий и пушистый"
	},
	{
		type: "Гладкошерстный",
		color: "Ищет человеков в рабы",
		vaccine: "Вакцинирует вас (кусь-кусь)",
		passport: "Проверит ваш ветпаспорт",
		things: "Какал он на когтеточку",
		tray: "Приучит вас к лоточку",
		character: "Наглая морда"
	},
	{
		type: "Гладкошерстный",
		color: "Ищет дом для унаследования",
		vaccine: "Любит вакцинировать людей",
		passport: "Ветпаспорт будет нужен вам",
		things: "Использует вас ка когтеточку",
		tray: "Ссыт в тапки",
		character: "Остервенелый"
	},
	{
		type: "Гладкошерстный",
		color: "Умеет читать",
		vaccine: "Планирует вакцинировать всех",
		passport: "Есть паспорт",
		things: "Приучен к диванодранию",
		tray: "Научит вас ходить в лоточек",
		character: "Изучил исскуство войны"
	},
];

for (let i = 0; i < infoCats.length; i++) {
	const cat = infoCats[i];
	const infoList = `
		<ul>
		<li>${cat.type}</li>
		<li>${cat.color}</li>
		<li>${cat.vaccine}</li>
		<li>${cat.passport}</li>
		<li>${cat.things}</li>
		<li>${cat.tray}</li>
		<li>${cat.character}</li>
	</ul>
	`;
	const targetElement = document.querySelector(`#name-cat-${i + 1}`);
	targetElement.insertAdjacentHTML('afterend', infoList);
}