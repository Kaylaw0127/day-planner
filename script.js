// display time
var now = moment().format("dddd, MMMM Do YYYY, h:mm a")
console.log(now)

$("#currentDay").html(now)

//color depending on time
if (moment().format() < 9) {
    nineInfo.classList.add('future')
    } else if (moment().format() == 9) {
    nineInfo.classList.add('present')
        } else if (moment().format() > 9) {
    nineInfo.classList.add('past')

    // isAfter or isBefore?
    //isSame  or .diff

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
    
// 9 AM sav to local storage
nineInfo.value = localStorage.getItem("nine");

$(save9).on("click", function(){
    localStorage.setItem('nine', nineInfo.value)
    alert('Your event for 9 AM has been added!')
})

// 10 AM save to local storage
tenInfo.value = localStorage.getItem("ten");

$(save10).on("click", function(){
    localStorage.setItem('ten', tenInfo.value)
    alert('Your event for 10 AM has been added!')
})

// 11 AM save to local storage
elevenInfo.value = localStorage.getItem("eleven");

$(save11).on("click", function(){
    localStorage.setItem('eleven', elevenInfo.value)
    alert('Your event for 11 AM has been added!')
})

// 12 PM save to local storage
twelveInfo.value = localStorage.getItem("twelve");

$(save12).on("click", function(){
    localStorage.setItem('twelve', twelveInfo.value)
    alert('Your event for 12 PM has been added!')
})

// 1 PM save to local storage
oneInfo.value = localStorage.getItem("one");

$(save1).on("click", function(){
    localStorage.setItem('one', oneInfo.value)
    alert('Your event for 1 PM has been added!')
})

// 2 PM save to local storage
twoInfo.value = localStorage.getItem("two");

$(save2).on("click", function(){
    localStorage.setItem('two', twoInfo.value)
    alert('Your event for 2 PM has been added!')
})

// 3 PM save to local storage
threeInfo.value = localStorage.getItem("three");

$(save3).on("click", function(){
    localStorage.setItem('three', threeInfo.value)
    alert('Your event for 3 PM has been added!')
})

// 4 PM save to local storage
fourInfo.value = localStorage.getItem("four");

$(save4).on("click", function(){
    localStorage.setItem('four', fourInfo.value)
    alert('Your event for 4 PM has been added!')
})

// 5 PM save to local storage
fiveInfo.value = localStorage.getItem("five");

$(save5).on("click", function(){
    localStorage.setItem('five', fiveInfo.value)
    alert('Your event for 5 PM has been added!')
})