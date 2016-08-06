searchVisible = 0;
transparent = true;

$(document).ready(function(){
    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();

    $('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

         onInit : function(tab, navigation, index){

           //check number of tabs and fill the entire row
           var $total = navigation.find('li').length;
           $width = 100/$total;

           $display_width = $(document).width();

           if($display_width < 600 && $total > 3){
               $width = 50;
           }

           navigation.find('li').css('width',$width + '%');

        },
        onNext: function(tab, navigation, index){
            if(index == 1){
                return validateFirstStep();
            } else if(index == 2){
                return validateSecondStep();
            } else if(index == 3){
                return validateThirdStep();
            } //etc.

        },
        onTabClick : function(tab, navigation, index){
            // Disable the posibility to click on tabs
            return false;
        },
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;

            var wizard = navigation.closest('.wizard-card');

            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $(wizard).find('.btn-next').hide();
                $(wizard).find('.btn-finish').show();
            } else {
                $(wizard).find('.btn-next').show();
                $(wizard).find('.btn-finish').hide();
            }
        }
    });

    // Prepare the preview for profile picture
    $("#wizard-picture").change(function(e){
        readURL(this);
    });

    $("#mypage_wizard-picture").change(function(e){
        readURL_update(this);
    });

    $('[data-toggle="wizard-radio"]').click(function(){
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked','true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function(){
        if( $(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked','true');
        }
    });

    $height = $(document).height();
    $('.set-full-height').css('height',$height);


});

function validateFirstStep(){

    $(".wizard-card form").validate({
		rules: {
			firstname: "required",
			lastname: "required",
            password: "required",
			email: {
				required: true,
				email: true
			},
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#password_register"
            },
            birthday:{
                required: true
            },
            postcode:{
                required: true
            },
            address:{
                required: true
            },
            gender:{
                required: "#gender:selected"
            }


/*  other possible input validations
			,username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},

			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
*/

		},
		messages: {
			firstname: "Please enter your First Name",
			lastname: "Please enter your Last Name",
			email: "잘못된 이메일 형식입니다.",
            password: {
                required: "비밀번호를 입력하세요.",
                minlength: "6~16자 영문 대 소문자, 숫자를 사용하세요."
            },
            confirm_password: {
                required: "비밀번호를 입력하세요.",
                minlength: "6~16자 영문 대 소문자, 숫자를 사용하세요.",
                equalTo: "입력하신 패스워드가 일치하지 않습니다."
            },
            birthday:{
                required:"생일을 입력하세요."
            },
            postcode:{
                required:"우편번호를 입력하세요."
            },
            address:{
                required:"주소를 입력하세요."
            },
            gender:{
                required: "성별을 입력하세요."
            }


/*   other posible validation messages
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			email: "Please enter a valid email address",
			agree: "Please accept our policy",
			topic: "Please select at least 2 topics"
*/

		}
	});

	if(!$(".wizard-card form").valid()){
    	//form is invalid
    	return false;
	}

	return true;
}

function validateSecondStep(){

    //code here for second step
    $(".wizard-card form").validate({
		rules: {

		},
		messages: {

		}
	});

	if(!$(".wizard-card form").valid()){
    	console.log('invalid');
    	return false;
	}
	return true;

}

function validateThirdStep(){
    //code here for third step


}

 //Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        alert(input.files[0]);
        var file = input.files[0];
        console.dir(file);
        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
        var formData = new FormData();
        formData.append("file", file);
    }
    $.ajax({
        url:"http://192.168.0.5:8000/uploadProfile",
        type:"POST",
        data:formData,
        dataType:"text",
        processData:false,
        contentType:false,
        success:function(data){
            $("#profilepath").val(data);
            $("#wizard-picture").val("");
            alert("여기 들어오니")
        },
        error:function () {
            alert("error");
        }
    })

}

function readURL_update(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        alert(input.files[0]);
        var file = input.files[0];
        console.dir(file);
        reader.onload = function (e) {
            $('#profile_mypage').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
        var formData = new FormData();
        formData.append("file", file);
    }
    $.ajax({
        url:"http://192.168.0.5:8000/uploadProfile",
        type:"POST",
        data:formData,
        dataType:"text",
        processData:false,
        contentType:false,
        success:function(data){
            $("#mypage_profilepath").val(data);
            $("#mypage_wizard-picture").val("");
        },
        error:function () {
            alert("error");
        }
    });

}











