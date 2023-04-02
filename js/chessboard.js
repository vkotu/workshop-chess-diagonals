export default {
	draw,
	highlight
};

var diagonals = [];
var tileDiagonals = new Map();
var highLighted=[];
// ****************************

function draw(boardEl) {
	for(let i =0 ; i < 30; i++) {
		diagonals.push([]);
	}

	for(let i=0; i< 8; i++) {
		let rowEl = document.createElement("div");
		for(let j=0;j<8;j++) {
			let tileEl = document.createElement("div");
			rowEl.appendChild(tileEl);

			let majorDiag = diagonals[7 - (i-j)];
			let minorDiag = diagonals[15 + (i+j)];

			majorDiag.push(tileEl);
			minorDiag.push(tileEl);
			
			tileDiagonals.set(tileEl, [majorDiag, minorDiag]);
		}
		boardEl.appendChild(rowEl);
	}
	
 }

function highlight(tileEl) {
	
	// clear all currently highlighted tiles
		for(let diag of highLighted) {
			for(let el of diag) {
				el.classList.remove("highlighted");
			}
		}

	if(tileEl) {

		highLighted = tileDiagonals.get(tileEl);

		for(let diag of highLighted) {
			for(let el of diag) {
				el.classList.add("highlighted");
			}
		}
	}
}