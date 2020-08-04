var slide = new Array("img0.png" ,"img1.png", "img2.png", "img3.png");
var numero = 0;
function ChangeSlide(sens){
	numero = numero + sens;
	if (numero < 0)
		numero = slide.length - 1;
	if (numero > slide.length -1)
		numero = 0;
	document.getElementById("slide").src = slide[numero];
}