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

window.onload = function showTechechContent(){
        document.getElementById('teacher-select-subject-div').style.display ="block";
        document.getElementById('teacher-sub-upload-vid').style.display ="none";
        document.getElementById('teacher-sub-upload-file').style.display ="none";
        document.getElementById('teacher-sec-back-btn').style.display ="none";
}

// Teacher Panel
 
function showTechContent(nameofdiv){
    
    if(nameofdiv == "video-upload"){
        document.getElementById('teacher-select-subject-div').style.display ="none";
        document.getElementById('teacher-sub-upload-vid').style.display ="block";
        document.getElementById('teacher-sub-upload-file').style.display ="none";
        document.getElementById('teacher-sec-back-btn').style.display ="block";
    }
    if(nameofdiv == "file-upload"){
        document.getElementById('teacher-select-subject-div').style.display ="none";
        document.getElementById('teacher-sub-upload-file').style.display ="block";
        document.getElementById('teacher-sub-upload-vid').style.display ="none";
        document.getElementById('teacher-sec-back-btn').style.display ="block";
    }
    if(nameofdiv == "show-subjects"){
        document.getElementById('teacher-select-subject-div').style.display ="block";
        document.getElementById('teacher-sub-upload-file').style.display ="none";
        document.getElementById('teacher-sub-upload-vid').style.display ="none";
        document.getElementById('teacher-sec-back-btn').style.display ="none";
    }
}

// Admin Panel Dashboard
window.onload = function showAdminPanellis(){
    var manage_user = document.getElementById('admin-panel-manage-user').style.display ="block";
    var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
    var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
    var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
    var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
    var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
    var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
}
function showAdminPanelli(panellink){
    if (panellink == "manage-user") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="block";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
    } 
    if (panellink == "manage-video") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="block";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
    } 
    if (panellink == "manage-file") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="block";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
    } 
    if (panellink == "manage-req") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="block";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
    } 
    if (panellink == "manage-analytics") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="block";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
    } 
    if (panellink == "upload-vid") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="block";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
    } 
    if (panellink == "upload-file") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="block";
    } 
}
