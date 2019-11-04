 	$( document ).ready(function(){
 		$('.poisk').keyup(function koi()
         {
               var peremennaya = $(".poisk").val();
            if(peremennaya==""){$("div[id='itemss']").empty();}
            if(peremennaya.length<2){$("div[id='itemss']").empty();}
            if(peremennaya.length>1){
       $.ajax({
         url:'https://api.hh.ru/suggests/vacancy_search_keyword?text='+peremennaya,
         dataType: 'JSONP', 
         success:function(data){
            
          	
            
            for(var i=0; i < peremennaya.length; i++){
                for(var elem = 0; elem<data.items.length; elem++) {

                var theDiv1 = document.getElementById("itemss");
                var content1 = document.createElement('a');
                var div1 = document.createElement('div');
                content1.className = "c11";
                var content2 = document.createElement('a');
                var txt = data.items[elem].text;
                peremennaya=peremennaya.toLowerCase();
                console.log(peremennaya);
                if(peremennaya[i]==" "){if (peremennaya[i-1]==" ") {$("div[id='itemss']").empty();;}}
                for(var i1=0; i1 < peremennaya.length; i1++)
                	{
                		content1.text += txt[i1];

                	}
               for(var i1 = peremennaya.length; i1 < txt.length; i1++)
	                {
	                	content2.text += txt[i1];
	                }
                txt=txt.toLowerCase();
                                console.log(txt);

                if(peremennaya[i]==txt[i]){
                theDiv1.appendChild(div1);
                div1.id = elem;
                var theDiv = document.getElementById(elem);
                theDiv.appendChild(content1);
                theDiv.appendChild(content2);
                content2.id = elem;
                content1.id = elem;

            }

            div1.onclick = function click() {
            	elem= event.target.id;       
            	theDiv = document.getElementById(elem);      
                peremennaya = theDiv.textContent;
                $('.poisk').val(peremennaya);
                $("div[id='itemss']").empty();
                koi();
            }   

                
        }
         
    }
   
        },
         error: function() {
        console.log('error');
        } 

    });}
});   

});