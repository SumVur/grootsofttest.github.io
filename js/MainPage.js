
$(function()
{
    $('div.ticket,div.dablticket').click(function()
    {
        $(this).find("div>span").text('added to cart'); 
        $(this).find("div").addClass('RblockHover');
        if($(this).find("div").hasClass('blockHover'))
        {
       var Cart= $('header#view1 div.rightblock__trolley-info');
       var count=Cart.text();
       Cart.text(++count);
        }
        $(this).find("div").removeClass('blockHover');
    })
})