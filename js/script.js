
    function showMobileNav() {
        var navBar = document.getElementById('mobile-navbar-slide');
        var hambrgr = document.getElementsByClassName("hamburger")[0];
        if(navBar.style.left == "0%"){
            navBar.style.left = "-90%";
            hambrgr.classList.remove('is-active');
        }
        else{
            navBar.style.left = "0%";
            hambrgr.classList.add('is-active');
        }
    }

    // Subject Dashboard NAvigation Mobile

    function showMobileDashboardNav() {
        var navBar = document.getElementById('subject-content-navigation-bar');
        var hambrgr = document.getElementsByClassName("hamburger")[0];
        if(navBar.style.left == "0%"){
            navBar.style.left = "-100%";
            hambrgr.classList.remove('is-active');
        }
        else{
            navBar.style.left = "0%";
            hambrgr.classList.add('is-active');
        }
    }



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

// Manage UserS

function ManageUsers(){
    var manage_user_select = document.getElementById("manage-user-select").value;
    if(manage_user_select == "all-users"){
        document.getElementById('manage-user-all-user').style.display ="block";
        document.getElementById('manage-user-blocked-user').style.display ="none";
    }
    if(manage_user_select == "blocked-users"){
        document.getElementById('manage-user-all-user').style.display ="none";
        document.getElementById('manage-user-blocked-user').style.display ="block";
    }
    
}

// Admin Panel Dashboard
window.onload = function showAdminPanellis(){
    var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
    var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
    var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
    var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
    var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="block";
    var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
    var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
    var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="none";
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
        var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="none";
    } 
    if (panellink == "manage-video") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="block";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
        var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="none";
    } 
    if (panellink == "manage-file") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="block";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
        var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="none";
    } 
    if (panellink == "manage-req") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="block";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
        var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="none";
    } 
    if (panellink == "manage-analytics") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="block";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
        var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="none";
    } 
    if (panellink == "upload-vid") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="block";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
        var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="none";
    } 
    if (panellink == "upload-file") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="block";
        var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="none";
    } 
    if (panellink == "manage-syllabus") {
        var manage_user = document.getElementById('admin-panel-manage-user').style.display ="none";
        var manage_video = document.getElementById('admin-panel-manage-video').style.display ="none";
        var manage_file = document.getElementById('admin-panel-manage-file').style.display ="none";
        var manage_req = document.getElementById('admin-panel-manage-request').style.display ="none";
        var manage_analytics = document.getElementById('admin-panel-manage-analytics').style.display ="none";
        var upload_vid = document.getElementById('admin-sub-upload-vid').style.display ="none";
        var upload_file = document.getElementById('admin-sub-upload-file').style.display ="none";
        var manage_syllabus = document.getElementById('admin-panel-manage-syllabus').style.display ="block";
    } 
}

// Show SYllabus
function showSyllabusContent(syllabusDiv){
    if(syllabusDiv == "show-syllabus"){
        document.getElementById('admin-panel-syllabus-show-syllabus').style.display ="block";
        document.getElementById('admin-panel-syllabus-add-board').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-class').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-subject').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-chapter').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-topic').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-title').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-desc').style.display ="none";
    }
}

function showSyllabusContentlist(){
    var listitem = document.getElementById("syllabus-content").value;
    if(listitem == "add-board"){
        document.getElementById('admin-panel-syllabus-show-syllabus').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-board').style.display ="block";
        document.getElementById('admin-panel-syllabus-add-class').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-subject').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-chapter').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-topic').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-title').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-desc').style.display ="none";
    }
    if(listitem == "add-class"){
        document.getElementById('admin-panel-syllabus-show-syllabus').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-board').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-class').style.display ="block";
        document.getElementById('admin-panel-syllabus-add-subject').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-chapter').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-topic').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-title').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-desc').style.display ="none";
    }
    if(listitem == "add-subject"){
        document.getElementById('admin-panel-syllabus-show-syllabus').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-board').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-class').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-subject').style.display ="block";
        document.getElementById('admin-panel-syllabus-add-chapter').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-topic').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-title').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-desc').style.display ="none";
    }
    if(listitem == "add-chapter"){
        document.getElementById('admin-panel-syllabus-show-syllabus').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-board').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-class').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-subject').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-chapter').style.display ="block";
        document.getElementById('admin-panel-syllabus-add-topic').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-title').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-desc').style.display ="none";
    }
    if(listitem == "add-topic"){
        document.getElementById('admin-panel-syllabus-show-syllabus').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-board').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-class').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-subject').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-chapter').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-topic').style.display ="block";
        document.getElementById('admin-panel-syllabus-add-title').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-desc').style.display ="none";
    }
    // if(listitem == "add-title"){
    //     document.getElementById('admin-panel-syllabus-show-syllabus').style.display ="none";
    //     document.getElementById('admin-panel-syllabus-add-board').style.display ="none";
    //     document.getElementById('admin-panel-syllabus-add-class').style.display ="none";
    //     document.getElementById('admin-panel-syllabus-add-subject').style.display ="none";
    //     document.getElementById('admin-panel-syllabus-add-chapter').style.display ="none";
    //     document.getElementById('admin-panel-syllabus-add-topic').style.display ="none";
    //     document.getElementById('admin-panel-syllabus-add-title').style.display ="block";
    //     document.getElementById('admin-panel-syllabus-add-desc').style.display ="none";
    // }
    if(listitem == "add-desc"){
        document.getElementById('admin-panel-syllabus-show-syllabus').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-board').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-class').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-subject').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-chapter').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-topic').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-title').style.display ="none";
        document.getElementById('admin-panel-syllabus-add-desc').style.display ="block";
    }
}

// Validate EMail
function ValidateEmail(inputText){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat)){
        // alert("Valid email address!");
        document.forgot_email_form.forgot_email.focus();
        document.getElementById('forgot-email-input').style.backgroundColor = "#f6f1ff";
        showEmailSendDiv();
        return true;
    }
    else{
        // alert("You have entered an invalid email address!");
        document.forgot_email_form.forgot_email.focus();
        document.getElementById('forgot-email-input').placeholder='Please Enter Your Email!';
        document.getElementById('forgot-email-input').style.backgroundColor = "#ffecee";
        return false;
    }
}
 function showEmailSendDiv(){
     document.getElementById('verification-page-info-stuffs').style.display = "none";
     document.getElementById('verification-page-send-email-msg').style.display = "block";
     window.setTimeout(() => {
         window.location.replace('verifyotp.html');
     }, 9000);
 }

 function VerifyOtpRedirect(){
    document.getElementById('verification-page-info-verify-otp').style.display = "none";
    document.getElementById('verification-page-send-email-msgs').style.display = "block";
    // window.setTimeout(() => {
    //     //window.location.replace('');
    // }, 9000);
}



