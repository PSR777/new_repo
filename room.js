


var ram_spend = 0;
var ram_consume = 0;
var avi_spend = 0;
var avi_consume = 0;
var raj_spend = 0;
var raj_consume = 0;
var sai_spend = 0;
var sai_consume = 0;
var swamy_spend = 0;
var swamy_consume = 0;









function checkchange(e){
    const id = e.getAttribute('for');
    const ele = document.getElementById(id);
    if(ele.hasAttribute('checked')){
        ele.removeAttribute('checked');
        e.style.backgroundColor = '#f8262673';
        
    }else{
        ele.setAttribute('checked', '');
        e.style.backgroundColor = '#b5f85068';
        
    }

};
var t_persons = document.getElementById('t_persons');

t_persons.addEventListener('keypress', (e)=>{
    
    if(e.key == 4 || e.key == 3 ||e.key == 2 || e.key == 5){
        
        const res = document.getElementsByClassName('check');
        for(let i = 0; i < res.length ; i++){
            res[i].removeAttribute('checked')
        }

        if(e.key == 5 ){
            for(let i = 0; i < res.length; i++){
                res[i].setAttribute('checked', '')
            }
        }else if(e.key == 4 ){
            for(let i = 0; i < res.length -1; i++){
                res[i].setAttribute('checked', '')

            };
        }
        else if(e.key == 4 ){
            for(let i = 0; i < res.length -1; i++){
                res[i].setAttribute('checked', '')

            };
        }else if(e.key == 3 ){
            for(let i = 0; i < res.length -2; i++){
                res[i].setAttribute('checked', '')

            };
        }else if(e.key == 2 ){
            for(let i = 0; i < res.length -3; i++){
                res[i].setAttribute('checked', '')

            };
        };
           
    };
});
//   ------

var amountEle = document.getElementById("amount");
amountEle.addEventListener('keypress', (e)=>{
    if(e.key == "Enter"){
       
        sub();
        
    }
    
})

//----
function sub(a){
    
    
    var consume_array =[]
    const persons = document.getElementsByClassName('check');
    for(var i = 0 ; i< persons.length; i++){
        if(persons[i].checked){
            
            consume_array.push(persons[i].value);
        }
    }
    
    var spend_amount = 0
    
    spend_amount = parseInt(amountEle.value)
    //console.log(spend_amount) 
    if (!isNaN(spend_amount)){
        var spend_by = document.getElementById('main').value
    
        var final = spend_amount/consume_array.length;
    
        if (consume_array.includes("ram")){
            ram_consume = Math.round(ram_consume + final) 
            document.getElementById("ram_consume").innerText = ram_consume
        }
        if(consume_array.includes("avi")){
            avi_consume = Math.round(avi_consume + final)
            document.getElementById("avi_consume").innerText = avi_consume
        }
        if(consume_array.includes("raj")){
            raj_consume = Math.round(raj_consume + final)
            document.getElementById("raj_consume").innerText = raj_consume
        }
        if(consume_array.includes("sai")){
            sai_consume = Math.round(sai_consume + final)
            document.getElementById("sai_consume").innerText = sai_consume
        }
        if(consume_array.includes("swamy")){
            swamy_consume = Math.round(swamy_consume + final)
            document.getElementById("swamy_consume").innerText = swamy_consume
        }


        if (spend_by == "ram"){

            ram_spend = ram_spend + spend_amount
            
            document.getElementById("ram_spend").innerText = ram_spend
        }
        else if (spend_by == "avi"){
            
            avi_spend = avi_spend + spend_amount
            document.getElementById("avi_spend").innerText = avi_spend
        }
        else if (spend_by == "raj"){
            
            raj_spend = raj_spend + spend_amount
            document.getElementById("raj_spend").innerText = raj_spend
        }
        else if (spend_by == "sai"){
           
            sai_spend = sai_spend + spend_amount
            document.getElementById("sai_spend").innerText = sai_spend
        }
        else if (spend_by == "swamy"){
           
            swamy_spend = swamy_spend + spend_amount
            document.getElementById("swamy_spend").innerText = swamy_spend
        }
        var row = document.createElement('tr')

        row.innerHTML = `
        <td style="color: red; font-size: 20px;">${spend_by}</td>
        <td style="color: red; font-size: 20px;">${spend_amount}</td>
        <td style="color: red; font-size: 20px;">${consume_array}</td>`;

        var tbody = document.getElementById('tbody');
    
        tbody.insertBefore(row , tbody.firstChild);
        document.getElementById("amount").value = '';

        // show_the_result()
        
          
    };

    console.log(consume_array)
    
    

    // var spend = [{"name" : 'ram_spend','amount':ram_spend}, {'name':'avi_spend','amount':avi_spend}, {'name':'sai_spend','amount':sai_spend}, {'name':'raj_spend','amount':raj_spend},{'name':'swamy_spend','amount':swamy_spend}]

    // var res1 = spend.sort((a,b)=>b.amount-a.amount);     
}
//localStorage.clear()

function show_the_result(){
    var getArr = [];
    var giveArr =[];

    //clear the fileds...!

    var clear = document.getElementsByClassName('clear');
    for(var i = 0; i < clear.length; i++){
        clear[i].innerHTML = 0;
    }
 
    var total = [{"name" : 'ram','amount':Number(ram_spend - ram_consume)}, {'name':'avi','amount':Number(avi_spend- avi_consume)}, {'name':'sai','amount':Number(sai_spend- sai_consume)}, {'name':'raj','amount':Number(raj_spend- raj_consume)},{'name':'swamy','amount':Number(swamy_spend- swamy_consume)}]

    //devide the result based on spending and consume..!

    for(var i =0 ; i<total.length; i++){
        
        if(total[i].amount > 0){       
            getArr.push(total[i])  ;       
        }else{
            giveArr.push({'name':total[i].name, 'amount': Math.abs(total[i].amount)})
            
        }
    };
    //
    for(var i = 0; i < giveArr.length; i++){
        
        while(giveArr[i].amount > 0){         
            for(var j = 0; j < getArr.length; j++){              
                var nav = giveArr[i].amount - getArr[j].amount;
                if(getArr[j].amount != 0 ){
                    if(nav > 0){

                        var str1 = `${giveArr[i].name}to${getArr[j].name}_amount`;
                        var ele1 = document.getElementById(str1);                       
                        ele1.innerText = getArr[j].amount;
                        getArr[j].amount = 0;
                        giveArr[i].amount = nav;                       
                        break
                    }else{
                        var str = `${giveArr[i].name}to${getArr[j].name}_amount`;
                        var ele = document.getElementById(str);
                        ele.innerText = giveArr[i].amount;
                        getArr[j].amount = Math.abs(nav);
                        giveArr[i].amount = 0;
                        break
                    }
                }
                if(getArr[getArr.length-1].amount == 0 ){
                    giveArr[i].amount = 0;
                }
            }
            
        }
    }
    
       
}


