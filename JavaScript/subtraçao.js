let menosjs=document.getElementById("somarjs").addEventListener("click",()=>{
    //()=> é chamada de aero fanction
    let v1=parseInt(document.getElementById("v1").value)
    let v2=parseInt(document.getElementById("v2").value)
    let menos=v1-v2
    let res=document.getElementById("res").value=menos
});
$("#somar").click(() => {
    let v1 = parseInt($("#v1").val())
    let v2 = parseInt($("#v2").val())
    let soma = v1+v2
    $("#res").val(soma)
})

$("#dividir").click(() => {
    let v1 = parseInt($("#v1").val())
    let v2 = parseInt($("#v2").val())
    let dividir = v1/v2
    $("#res").val(dividir)
})

$("#multiplicar").click(() => {
    let v1 = parseInt($("#v1").val())
    let v2 = parseInt($("#v2").val())
    let multiplicar = v1*v2
    $("#res").val(multiplicar)
})

