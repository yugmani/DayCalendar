
var toHours = [
    {start:9,
    end:10,
    shift:"09-10"},
            {start:10,
            end:11,
            shift:"10-11"},
    {start:11,
    end:12,
    shift:"11-12"},
            {start:12,
            end:13,
            shift:"12-01"},
    {start:13,
    end:14,
    shift:"01-02"},
            {start:14,
            end:15,
            shift:"02-03"},
    {start:15,
    end:16,
    shift:"03-04"},
            {start:16,
            end:17,
            shift:"04-05"},
]

var eventText = [];
var timeShift = [];
var currentHour = moment().format("HH");
var toDay = moment().format("dddd, MMMM Do YYYY, hh:mm");


$(document).ready(function() {

$("#currentDay").html('<span>'+ toDay+'</span>');

calendar();



function calendar() {
 
for (var i=0; i<toHours.length; i++) {

    // var eventText = [];
    // var timeShift = [];
    var joker = "";
    var poker = "";

    var newRow = $("<div>");
    $(".time-block").append(newRow);
    //newRow.attr("id", "row");
            
            if (toHours[i].start > currentHour || currentHour > 17) {

                //alert("Today's time is yet to come");
                newRow.attr("class", "future");
            }

            else if (toHours[i].start == currentHour) {
                newRow.attr("class", "present");
            }

            else if (toHours[i].start < currentHour) {
                newRow.attr("class", "past");

            }


        var newHour = $("<div>");
        newRow.append(newHour);
        newHour.attr("class", "hour");
        newHour.text(toHours[i].shift);
        //var timeShift = $(".hour").text();

                var newTextarea = $("<textarea>");
                newRow.append(newTextarea);
                //var eventText = $("textarea").val();
                
                var newBt = $("<div>");
                newRow.append(newBt);
                newBt.attr("class", "saveBtn");
                
                var img = $("<img>");
                $(newBt).append(img);

                img.attr("src", "assets/save.jpg");
                img.attr("width", "80%");
                img.attr("height", "80%");
                
                
                
              
        }
        $(".saveBtn").on("click", function() {
                                            
                                     
            // for (var k=0; k < 8; k++){  

            var joker = $("textarea").val();
            var poker = $(".hour").text();
           
            eventText.push(joker);
            timeShift.push(poker);
           
            
                if (joker!= ""){
                    

                    localStorage.setItem("Event", JSON.stringify(eventText));
                    localStorage.setItem("Shift", JSON.stringify(timeShift));
                    localStorage.setItem("Date", JSON.stringify(moment().format("dddd, MM, YYYY") ));
                     
                }
            // }
            })
            joker = "";
            poker = "";  

       

    }

                                    
                                

});



            
