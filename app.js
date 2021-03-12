const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_check = document.getElementById('password-check');
//



username.childNodes[3].addEventListener('focusout', inputChange);
email.childNodes[3].addEventListener('focusout', inputChange);
password.childNodes[3].addEventListener('focusout', inputChange);
password_check.childNodes[3].addEventListener('focusout', inputChange);
form.addEventListener('submit', formSubmit);
//

function formSubmit(event) {
    event.preventDefault();

    const usernameValue = username.childNodes[3].value;
    const emailValue = email.childNodes[3].value;
    const passwordValue = password.childNodes[3].value;
    const password_checkValue = password_check.childNodes[3].value;

    if(usernameValue === "" || usernameValue === null){
        username.querySelector('small').innerText = "필수 정보입니다.";
        username.className = 'form-control error';
    }
    if(emailValue === "" || emailValue === null){
        email.querySelector('small').innerText = "필수 정보입니다.";
        email.className = 'form-control error';
    }
    if(passwordValue === "" || passwordValue === null){
        password.querySelector('small').innerText = "필수 정보입니다.";
        password.className = 'form-control error';
    }
    if(password_checkValue === "" || password_checkValue === null){
        password_check.querySelector('small').innerText = "필수 정보입니다.";
        password_check.className = 'form-control error';
    }

    console.log(usernameValue);
    console.log(emailValue);
    console.log(passwordValue);
}
function inputChange(event){
    
    const formControl = event.target.parentNode;
    const small = formControl.querySelector('small');
    const target = event.target;

    // console.log(formControl.querySelector('input').className);
    // console.log(small);
    
    // 아이디
    if(formControl.querySelector('input').className === 'usernameInput'){
        if(target.value === "" || target.value === null){
            small.innerText = "필수 정보입니다.";
            target.parentNode.className = 'form-control error';
        }else{
            target.parentNode.className = 'form-control success';
        }
    }
    // 이메일
    else if(formControl.querySelector('input').className === 'emailInput'){
        if(target.value === "" || target.value === null){
            small.innerText = "필수 정보입니다.";
            target.parentNode.className = 'form-control error';
        }
        else if(!isEmail(target.value)){
            small.innerText = "이메일 형식으로 입력해주세요.";
            target.parentNode.className = 'form-control error';
        }
        else{
            target.parentNode.className = 'form-control success';
        }
    }
    // 비밀번호
    else if(formControl.querySelector('input').className ==='passwordInput'){
        target.parentNode.style.marginBottom = '10px';
        if(target.value === "" || target.value === null){
            small.innerText = "필수 정보입니다.";
            target.parentNode.className = 'form-control error';
        }
        else if(!isPassword(target.value)){
            small.innerText = "8~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
            target.parentNode.style.marginBottom = '24px';
            target.parentNode.className = 'form-control error';
        }
        else{
            target.parentNode.className = 'form-control success';
        }
    }

    // 비밀번호 확인
    else if(formControl.querySelector('input').className === 'password-checkInput'){
        if(target.value === "" || target.value === null || target.value !== password.childNodes[3].value){
            small.innerText = "비밀번호가 일치하지 않습니다.";
            target.parentNode.className = 'form-control error';
        }
        // else if( !== target.Value){
        //     small.innerText = "패스워드가 다릅니다..";
        //     target.parentNode.className = 'form-control error';
        // }
        else{
            target.parentNode.className = 'form-control success';
        }
    }
}

function isEmail(email){
    let emailRegExp = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return emailRegExp.test(email);
}
function isPassword(pwd) {
    let pwdRegExp = new RegExp(/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/); 
        return pwdRegExp.test(pwd);
}