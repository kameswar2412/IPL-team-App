

    
    $(document).ready(function() {
let playerFromStorage=localStorage.getItem('playersName')==null?[]:JSON.parse(localStorage.getItem('playersName'))

        var playerId = window.location.search.split("=")[1]
        console.log(playerId)
        console.log(playerFromStorage)
        for(var i=0; i<playerFromStorage.length; i++) {
            if(playerId == playerFromStorage[i].id) {
                $('.player-name').html(playerFromStorage[i].fullName)
                $('#player-image').attr("src",playerFromStorage[i].photo)
                $('.team-name').html(playerFromStorage[i].from)
                $('.player-price').html(playerFromStorage[i].price)
                if(playerFromStorage[i].isPlaying){
                    $(".player-status").html("Playing")
                }else{
                    $(".player-status").html("On-bench")
                }
                $('.player-role').html(playerFromStorage[i].role)
            }
        }

        // $("top-serach").on({"input":function(e){


        //     e.preventDefault()
        //     let val=this.value
        //     val=val.toUpperCase()
        //     console.log(val)
        //     // let serTeam=playerFromStorage.filter(teamName=>teamName.teamName.includes(val) === true)
          
        //     // $(".player").css("display","none")
          
        //     // serTeam.map(names=>console.log(names)  )
           
          
        //   }})



    })




