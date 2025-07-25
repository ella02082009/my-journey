const passwordDisplay= document.getElementById('passworddisplay');
const passwordLength=document.getElementById('passwordLength');
const includeUppercase=document.getElementById('includeUppercase');
const includeLowercase=document.getElementById('includeLowercase');
const includeNumber=document.getElementById('includeNumber');
const includeSymbols=document.getElementById('includeSymbols');
const generateButton=document.getElementById('generateButton');
const copyButton=document.getElementById('copyButton');

const uppercaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars='abcdefghijklmnopqrstuvwxyz';
const numberChars='0123456789';
const symbolChars='!@#$%^&*()_-+={}[]:;|?<>,.';

function generatePassword() {
    let characters = '';
    let generatedPassword = '';

    if (includeUppercase && includeUppercase.checked) {
        characters += uppercaseChars;
    }
    if (includeLowercase && includeLowercase.checked) {
        characters += lowercaseChars;
    }
    if (includeNumber && includeNumber.checked) {
        characters += numberChars;
    }
    if (includeSymbols && includeSymbols.checked) {
        characters += symbolChars;
    }
    if (characters.length === 0) {
        alert('please select atleast one character type!');
        return '';
    }
    const length = parseInt(passwordLength.value, 10);

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }

    return generatedPassword;
}

generateButton.addEventListener('click',()=>
    {
        passwordDisplay.value = generatePassword();
});

copyButton.addEventListener('click', () => {
    if(passwordDisplay.value){
        navigator.clipboard.writeText(passwordDisplay.value)
        .then(() => {
            alert('password copied to clipboard');
        })
        .catch(err =>{
            console.error('failed to copy:',err);
        });
    }else{
        alert('no password to copy');
    }
});