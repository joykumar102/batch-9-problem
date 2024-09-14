
function calculateTax(income, expenses){
    if(income < 0 || income < expenses){
        return "Invalid Input"
    }
    if (income <= 0 || expenses <= 0){
        return 'Invalid Input'
    }

    let profit = income - expenses
    let tax = profit* .20
    return tax
}


function sendNotification(email){
if (!email.includes('@')){
  return 'Invalid Email'
}

let split = email.split('@')

let name1 = split[0]

let name2 = split[1]

let notification = name1 + " sent you an email from " + name2;
  return notification

}


function checkDigitsInName(name){
if (typeof name !== 'string'){
    return'Invalid Input'  
}
for(name of name )

if(!isNaN (name)){
    return true
}
if(name.includes('number')){
    return true
}
  else {
    return false
  }
}


function calculateFinalScore(obj){
  if(typeof obj !== 'object'){
    return "Invalid Input"
  }

  let totalMark = obj.testScore + obj.schoolGrade

  if(obj.isFFamily){
    totalMark = totalMark + 20 
  }
    if(totalMark >= 80){

    return true
  }
  else{
    return false
  }
}


function  waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }
    let sum = 0
    for(add of waitingTimes){
        sum = sum + add
    }
    let avgTime = Math.round (sum / waitingTimes.length)

    let serial = serialNumber - 1

    let dueSerial = serial - waitingTimes.length

    let timeNeed = dueSerial * avgTime
    return timeNeed
}

