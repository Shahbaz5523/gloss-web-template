menu.onclick=(e)=>{
    if(e.target.name==='menu'){
        e.target.name = 'close';
        e.target.src="cross.ico";
        nav.style.display='block';
    }else{
        e.target.name = 'menu';
        e.target.src="menu.ico";
        nav.style.display='none';
    }
}

right.onclick=(e)=>{
    console.log(e.target)
}