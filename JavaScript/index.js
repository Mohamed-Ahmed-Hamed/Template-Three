let scroll_top = document.querySelector(".top");
window.onscroll = ()=>{
	let page_scroll = this.pageYOffset;
	if(page_scroll>500){
        scroll_top.style.visibility =   "visible";
        console.log("red");
	}else{
        scroll_top.style.visibility = "hidden";
	}
}
scroll_top.onclick = ()=>{
	window.scrollTo({
		top: 0,
		left:0,
		behavior: 'smooth',
	})
}


let links = document.querySelector(".website .navbar .links");
let open_links = document.querySelector(".website .navbar .logo label");
open_links.onclick = ()=>{
   links.classList.toggle("hidden");
   console.log(links);
}