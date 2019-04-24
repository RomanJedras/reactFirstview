
let movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: './images/moves/harry/actor.png'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: "./images/moves/liyon/krol-lew-grafika.jpg"
	},
	{
		id: 3,
		title: 'Kapitan Marvel',
		desc:   'Film o kapitan Marvel',
		img: "./images/moves/marvel/Kapitan-Marvel.jpg"
	}
];

let moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img',{src: movie.img, width: 230+'px', height: 'auto'} )
		
	);
});

const element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));

