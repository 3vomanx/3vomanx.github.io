$(document).ready(function(){
    $(".switch").click(function(){
        $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")){
        $(".switch").attr("name", "sunny-outline");
    }else{
        $(".switch").attr("name", "moon-outline"); 
    }
  });
});


var id = localStorage.getItem("ClickedId");
var details = [
    {
        name: 'UTS Business School',
        architect: 'Frank Gehry',
        location: 'Ultimo, Sydney',
        address: '14-28 Ultimo Rd'
    },
    {
        name: 'Binoculars',
        architect: 'Frank Gehry',
        location: 'Los Angeles, California',
        address: '340 Main Street'
    },
    {
        name: 'Fondation',
        architect: 'Frank Gehry',
        location: 'France, Paris',
        address: '8 Avenue du Mahatma-Gandhi'
    },
    {
        name: 'Lou Ruvo Center',
        architect: 'Frank Gehry',
        location: 'Las Vegas, Nevada',
        address: '888 West Bonneville Avenue'
    },
    {
        name: 'Walt Disney Concert Hall',
        architect: 'Frank Gehry',
        location: 'Los Angeles, California',
        address: '111 S Grand Ave, Los Angeles, CA 90012'
    },
    {
        name: 'Twisted Luma Arles Tower',
        architect: 'Frank Gehry',
        location: 'France, Arles',
        address:'33 avenue Victor Hugo'
    }
];
        for (let i = 0; i < details.length; i++) {
        var details = details[id];
        }


var imgdata = ["../images/Archisoup-Frank-Gehry-buildings.jpg",
                "../images/Google-Binoculars-jpg_073051.jpg",
                "../images/Fondation.jpg",
                "../images/Mental-Health.jpg",
                "../images/WDCH-6-1920x1280.jpg",
                "../images/6-1024x682.jpg"]
        