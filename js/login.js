	// delCookie("token")
  addressInit('cmbProvince', 'cmbCity', 'cmbArea');

  //判断PC还是移动端
  var ispc = true;
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    ispc = false;
  } else {
    ispc = true;
  }
  
  var token = getCookie("token");
  if (token == undefined || token == null) {
    token = '-1';
    $(".rd-navbar-socials-toggle").click(function(){
      $(".activespan").css("color","black");
      $(".activespan").css("font-size","22px");
      $(".grey").css("font-size","17px");
      $(".grey").css("color","#9a9a9a");
      $(".registerbox").hide();
      $(".loginbox").show();
      $('#myModal').modal('show');
    })
  }else{
    geticon()
    $(".rd-navbar-socials-toggle").click(function(){
      window.location.href = "user.html"
    })
  }

  function geticon(){
    $.ajax({
      type:"get",
      url: mainurl+"User/PCGetInfo",
      data:{
        token:token
      },
      success:function(data){
        if(data.Status==1){
          $(".rd-navbar-socials-toggle").html("<img src='"+url+data.Result.Icon+"'>")
        }else{
          delCookie("token")
        }
      }
    })
  }

  var userok = false;
  var userok1 = false;
  var pwdok1 = false;
  var pwdok = false;
  var emailok = false;
  var numok = false
  var phone2 = false
  var foremail = false
  var forpwd = false
  var forpwd2 = false

        // 验证用户名
        $('input[name="username"]').blur(function(){
        	if($(this).val()!=''){
        		userok = true;
        		$(this).next('.form-validation').text('');
        	}else{
            userok = false;
            $(this).next('.form-validation').text('请输入用户名');
          }

        });

        //验证密码
        $('input[name="password"]').blur(function(){
        	if($(this).val()!=''){
        		$(this).next('.form-validation').text('');
        	}else{
        		$(this).next('.form-validation').text('请输入密码');
        	}

        });

        //验证确认密码
        $('input[name="repass"]').blur(function(){
        	if($(this).val()!='' && $(this).val() == $('input[name="password"]').val()){
        		$(this).next('.form-validation').text('');
        		pwdok = true;
        	}else if ($(this).val() == '') {
            pwdok = false;
            $(this).next('.form-validation').text('请输入密码');
          }else{
            pwdok = false;
            $(this).next('.form-validation').text('两次密码不同');
          }

        });

        //验证邮箱
        $('input[name="email"]').blur(function(){
        	if ($(this).val() == '') {
            emailok = false;
            $(this).next('.form-validation').text('请输入邮箱');
          }else if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
            $(this).next('.form-validation').text('请输入正确的EMAIL格式');
            emailok = false;
          }else{
            emailok = true;
            $(this).next('.form-validation').text('');
          }

        })

         // 验证用户名
         $('input[name="username1"]').blur(function(){
           if($(this).val()!=''){
            userok1 = true;
            $(this).next('.form-validation').text('');
          }else{
            userok1 = false;
            $(this).next('.form-validation').text('请输入用户名');
          }

        });

        //验证密码
        $('input[name="phone1"]').blur(function(){
        	if($(this).val()!=''){
        		pwdok1 = true;
        		$(this).next('.form-validation').text('');
        	}else{
            pwdok1 = false;
            $(this).next('.form-validation').text('请输入密码');
          }

        });

        //验证人数
        $('input[name="Num"]').blur(function(){
          reg = /^\d+$/;
          if ($(this).val() == '') {
            $(this).next('.form-validation').text('请输入人数');
            numok = false;
          }else if(!reg.test($(this).val())){
            $(this).next('.form-validation').text('请输入正确的格式');
            numok = false;
          }else{
            $(this).next('.form-validation').text('');
            numok = true;
          }

        });

        //验证联系人电话
        $('input[name="Phone2"]').blur(function(){
         reg = /^\d+$/;
         if ($(this).val() == '') {
          $(this).next('.form-validation').text('请输入联系方式');
          phone2 = false;
        }else if(!reg.test($(this).val())){
          $(this).next('.form-validation').text('请输入正确的格式');
          phone2 = false;
        }else{
          $(this).next('.form-validation').text('');
          phone2 = true;
        }
      });
        //忘记密码
        //验证密码
        $('#forgetpassword').blur(function(){
          if($(this).val()!=''){
            $(this).next('.form-validation').text('');
          }else{
            $(this).next('.form-validation').text('请输入密码');
          }

        });

        //验证确认密码
        $('#forgetpassword1').blur(function(){
          if($(this).val()!='' && $(this).val() == $('input[name="password"]').val()){
            $(this).next('.form-validation').text('');
            pwdok = true;
          }else if ($(this).val() == '') {
            pwdok = false;
            $(this).next('.form-validation').text('请输入密码');
          }else{
            pwdok = false;
            $(this).next('.form-validation').text('两次密码不同');
          }

        });

        //验证邮箱
        $('#forgetemail').blur(function(){
          if ($(this).val() == '') {
            emailok = false;
            $(this).next('.form-validation').text('请输入邮箱');
          }else if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
            $(this).next('.form-validation').text('请输入正确的EMAIL格式');
            emailok = false;
          }else{
            emailok = true;
            $(this).next('.form-validation').text('');
          }

        })

        var verifyCode = new GVerify("v_container");

        $("#register").click(function(){
        	var res = verifyCode.validate($("#forms-yzm").val());
        	if (!userok || !pwdok || !emailok) {
           layer.msg("请填写正确的信息", {
            icon: 5
          });
         }else if (!res) {
          layer.msg("验证码错误", {
            icon: 5
          });
        }else{
          $.ajax({
           type:"post",
           url: mainurl+"User/Login",
           data:{
            UserName:$("#forms-name").val(),
            Pwd:$.md5($("#forms-message").val()),
            Email:$("#forms-email").val(),
            Province:$("#cmbProvince").val(),
            City:$("#cmbCity").val(),
            Region:$("#cmbArea").val(),
          },
          success:function(data){
            if(data.Status==1){
              layer.msg("注册成功", {
                icon: 1
              });
              setCookie("token",data.Result,"d5");
              token = data.Result;
              $('#myModal').modal('hide');
              geticon()
              $("#commentbox").html("<div class='form-wrap'><textarea class='form-input' id='comment-message' name='comment-message' placeholder='写下你的评论' oninput='btnchange()' onpropertychange='btnchange()'></textarea></div><button class='button button-square btn-dis' type='button' id='comment' disabled='disabled'>评论</button>")
              // $("#bbscommentbox").append("<button class='button button-square button-default' type='button' id='bbscomment' style='margin-top:20px;'>评论</button>")
              if (ispc) {
                $("#container").show();
                $("#ReleasePost2").show();
                $("#ReleasePost3").hide();
              } else {
                $("#container").hide();
                $("#ReleasePost2").hide();
                $("#ReleasePost3").show();
              }
              $("#bbsform").hide();
              $(".rd-navbar-socials-toggle").click(function(){
                window.location.href = "user.html"
              })
              $("#comment").click(function(){
                $.ajax({
                  type:"post",
                  url: mainurl+"Eva/NewsCreate",
                  data:{
                    Content:$("#comment-message").val(),
                    NewsID:blogID,
                    token:token
                  },
                  success:function(data){
                    if(data.Status == 1){
                      layer.msg(data.Result, {
                        icon: 1
                      });
                      $("#comment-message").val('');
                      token = data.Result
                      commit = "";
                      pageIndex = 1;
                      first();
                      $(".page-loader").addClass("loaded");
                    }else if (data.Status == 40001) {
                      layer.msg(data.Result, {
                        icon: 5
                      });
                      delCookie("token");
                    }else{
                      layer.msg(data.Result, {
                        icon: 5
                      });
                    }
                  }
                })
              })
            }else if(data.Status==40043){
              layer.msg("账号名已存在", {
                icon: 5
              });
            }
            else{
             layer.msg(data.Result, {
              icon: 5
            });
           }
         },
         error: function(){
          layer.msg('服务器异常', {
            icon: 5
          });
        }
      })
        }
      })

        $("#login").click(function(){
          if (!userok1|| !pwdok1) {
           layer.msg("请输入信息", {
            icon: 5
          });
         }else{
           $.ajax({
             type:"post",
             url: mainurl+"User/Login",
             data:{
              UserName:$("#forms-name1").val(),
              Pwd:$.md5($("#forms-phone1").val()),
            },
            success:function(data){
              if(data.Status==1){
               layer.msg("登陆成功", {
                icon: 1
              });
               setCookie("token",data.Result,"d5");
               token = data.Result
               geticon()
               $('#myModal').modal('hide');
               $("#commentbox").html("<div class='form-wrap'><textarea class='form-input' id='comment-message' name='comment-message' placeholder='写下你的评论' oninput='btnchange()' onpropertychange='btnchange()'></textarea></div><button class='button button-square btn-dis' type='button' id='comment' disabled='disabled'>评论</button>")
               // $("#bbscommentbox").append("<button class='button button-square button-default' type='button' id='bbscomment' style='margin-top:20px;'>评论</button>")
              if (ispc) {
                $("#container").show();
                $("#ReleasePost1").hide();
                $("#ReleasePost2").show();
                $("#ReleasePost3").hide();
              } else {
                $("#container").hide();
                $("#ReleasePost1").hide();
                $("#ReleasePost2").hide();
                $("#ReleasePost3").show();
              }
               $("#bbsform").hide();
               $(".rd-navbar-socials-toggle").click(function(){
                window.location.href = "user.html"
              })
               $("#comment").click(function(){
                $.ajax({
                  type:"post",
                  url: mainurl+"Eva/NewsCreate",
                  data:{
                    Content:$("#comment-message").val(),
                    NewsID:blogID,
                    token:token
                  },
                  success:function(data){
                    if(data.Status == 1){
                      layer.msg(data.Result, {
                        icon: 1
                      });
                      $("#comment-message").val('');
                      commit = "";
                      pageIndex = 1;
                      first();
                      $(".page-loader").addClass("loaded");
                    }else if (data.Status == 40001) {
                      layer.msg(data.Result, {
                        icon: 5
                      });
                      delCookie("token");
                    }else{
                      layer.msg(data.Result, {
                        icon: 5
                      });
                    }
                  }
                })
              })
             }else{
              layer.msg(data.Result, {
                icon: 5
              });
             }
           },
           error: function(){
            layer.msg('服务器异常', {
              icon: 5
            });
          }
        })
         }
       })

        function activespan(){
          $(".activespan").css("color","black");
          $(".activespan").css("font-size","20px");
          $(".grey").css("font-size","17px");
          $(".grey").css("color","#9a9a9a");
          $(".registerbox").hide();
          $(".loginbox").show();
        }

        function grey(){
          $(".grey").css("color","black");
          $(".grey").css("font-size","20px");
          $(".activespan").css("font-size","17px");
          $(".activespan").css("color","#9a9a9a");
          $(".loginbox").hide();
          $(".registerbox").show();
        }

        function forget(){
          $('#myModal').modal('hide');
          $('#forgetmodal').modal('show');
        }

        