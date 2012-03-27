$(document).ready( function(){
	$('#product1').mouseover(function(){
		$('#detailsBody').html("Product1");
	});
	$('#product2').mouseover(function(){
		$('#detailsBody').html("Product2");
		});
	$('#orderProduct1').mouseover(function(){
		$('#detailsBody').html("Product1");
	});
	$('#orderProduct2').mouseover(function(){
		$('#detailsBody').html("Product2");
	});
});

function response()
{
	if(localStorage.getItem('signup') == 'true')
	{
		$('#basic-modal-content-response').modal();
		localStorage.setItem('signup','false');
		return false;
	}
}
