export default {
	draw,
	highlight
};

var origBoardEl;
// ****************************

function draw(boardEl) {
	origBoardEl = boardEl;
	for(let i=0; i< 8; i++) {
		let rowEl = document.createElement("div");
		for(let j=0;j<8;j++) {
			let tileEl = document.createElement("div");
			rowEl.appendChild(tileEl);
		}
		boardEl.appendChild(rowEl);
	}
 }

function highlight(tileEl) {
	var tiles = origBoardEl.querySelectorAll("div > div");
	// clear all currently highlighted tiles
	for (let el of tiles){
		el.classList.remove("highlighted");
	}

	if(tileEl) {
		let rowEl = tileEl.parentNode;
		let tileRowIdx = [...origBoardEl.childNodes].indexOf(rowEl);
		let tileColIdx = [...rowEl.childNodes].indexOf(tileEl);

		//highlight in the up-left direction
		for(let i = tileRowIdx, j = tileColIdx; i >=0 && j >=0;i--,j--) {
			let el = findTile(i,j);
			el.classList.add("highlighted");
		}
		//highlight in the up-right direction
		for(let i = tileRowIdx, j = tileColIdx; i >=0 && j <8;i--,j++) {
			let el = findTile(i,j);
			el.classList.add("highlighted");
		}
		//highlight in the down-left direction
		for(let i = tileRowIdx, j = tileColIdx; i <8 && j >=0;i++,j--) {
			let el = findTile(i,j);
			el.classList.add("highlighted");
		}
		//highlight in the down-right direction
		for(let i = tileRowIdx, j = tileColIdx; i < 8 && j < 8 ;i++,j++) {
			let el = findTile(i,j);
			el.classList.add("highlighted");
		}
	}
}


function findTile(row,col) {
	return document.querySelector(`
		#board > 
		div:nth-child(${row + 1}) > 
		div:nth-child(${col + 1})
	`)
}