const lengthEl=document.getElementById("Plength")
const symbolEl=document.getElementById("Psymbols")
const numberEl=document.getElementById("Pnumbers")
const lowercaseEl=document.getElementById("Plowercase")
const uppercaseEl=document.getElementById("Puppercase")
const ridiculous=document.getElementById("Pridiculous")
const generateBtnEl=document.getElementById("generator")
const resultEl=document.getElementById("myOutput")
const rulesBtn = document.getElementById("rules-btn")
const rules = document.getElementById("rules")
const closeBtn = document.getElementById("close-btn")
var btn = document.getElementById('reveal');
var box = document.getElementById('myOutput');
var fak = document.getElementById('fakepass');
const isEmpty = str => !str.trim().length;



function copyFun(){

    resultEl.select()

    document.execCommand("copy") 

    alert("Copied text : " + resultEl.value) 


}   



function getRandomLower() {

	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbol(){
    const symbols="!@#$%^&*(){}[]=<>/,."
    return symbols[Math.floor(Math.random()* symbols.length )]
}
function getRandomridiculous(){
     
      var subjects= Array('Sophia', 'Emma', 'Olivia', 'Ava', 'Isabella', 'Mia', 'Zoe', 'Lily', 'Emily', 'Madelyn', 'Madison', 'Chloe', 'Charlotte', 'Aubrey', 'Avery', 
      'Abigail', 'Kaylee', 'Layla', 'Harper', 'Ella', 'Amelia', 'Arianna', 'Riley', 'Aria', 'Hailey', 'Hannah', 'Aaliyah', 'Evelyn', 'Addison', 'Mackenzie', 
      'Adalyn', 'Ellie', 'Brooklyn', 'Nora', 'Scarlett', 'Grace', 'Anna', 'Isabelle', 'Natalie', 'Kaitlyn', 'Lillian', 'Sarah', 'Audrey', 'Elizabeth', 'Leah',
       'Annabelle', 'Kylie', 'Mila', 'Claire', 'Victoria', 'Maya', 'Lila', 'Elena', 'Lucy', 'Savannah', 'Gabriella', 'Callie', 'Alaina', 'Sophie', 'Makayla', 
       'Kennedy', 'Sadie', 'Skyler', 'Allison', 'Caroline', 'Charlie', 'Penelope', 'Alyssa', 'Peyton', 'Samantha', 'Liliana', 'Bailey', 'Maria', 'Reagan', 'Violet',
        'Eliana', 'Adeline', 'Eva', 'Stella', 'Keira', 'Katherine', 'Vivian', 'Alice', 'Alexandra', 'Camilla', 'Kayla', 'Alexis', 'Sydney', 'Kaelyn', 'Jasmine', 
        'Julia', 'Cora', 'Lauren', 'Piper', 'Gianna', 'Paisley', 'Bella', 'London', 'Clara', 'Cadence', 'Jackson', 'Aiden', 'Liam', 'Lucas', 'Noah', 'Mason', 
        'Ethan', 'Caden', 'Jacob', 'Logan', 'Jayden', 'Elijah', 'Jack', 'Luke', 'Michael', 'Benjamin', 'Alexander', 'James', 'Jayce', 'Caleb', 'Connor', 'William',
        'Carter', 'Ryan', 'Oliver', 'Matthew', 'Daniel', 'Gabriel', 'Henry', 'Owen', 'Grayson', 'Dylan', 'Landon', 'Isaac', 'Nicholas', 'Wyatt', 'Nathan', 'Andrew',
        'Cameron', 'Dominic', 'Joshua', 'Eli', 'Sebastian', 'Hunter', 'Brayden', 'David', 'Samuel', 'Evan', 'Gavin', 'Christian', 'Max', 'Anthony', 'Joseph', 
        'Julian', 'John', 'Colton', 'Levi', 'Muhammad', 'Isaiah', 'Aaron', 'Tyler', 'Charlie', 'Adam', 'Parker', 'Austin', 'Thomas', 'Zachary', 'Nolan', 'Alex', 
        'Ian', 'Jonathan', 'Christopher', 'Cooper', 'Hudson', 'Miles', 'Adrian', 'Leo', 'Blake', 'Lincoln', 'Jordan', 'Tristan', 'Jason', 'Josiah', 'Xavier', 
        'Camden', 'Chase', 'Declan', 'Carson', 'Colin', 'Brody', 'Asher', 'Jeremiah', 'Micah', 'Easton', 'Xander', 'Ryder', 'Nathaniel', 'Elliot', 'Sean', 'Cole')

        var verbs= Array('Wants','Feeds','Gets','Awards','Gives','Kills','Disguises','Gifts','Grabs','Pours','Buys','Sells','Invests','Throws','Tries','Births','HighFives','Worships');

    //   counts=[2000]

      var adjectives= Array('Greedy','Friendly','Ornery','Wonderful','Lonely','Needy','Spoiled','Lovely','Yellow','Bored','Crying','Upset','Happy','Elated');

       var nouns= Array('Dogs','Babies','Friends','Chickens','Cats','Men','Ladies','Goats','Ingredients');

      var prepositions= Array('On','For','In','Between','At','With','AccordingTo','Without','AsPaymentTo','ToAvenge','BecauseTheyHate','BecauseTheyLove','InsteadOf');

      var punctuations= Array('!','?','.', '*');



      var Subjects = subjects[Math.floor(Math.random()*subjects.length)];
    //   console.log(Subjects);
      var Verbs = verbs[Math.floor(Math.random()*verbs.length)];
        // console.log(Verbs);
      var Counts =Math.floor((Math.random() * 2000) + 1);
    //   console.log(Counts);
      var Adjectives = adjectives[Math.floor(Math.random()*adjectives.length)];
        // console.log(Adjectives);
      var Nouns = nouns[Math.floor(Math.random()*nouns.length)];
        // console.log(Nouns);
      var Prepositions = prepositions[Math.floor(Math.random()*prepositions.length)];
        // console.log(Prepositions);
      var Punctuations = punctuations[Math.floor(Math.random()*punctuations.length)];
    //   console.log(Punctuations);

     var rid=  Subjects + Verbs + Counts  + Adjectives + Nouns + Prepositions + Punctuations;

     console.log(rid);

        return rid
      


}


let generatedPassword=' '
let count=0
let nextpass=false;


function validation(){

    if(ridiculous.checked){
        
        generatedPassword+=getRandomridiculous()
        count++

       
        // input:checked[type="checkbox"]:before{
        //     left:50px;
        //   }
    }
    else {
        if(symbolEl.checked){
            generatedPassword+=getRandomSymbol()
            count++
        // console.log(generatedPassword)
        }
        if(numberEl.checked){
            generatedPassword+=getRandomNumber()
            count++
            //console.log(generatedPassword)
        }
        if(lowercaseEl.checked){
            generatedPassword+=getRandomLower()
            count++
        // console.log(generatedPassword)
        }
        if(uppercaseEl.checked){
            generatedPassword+=getRandomUpper()
            count++
            //console.log(generatedPassword)
        }

    } 
 
}

function shuffle(string) {
    var parts = string.split('');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join('');
}


generateBtnEl.addEventListener("click", (e)=>{
    // e.preventDefault()
    // if(count<1){
    //     alert("Atleast select any one")
    // }
    // e.preventDefault()
    if(nextpass===false){
        e.preventDefault() //nr

    }
    
    if(ridiculous.checked){
        validation() 
        
    }else{
        while(generatedPassword.length<lengthEl.value){
    
            validation() 
        }
    

    }

   
    const finalPassword = generatedPassword.slice(0, lengthEl.value);
    shuffle(finalPassword)

    resultEl.value = finalPassword

    nextpass=true;




}) 

rulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeBtn.addEventListener('click', () => rules.classList.remove('show'));













