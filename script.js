//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function replaced(a){
	return a.replace(/^(a |an |the )/i, '').trim();
}
let sortedArr=bands.sort((a,b)=>replaced(a).localeCompare(replaced(b)));
const ul=document.getElementById('band')
sortedArr.forEach((sorted)=>{
		let li=document.createElement('li');
		li.textContent=sorted;
		ul.appendChild(li);
});