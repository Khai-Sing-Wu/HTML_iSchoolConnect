function refresh() {
    $.ajax({
        url: "/data",
        success: function (res, statusText, jqxhr) {
            // console.log('Response: ', res['users']);
            $(res.users).each(function (idx) {
                // $("#usergrid").html("");
                $("#usergrid").append(
                    `<tr>
                        <th scope="row">${idx+1}</th>
                        <td>${res['users'][idx].username}</td>
                        <td>${res['users'][idx].useremail}</td>
                        <td>${res['users'][idx].usercity}</td>
                        <td><button data-edit="${res['users'][idx].id}" class="btn btn-warning">Edit User</button></td>
                        <td><button data-del="${res['users'][idx].id}" class="btn btn-danger">Delete User</button></td>
                    </tr>`
                );
            });
        },
        error: function (jqxhr, textStatus, error) {
            console.log('Error: ', error);
        }
    });
}

function deleteUserHandler(evt){
    $.ajax({
        method : 'delete',
        url : "/delete/"+$(evt.target).attr("data-del"),
        success : function(res){
            console.log(res);
            //refresh();
        },
        error : function(err){
            console.log("Error ",err)
        }
    })
}

function editUserHandler(evt){
    $("#edituserbox").show(500);
    $("#adduserbox").hide(500);
    $.ajax({
        method : 'get',
        url : "/edit/"+$(evt.target).attr("data-edit"),
        success : function(res){
            $("#edit_username").val(res.username);
            $("#edit_usermail").val(res.usermail);
            $("#edit_usercity").val(res.usercity);
            $("#edit_userid").val(res._id);
        },
        error : function(err){
            console.log("Error ",err)
        }
    })
    };

function updateUserHandler(){
    let updatedUser = {
        username : $("#edit_username").val(),
        usermail : $("#edit_usermail").val(),
        usercity : $("#edit_usercity").val()
    };
    $.ajax({
            method : 'post',
            url : "/edit/"+$("#edit_userid").val(),
            data : JSON.stringify(updatedUser),
            contentType : "application/json",
            dataType : "json",
            success : function(res){
                $("#edituserbox").hide(500);
                $("#adduserbox").show(500);
                $("#edit_username").val('');
                $("#edit_usermail").val('');
                $("#edit_usercity").val('');
                //refresh();
                console.log(res.updatedmessage);
            },
            error : function(err){
                console.log("Error ",err)
            }
        })
}
function addUserHandler(){
    if($("#username").val() || $("#usermail").val() || $("#usercity").val()){
        let nuser = {
            username : $("#username").val(),
            usermail : $("#usermail").val(),
            usercity : $("#usercity").val()
        };
        console.log(nuser);
        $.ajax({
            method : 'post',
            url : "/add",
            data : JSON.stringify(nuser),
            contentType : "application/json",
            dataType : "json",
            success : function(res){
                $("#username").val('');
                $("#usermail").val('');
                $("#usercity").val('');
                refresh();
            },
            error : function(err){
                console.log("Error ",err)
            }
        })
    }else{
        alert("please fill all user details")
    }
}

$(function () {
    $("#edituserbox").hide();
    refresh();


    $("#usergrid").on('click', '.btn-danger', deleteUserHandler);
    $("#usergrid").on('click', '.btn-warning', editUserHandler);
    $("#addBtn").on('click', addUserHandler);
    $("#editBtn").on('click', updateUserHandler);
})