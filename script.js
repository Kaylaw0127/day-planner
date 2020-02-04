
//description box var set
var nineInfo = document.getElementById("description-9")
var tenInfo = document.getElementById("description-10")
var elevenInfo = document.getElementById("description-11")
var twelveInfo = document.getElementById("description-12")
var oneInfo = document.getElementById("description-1")
var twoInfo = document.getElementById("description-2")
var threeInfo = document.getElementById("description-3")
var fourInfo = document.getElementById("description-4")
var fiveInfo = document.getElementById("description-5")

//save btn var set
var save9 = document.getElementById("9") 
var save10 = document.getElementById("10") 
var save11 = document.getElementById('11') 
var save12 = document.getElementById("12") 
var save1 = document.getElementById("1")
var save2 = document.getElementById("2") 
var save3 = document.getElementById("3") 
var save4 = document.getElementById("4")
var save5 = document.getElementById("5")  

// var for color change
var now = moment().format("H")

//display time on page
var display = moment().format('dddd, MMMM Do YYYY, h:mm a')

$("#currentDay").html(display)

///// COLOR DEPENDING ON TIME//////
// 9 am
if (now < 9) {
    nineInfo.style.backgroundColor = "green"
    } else if (now == 9) {
    nineInfo.style.backgroundColor = "red"
        } else {
    nineInfo.style.backgroundColor = "gray"
}

// 10 am
if (now < 10) {
    tenInfo.style.backgroundColor = "green"
    } else if (now == 10) {
    tenInfo.style.backgroundColor = "red"
        } else {
    tenInfo.style.backgroundColor = "gray"
}

// 11 am
if (now < 11) {
    elevenInfo.style.backgroundColor = "green"
    } else if (now == 11) {
    elevenInfo.style.backgroundColor = "red"
        } else {
    elevenInfo.style.backgroundColor = "gray"
}

// 12 pm
if (now < 12) {
    twelveInfo.style.backgroundColor = "green"
    } else if (now == 12) {
    twelveInfo.style.backgroundColor = "red"
        } else {
    twelveInfo.style.backgroundColor = "gray"
}

// 1 pm
if (now < 13) {
    oneInfo.style.backgroundColor = "green"
    } else if (now == 13) {
    oneInfo.style.backgroundColor = "red"
        } else {
    oneInfo.style.backgroundColor = "gray"
}

// 2 pm
if (now < 14) {
    twoInfo.style.backgroundColor = "green"
    } else if (now == 14) {
    twoInfo.style.backgroundColor = "red"
        } else {
    twoInfo.style.backgroundColor = "gray"
}

// 3 pm
if (now < 15) {
    threeInfo.style.backgroundColor = "green"
    } else if (now == 15) {
    threeInfo.style.backgroundColor = "red"
        } else {
    threeInfo.style.backgroundColor = "gray"
}

// 4 pm
if (now < 16) {
    fourInfo.style.backgroundColor = "green"
    } else if (now == 16) {
    fourInfo.style.backgroundColor = "red"
        } else {
    fourInfo.style.backgroundColor = "gray"
}

// 5 pm
if (now < 17) {
    fiveInfo.style.backgroundColor = "green"
    } else if (now == 17) {
    fiveInfo.style.backgroundColor = "red"
        } else {
    fiveInfo.style.backgroundColor = "gray"
}

    
////// SAVE TO LOCAL STORAGE //////
// 9 am
nineInfo.value = localStorage.getItem("nine");

$(save9).on("click", function(){
    localStorage.setItem('nine', nineInfo.value)
    alert('Your event for 9 AM has been added!')
})


// 10 am
tenInfo.value = localStorage.getItem("ten");

$(save10).on("click", function(){
    localStorage.setItem('ten', tenInfo.value)
    alert('Your event for 10 AM has been added!')
})

// 11 am
elevenInfo.value = localStorage.getItem("eleven");

$(save11).on("click", function(){
    localStorage.setItem('eleven', elevenInfo.value)
    alert('Your event for 11 AM has been added!')
})

// 12 pm
twelveInfo.value = localStorage.getItem("twelve");

$(save12).on("click", function(){
    localStorage.setItem('twelve', twelveInfo.value)
    alert('Your event for 12 PM has been added!')
})

// 1 pm
oneInfo.value = localStorage.getItem("one");

$(save1).on("click", function(){
    localStorage.setItem('one', oneInfo.value)
    alert('Your event for 1 PM has been added!')
})

// 2 pm
twoInfo.value = localStorage.getItem("two");

$(save2).on("click", function(){
    localStorage.setItem('two', twoInfo.value)
    alert('Your event for 2 PM has been added!')
})

// 3 pm
threeInfo.value = localStorage.getItem("three");

$(save3).on("click", function(){
    localStorage.setItem('three', threeInfo.value)
    alert('Your event for 3 PM has been added!')
})

// 4 pm
fourInfo.value = localStorage.getItem("four");

$(save4).on("click", function(){
    localStorage.setItem('four', fourInfo.value)
    alert('Your event for 4 PM has been added!')
})

// 5 pm
fiveInfo.value = localStorage.getItem("five");

$(save5).on("click", function(){
    localStorage.setItem('five', fiveInfo.value)
    alert('Your event for 5 PM has been added!')
})