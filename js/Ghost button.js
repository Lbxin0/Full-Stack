// JavaScript Document

$(function(){

	var i=0;
	
	 $("#btn-l").click(function show(){
		i++;
		
		if(i==5){
			i=0;
			}
		$("#lunbo").animate({left:-i*252},1000);
		
		
		})
		
	$("#btn-2").click(function(){
		
		
		i--;
		if(i==-1){
			i=4;
			}
			$("#lunbo").animate({left:-i*252},1000)
		})	
		var t=setInterval(function(){
		i++;
		
		if(i==5){
			i=0;
			}
		show:$("#lunbo").animate({left:-i*252},1000);
		
		},1500);
	})
