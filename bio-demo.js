// Mock biometric demo: simulate face and voice enrollment/authentication
let faceStream = null;
let audioStream = null;
let audioRecorder = null;

function $(id){return document.getElementById(id)}

async function startCamera(){
  try{
    if(!faceStream){
      faceStream = await navigator.mediaDevices.getUserMedia({video:true});
      $('face-video').srcObject = faceStream;
      $('face-video').play().catch(()=>{});
    }
    updateStatus('face','camera started');
  }catch(err){
    console.warn('camera error',err);
    updateStatus('face','camera unavailable');
  }
}

function stopCamera(){
  if(faceStream){
    faceStream.getTracks().forEach(t=>t.stop());
    faceStream = null;
    $('face-video').srcObject = null;
  }
  updateStatus('face','camera stopped');
}

async function startMic(){
  try{
    if(!audioStream){
      audioStream = await navigator.mediaDevices.getUserMedia({audio:true});
      updateAudioMeter(true);
    }
    updateStatus('voice','microphone started');
  }catch(err){
    console.warn('mic error',err);
    updateStatus('voice','microphone unavailable');
  }
}

function stopMic(){
  if(audioStream){
    audioStream.getTracks().forEach(t=>t.stop());
    audioStream = null;
  }
  updateAudioMeter(false);
  updateStatus('voice','microphone stopped');
}

function updateStatus(kind, text){
  if(kind==='face') $('face-status').textContent = 'Status: '+text;
  if(kind==='voice') $('voice-status').textContent = 'Status: '+text;
}

function animateMeter(){
  const meter = $('audio-meter');
  let idx = 0;
  return setInterval(()=>{
    const dots = ['● ○ ○','○ ● ○','○ ○ ●','● ● ○','○ ● ●'];
    meter.textContent = dots[idx%dots.length];
    idx++;
  }, 300);
}
let meterInterval = null;
function updateAudioMeter(on){
  if(on){
    if(!meterInterval) meterInterval = animateMeter();
  }else{
    if(meterInterval) { clearInterval(meterInterval); meterInterval = null; $('audio-meter').textContent = '● ● ●'}
  }
}

// Enrollment / Authentication are simulated with timeouts and a progress sequence.
function simulateWork(targetId, message, onComplete){
  const el = $(targetId);
  el.textContent = 'Status: '+message+' (processing...)';
  let progress = 0;
  const iv = setInterval(()=>{
    progress += 20;
    el.textContent = `Status: ${message} ( ${progress}% )`;
    if(progress>=100){
      clearInterval(iv);
      el.textContent = `Status: ${message} — success`;
      if(typeof onComplete==='function') setTimeout(onComplete,400);
    }
  },400);
}

function enrollFace(){
  startCamera();
  simulateWork('face-status','enrolling face', ()=>{
    // store a dummy face token
    try{ localStorage.setItem('demo_face_token','face-token-123'); }catch(e){}
  });
}

function authFace(){
  startCamera();
  simulateWork('face-status','authenticating face', ()=>{
    const t = localStorage.getItem('demo_face_token');
    if(t){
      try{ localStorage.setItem('cw_logged_in','true'); }catch(e){}
      window.location.href = 'index.html';
    }else{
      $('face-status').textContent = 'Status: no enrolled face found';
    }
  });
}

function enrollVoice(){
  startMic();
  updateAudioMeter(true);
  simulateWork('voice-status','enrolling voice', ()=>{
    try{ localStorage.setItem('demo_voice_token','voice-token-123'); }catch(e){}
    updateAudioMeter(false);
  });
}

function authVoice(){
  startMic();
  updateAudioMeter(true);
  simulateWork('voice-status','authenticating voice', ()=>{
    const t = localStorage.getItem('demo_voice_token');
    if(t){
      try{ localStorage.setItem('cw_logged_in','true'); }catch(e){}
      window.location.href = 'index.html';
    }else{
      $('voice-status').textContent = 'Status: no enrolled voice found';
      updateAudioMeter(false);
    }
  });
}

// UI wiring
document.addEventListener('DOMContentLoaded', ()=>{
  // tabs
  document.querySelectorAll('.tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      document.querySelectorAll('.panel-tab').forEach(p=>p.style.display='none');
      document.getElementById(tab).style.display = 'block';
    });
  });

  // face controls
  $('face-enroll').addEventListener('click', enrollFace);
  $('face-auth').addEventListener('click', authFace);
  $('face-stop').addEventListener('click', stopCamera);

  // voice controls
  $('voice-enroll').addEventListener('click', enrollVoice);
  $('voice-auth').addEventListener('click', authVoice);
  $('voice-stop').addEventListener('click', stopMic);

  // footer actions
  $('demo-back').addEventListener('click', ()=>{ window.history.back(); });
  $('demo-continue').addEventListener('click', ()=>{
    try{ localStorage.setItem('cw_logged_in','true'); }catch(e){}
    window.location.href = 'index.html';
  });
});
