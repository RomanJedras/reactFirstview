

let font_size = 1,  width_bar = 0;
let moviesElements = function () {
	
	return movies.map(function (movie) {
		const div = React.DOM.div;
		return React.createElement('li', {key: movie.id, className: 'list-item__movie'},
			div({className: 'media'},
				div({className: 'media-left'},
					React.createElement('img', {
						src: movie.img,
						width: 230 + 'px',
						height: 'auto',
						className: 'media-object'
					})
				),
				div({className: 'media-body'},
					React.createElement('h3', {
						className: 'media-heading',
						style: {fontSize: font_size + 'em'}
					}, movie.title),
					React.createElement('p', {}, movie.desc),
				),
			)
		);
	});
}

let element = function () {
	const div = React.DOM.div;
	return React.createElement('div', {className: 'list-item__box'},
		React.createElement('h1', {className: 'list-item__heading'}, 'Lista filmów'),
		React.createElement('ul', {className: 'list-item__list'}, moviesElements()),
		React.createElement('p',{}, 'Ładowanie....'),
		div({className: "progress list-item--progress"},
			div({
				className: "progress-bar bg-info progress-bar-success progress-bar-striped progress-bar-animated",
				style: {width: width_bar + '%'}}),
				React.createElement('span',{}, width_bar + '%')
			)
	);
}

document.getElementById('grow').addEventListener('click',function () {
	font_size = font_size  + 1;
	//console.log(font_size)
	render();
});

document.getElementById('shrink').addEventListener('click',function () {
	font_size  = (font_size === 1) ? font_size :  font_size-1;
	//console.log(font_size)
	render();
});


let interval = null;

document.getElementById('start').addEventListener('click',function () {
	interval = setInterval(function () {
		width_bar = width_bar + 1;
		render();
	},300);
	
});

document.getElementById('stop').addEventListener('click',function () {
  clearInterval(interval);
	render();
});


function render () {
	ReactDOM.render(element(), document.getElementById('app'));
}

render();