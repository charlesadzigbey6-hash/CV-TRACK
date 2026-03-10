function genererCV(){

  // Infos générales
  document.getElementById("cvNom").innerText = document.getElementById("nom").value;
  document.getElementById("cvMetier").innerText = document.getElementById("metier").value;
  document.getElementById("cvEmail").innerText = document.getElementById("email").value;
  document.getElementById("cvTelephone").innerText = document.getElementById("telephone").value;

  // Sections
  document.getElementById("cvProfil").innerText = document.getElementById("profil").value;
  document.getElementById("cvExperience").innerText = document.getElementById("experience").value;
  document.getElementById("cvEducation").innerText = document.getElementById("education").value;
  document.getElementById("cvCompetences").innerText = document.getElementById("competences").value;
  document.getElementById("cvInterets").innerText = document.getElementById("interets").value;

  // Photo
  let file = document.getElementById("photo").files[0];
  if(file){
    let reader = new FileReader();
    reader.onload = function(e){
      document.getElementById("cvPhoto").src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}

// Fonction pour télécharger le CV en PDF
function downloadCV(){
  const cvElement = document.getElementById("cv");
  html2pdf().from(cvElement).set({
    margin: 0.5,
    filename: 'Mon_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).save();
}