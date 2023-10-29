$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});

function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        project: document.getElementById("project").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_kt4unwd";
    const templateID = "template_jqjk53r";

    emailjs.send(serviceID, templateID, params).then(function (res){
        alert("success !" +res.status);
    })
        // .then(
        //     res => {
        //         document.getElementById("name").value = "";
        //         document.getElementById("email").value = "";
        //         document.getElementById("project").value = "";
        //         document.getElementById("message").value = "";
        //         console.log(res);
        //         alert("your message sent succesfully")
        //     })
        // .catch((err) => console.log(err));

}
