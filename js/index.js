$(document).ready(function() {
    //all the code goes here

    var count = 0;
    //calling the function t
    developer_animation();
    //defining the function
    function developer_animation() {
        setTimeout(function() {
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Dev";
            } else if (count == 4) {
                title = "Deve";
            } else if (count == 5) {
                title = "Devel";
            } else if (count == 6) {
                title = "Develo";
            } else if (count == 7) {
                title = "Develop";
            } else if (count == 8) {
                title = "Develope";
            } else if (count == 9) {
                title = "Developer";
            }

            //it helps you to put a text on an html element
            if (count != 10) {
                $(".title").text(`I am a ${title}`);
                developer_animation();
            } else if (count == 10) {
                count = 0;
                setTimeout(function() {
                    designer_animation();
                }, 1000);
            }
        }, 100);
    }

    function designer_animation() {
        setTimeout(function() {
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Des";
            } else if (count == 4) {
                title = "Desi";
            } else if (count == 5) {
                title = "Desig";
            } else if (count == 6) {
                title = "Design";
            } else if (count == 7) {
                title = "Designe";
            } else if (count == 8) {
                title = "Designer";
            }

            if (count != 10) {
                $(".title").text(`I'm a ${title}`);
                designer_animation();
            } else if (count == 10) {
                count = 0;
                setTimeout(function() {
                    developer_animation();
                }, 1000);
            }
        }, 100);
    }
    $(".see_resume").mouseenter(function() {
        $(this).css("background-color", "rgb(180, 149, 8)");
        $(this).css("border-color", "rgb(180, 149, 8)");
    });
    $(".see_resume").mouseleave(function() {
        $(this).css("background-color", "rgb(255, 208, 0)");
        $(this).css("border-color", "rgb(255, 208, 0)");
    });
    animate_names();

    function animate_names() {
        setTimeout(function() {
            $(".java_name").animate({ fontSize: "+=40px" }, 500);
            $(".java_name").animate({ letterSpacing: "+=15px" }, 1000);
            $(".adobe_name").animate({ fontSize: "+=40px" }, 500);
            $(".adobe_name").animate({ letterSpacing: "+=15px" }, 1000);
            $(".android_name").animate({ fontSize: "+=40px" }, 500);
            $(".android_name").animate({ letterSpacing: "+=15px" }, 1000);

            setTimeout(function() {
                $(".java_name").animate({ fontSize: "-=40px" }, 500);
                $(".java_name").animate({ letterSpacing: "-=15px" }, 1000);
                $(".adobe_name").animate({ fontSize: "-=40px" }, 500);
                $(".adobe_name").animate({ letterSpacing: "-=15px" }, 1000);
                $(".android_name").animate({ fontSize: "-=40px" }, 500);
                $(".android_name").animate({ letterSpacing: "-=15px" }, 1000);

                animate_names();
            }, 4000);
        }, 2000);
    }

    $(".project_name").text("My project ");
    $(".project_content").text("This my project.");

    //Changing project images while clicking next and prev
    var project_count = 1;

    $(".next").click(function() {
        if (project_count == 4) {
            project_count = 0;
        }
        //project count is 2
        project_count++;
        $(".actual_img").attr("src","/jpg/project_" + project_count + ".png");

        if (project_count == 1) {
            $(".project_name").text("My first project");
            $(".project_content").text("This is my project content 1 .");
        } else if (project_count == 2) {
            $(".project_name").text("My second project");
            $(".project_content").text("This is my project content 2");
        } else if (project_count == 3) {
            $(".project_name").text("Third  App");
            $(".project_content").text("This is my project content 3");
        } else if (project_count == 4) {
            $(".project_name").text("My fourth project");
            $(".project_content").text("This is my project content 4 ");
        }
    });
    $(".prev").click(function() {
        if (project_count == 1) {
            project_count = 4;
        }
        //project count is 2
        project_count++;

        $(".actual_img").attr(
            "src",
            "/jpg/project_" + project_count + ".png"
        );

        if (project_count == 1) {
            $(".project_name").text("My  first project");
            $(".project_content").text("This is my project content 1 .");
        } else if (project_count == 2) {
            $(".project_name").text("My second project");
            $(".project_content").text("This is my project content 2");
        } else if (project_count == 3) {
            $(".project_name").text("Third  App");
            $(".project_content").text("This is my project content 3");
        } else if (project_count == 4) {
            $(".project_name").text("My fourth project");
            $(".project_content").text("This is my project content 4 ");
        }
    });
});
var spanWidth = $('#text').width();
$('#text').animate( {
     width: spanWidth 
}, 3000 );
$( function() {
    $( "button" ).click( function() {
      $( "p" ).text("to more details contact me: +91 7550193184" )
   
    });
  });