$(document).ready(
    function(){
        //Passive-Aggressive Submit Button Logic
        var buttonText = Math.floor((Math.random() * 5) + 1);
        switch(buttonText){
            case 1:
                $(".buttonTextOne").show();
                break;
            case 2:
                $(".buttonTextTwo").show();
                break;
            case 3:
                $(".buttonTextThree").show();
                break;
            case 4:
                $(".buttonTextFour").show();
                break;
            case 5:
                $(".buttonTextFive").show();
                break;
            default: break;
        }
        //Events
        $("form").submit(response);
        //Functions

        function response(event){
            event.preventDefault();
            var selectedRadioButton = $("input[name=rank]:checked");
            var selectedRank = selectedRadioButton.data("rank")
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            switch(selectedRank){
                case "Moff":
                    $("#rankColor").css("color","#b7b7b7")
                    $("#rankResponse").text("Greetings " + selectedRank + " " + firstName + " " + lastName + ".")
                    break;
                case "Admiral":
                    $("#rankColor").css("color","#6b6b6b")
                    $("#rankResponse").text("Greetings " + selectedRank + " " + firstName + " " + lastName + ", sir! ")
                    break;
                case "Grand Moff":
                    $("#rankColor").css("color","#000000")
                    $("#rankResponse").text("Sorry for the delay " + selectedRank + " " + firstName + " " + lastName + "!")
                    break;
                case "Darth":
                    $("#rankColor").css("color","#e31717")
                    $("#rankResponse").text("It won't happen again " + selectedRank + " " + firstName + " " + lastName + "!")
                    break;
                default: break;
            }

            $("#responsePhrase").show();
        }
    }
)