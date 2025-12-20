

  
const typeF = document.getElementById("typeFilter");
const dateF = document.getElementById("dateFilter");
const relF = document.getElementById("relevanceFilter");
const docs = document.querySelectorAll(".document");

function filterDocs(){
  docs.forEach(d=>{
    const okType = typeF.value==="all" || d.dataset.type===typeF.value;
    const okDate = dateF.value==="all" || d.dataset.date===dateF.value;
    const okRel  = relF.value==="all"  || d.dataset.relevance===relF.value;
    d.style.display = okType && okDate && okRel ? "block":"none";
  });
}








typeF.onchange = dateF.onchange = relF.onchange = filterDocs;


const filter = document.getElementById("photoFilter");
const photos = document.querySelectorAll(".photo-card");

filter.addEventListener("change", function(){
  const value = this.value;
  photos.forEach(photo => {
    photo.style.display =
      value === "all" || photo.dataset.category === value
      ? "block"
      : "none";
  });
});







const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let valid = true;

    // Name
    const name = document.getElementById('name');
    if(name.value.trim() === ''){
        name.classList.add('is-invalid');
        valid = false;
    }else{
        name.classList.remove('is-invalid');
    }

    // Email
    const email = document.getElementById('email');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.value.trim() === '' || !email.value.match(emailPattern)){
        email.classList.add('is-invalid');
        valid = false;
    }else{
        email.classList.remove('is-invalid');
    }

    // Subject
    const subject = document.getElementById('subject');
    if(subject.value.trim() === ''){
        subject.classList.add('is-invalid');
        valid = false;
    }else{
        subject.classList.remove('is-invalid');
    }

    // Message
    const message = document.getElementById('message');
    if(message.value.trim() === ''){
        message.classList.add('is-invalid');
        valid = false;
    }else{
        message.classList.remove('is-invalid');
    }

    if(valid){
        alert("Thank you! Your message has been submitted.");
        form.reset();
    }
});
