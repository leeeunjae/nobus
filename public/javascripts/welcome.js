$(function() {
    getUserID();
    // getTeamList();
    // showDialog();
    $('#btnLogout').button().click(btnLogoutAction);
});

var btnLogoutAction = function() {
    $.ajax({
        type:   'get',
        url:    '/welcome/logout',
        success: function(data) {
            $(location).attr('href', '/');   
        }
    });
};

function getUserID() {
    $.ajax({
        type:   'get',
        url:    '/welcome/getUserID',
        success:    function(result) {
            $('#divUserID').text(result);
        }
    });
};

function getTeamList() {
    $.ajax({
        type:   'get',
        url:    '/welcome/getTeamList',
        success:    function(teams) {
            alert("Response: getTeamList");
        }
    });
};
function showDialog(){
    $("#dialog").dialog(
        {
            width: 600,
            height: 400,
            open: function(event, ui)
        {
            var textarea = $('<textarea style="height: 276px;">');
            $(textarea).redactor({
                focus: true,
                autoresize: false,
                initCallback: function()
                {
                    this.set('<p>Lorem...</p>');
                }
            });
        }
     });
};