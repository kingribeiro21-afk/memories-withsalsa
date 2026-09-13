const scenes = [...document.querySelectorAll(".scene")];
const music = document.getElementById("bgMusic");
const musicControl = document.getElementById("musicControl");

function openPage(id){
  scenes.forEach(s => s.classList.toggle("active", s.id === id));
}

function startMusic(){
  if(!music) return;
  music.play().then(updateMusic).catch(() => {});
}

function updateMusic(){
  musicControl.textContent = music && !music.paused ? "❚❚" : "♫";
}

document.querySelectorAll(".hotspot").forEach(btn => {
  btn.addEventListener("click", () => {
    startMusic();
    openPage(btn.dataset.next);
  });
});

musicControl.addEventListener("click", () => {
  if(!music) return;
  if(music.paused){
    music.play().then(updateMusic).catch(updateMusic);
  }else{
    music.pause();
    updateMusic();
  }
});

updateMusic();
