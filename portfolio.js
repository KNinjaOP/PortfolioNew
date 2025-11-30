// simple nav active on scroll

const links = document.querySelectorAll(".nav-link");
const sections = Array.from(document.querySelectorAll("main section"));

function onScroll(){
  const y = window.scrollY + 120;
  for(let s of sections){
    const top = s.offsetTop;
    const bottom = top + s.offsetHeight;
    const id = s.getAttribute("id");
    if(y >= top && y < bottom){
      links.forEach(l => l.classList.remove("active"));
      const a = document.querySelector('nav a[href="#'+id+'"]');
      if(a) a.classList.add("active");
    }
  }
}
window.addEventListener("scroll", onScroll);
onScroll();

// send mail (mailto fallback)
function sendMail(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent("From: " + name + " ("+email+")\n\n" + msg);
  window.location.href = `mailto:krishnaverma2319@gmail.com?subject=${subject}&body=${body}`;
}

// footer year
document.getElementById("year").innerText = new Date().getFullYear();