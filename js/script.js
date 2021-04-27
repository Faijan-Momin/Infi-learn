function ModalShow(){
    document.getElementById("modal").style.zIndex = "3";
    window.location.href = "#modal";
}
function HideModal(){
    document.getElementById("modal").style.zIndex = "-1";
    window.location.href = "#";
}

function showDrpDwn(){
    var drpdwn = document.getElementById("subject-dashboard-profile-drowdown");
    if(drpdwn.style.display == "block"){
        drpdwn.style.display = "none";
    }
    else{
        drpdwn.style.display = "block";
    }
}

window.onload = function(){
    document.getElementById('teacher-select-subject-div').style.display ="block";
        document.getElementById('teacher-sub-upload-vid').style.display ="none";
        document.getElementById('teacher-sub-upload-file').style.display ="none";
        document.querySelectorAll('.select-subject-single-sub').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('teacher-select-subject-div').style.display ="none";
                document.getElementById('teacher-sub-upload-vid').style.display ="block";
                document.getElementById('teacher-sub-upload-file').style.display ="none";
            });
          });
}

// Teacher Panel
 
function showTechContent(nameofdiv){
    
    if(nameofdiv == "video-upload"){
        document.getElementById('teacher-select-subject-div').style.display ="block";
        document.getElementById('teacher-sub-upload-vid').style.display ="none";
        document.getElementById('teacher-sub-upload-file').style.display ="none";
        document.querySelectorAll('.select-subject-single-sub').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('teacher-select-subject-div').style.display ="none";
                document.getElementById('teacher-sub-upload-vid').style.display ="block";
                document.getElementById('teacher-sub-upload-file').style.display ="none";

            });
          });
    }
    if(nameofdiv == "file-upload"){
        document.getElementById('teacher-select-subject-div').style.display ="block";
        document.getElementById('teacher-sub-upload-file').style.display ="none";
        document.getElementById('teacher-sub-upload-vid').style.display ="none";
        document.querySelectorAll('.select-subject-single-sub').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('teacher-select-subject-div').style.display ="none";
                document.getElementById('teacher-sub-upload-file').style.display ="block";
                document.getElementById('teacher-sub-upload-vid').style.display ="none";

            });
          });
    }
    else{
        document.getElementById('teacher-select-subject-div').style.display ="block";
        document.getElementById('teacher-sub-upload-vid').style.display ="none";
        document.getElementById('teacher-sub-upload-file').style.display ="none";
        document.querySelectorAll('.select-subject-single-sub').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('teacher-select-subject-div').style.display ="none";
                document.getElementById('teacher-sub-upload-vid').style.display ="block";
                document.getElementById('teacher-sub-upload-file').style.display ="none";

            });
          });
    }
}
