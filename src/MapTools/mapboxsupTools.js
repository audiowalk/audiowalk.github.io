
        
        function randomQuote(index){ document.getElementById("display_pin_memo").innerHTML = 'Here'+10+index; }

        function ctrlMainFunc(func_Nanme) {
          var i;
          var x = document.getElementsByClassName("mainFunc");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          document.getElementById(func_Nanme).style.display = "block";
        }


        function CTRHD1()
        {
            alert('查詢最近路線');
            Px_Dataa = [  { Path_Name: '西子灣漫遊',Goe_N: [22.78868, 120.29159] },
                          { Path_Name: '寶藏巖散步',Goe_N: [22.78868, 120.29159] },
                          { Path_Name: '岡山行旅'  ,Goe_N: [22.78868, 120.29159] } ]
            for (var i = 0; i < Px_Dataa.length; i++)
            {
                createPxItem(i,Px_Dataa[i].Path_Name,Px_Dataa[i].Goe_N,Px_Dataa[i].Goe_W );
            }
        }
        
        function createPxItem(index,name,duration,duration_W)
        {
                var vv =  "pxList-"+(Px_Dataa.length-1).toString();
                console.log( vv  );
                if( document.getElementById(vv) == null )
                {
                    var trackItem = document.createElement('div');
                    trackItem.setAttribute("class", "bg-pxListitem Px_card");
                    trackItem.setAttribute("onclick","ctrlMainFunc_mdf('FuncHD1_sub',"+index+")");
                    trackItem.setAttribute("id", "pxList-"+index);
                    trackItem.setAttribute("data-index-Px", index);
                    document.querySelector("#pxList_id001").appendChild(trackItem);

                    var trackInfoItem = document.createElement('div');
                    trackInfoItem.setAttribute("class", "Px_title limt");
                    trackInfoItem.innerHTML = name
                    document.querySelector("#pxList-"+index).appendChild(trackInfoItem);
                }
        }



        function ctrlMainFunc_mdf(func_Nanme,indexx) {
          var i;

          var x = document.getElementsByClassName("mainFunc");
          for (i = 0; i < x.length; i++) {
            x[i].style.displayd = "none";
          }
          document.getElementById(func_Nanme).style.display ="block";
 
                now_Px_Name = Px_Dataa[indexx].Path_Name;
                now_Px_goe_n = Px_Dataa[indexx].Goe_N;
                now_Px_goe_w = Px_Dataa[indexx].Goe_W; 
            var ar = document.querySelector('#pxList-1');
                ar.dataset.indexPx // "12314"

                document.getElementById("display_pin_memo").innerHTML = Px_Dataa[indexx].memo;
        }

        function ctrlMainFunc_mdf2(func_Nanme,index_pk) {
          var i;
          var x = document.getElementsByClassName("mainFunc");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          document.getElementById(func_Nanme).style.display = "block";
          console.log(index_pk);
        }
 
        function ctrlHD1_mdfFunc(){
               Px_OFF('FuncFT3');
               ctrlHD1_Func('FuncHD1');
        }

        function ctrlHD1_Func(func_Nanme) {
            Px_ON('pxCNT_id001');
            for (var i = 0; i < Px_Dataa.length; i++)
            { createPxItem(i,Px_Dataa[i].Path_Name,Px_Dataa[i].Goe_N,Px_Dataa[i].Goe_W ); }
        }

        function Px_OFF(func_Nanme) {
            document.getElementById(func_Nanme).style.display = "none";
        }

        function Px_ON(func_Nanme) {
            document.getElementById(func_Nanme).style.display = "block";
        } 

        function Px_Note(func_Nanme) {
            ctrlMainFunc('Close');
            ctrlMainFunc('FuncHD1_sub');
        }

        function build_favCNT() {
            var track = document.createElement('div');
            trackItem.setAttribute("class", "fav-ctn");
            trackItem.setAttribute("id", "favCNT");
            document.querySelector("#bd_id001").appendChild(track);

            var trackItem = document.createElement('div');
            trackItem.setAttribute("class", "playlist-ctn");
            trackItem.setAttribute("id", "favList_id001");
            document.querySelector("#favCNT").appendChild(trackItem);
        }

        function bx() {
            var track = document.createElement('div');
            trackItem.setAttribute("class", "fav-ctn");
            trackItem.setAttribute("id", "favCNT");
            document.querySelector("#bd_id001").append(track);
        }

function ctrlHD2_Func(func_Nanme) {

  try{ rr_nbr();rr_fav() }
  catch{}
       Px_OFF('pxCNT_id001');
       ctrlMainFunc('Close');
       Px_OFF('FuncFT1');
  }

  function ctrlHD3_Func(func_Nanme) {
       Px_OFF('pxCNT_id001');
       ctrlMainFunc('FuncHD3');

       for (var i = 0; i < Fav_Dataa.length; i++)
       {   createFavItem(i,Fav_Dataa[i].whichmb_pk);  }
  }


  function ctrlFT3_Func(func_Nanme) {
       Px_OFF('pxCNT_id001');
       Px_ON('FuncFT3');
       for (var i = 0; i < Nbr_Data.length; i++) 
       {   createNbrItem(i,Nbr_Data[i].pk,Nbr_Data[i].fileType,Nbr_Data[i].Name_ID,Nbr_Data[i].Audio_file,Nbr_Data[i].Trip_Path,Nbr_Data[i].memo);  }
  }




  function FlyTHERE_mdf()
  {
      FLY3here(now_Px_goe_n,now_Px_goe_w,17);
      ctrlHD2_Func('FuncHD3');
  }

  function FLY2THERE()
  {
  pauseAudio(); 
  FLY2here(now_goe_n,now_goe_w);
  ctrlMainFunc('Close');

  }



  function xxx() { getLocation(); }

  function FLY3here(Lat,Lng,zooom) {
       map.flyTo([Lat, Lng], zooom,
       {
           animate: true,
           duration: 2 // in seconds
       });
  }


  function FLY2here(Lat,Lng) {
       map.flyTo([Lat, Lng], 18,
       {
           animate: true,
           duration: 2 // in seconds
       });
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) { 

    FLY2here(position.coords.latitude,position.coords.longitude);
    L.marker([position.coords.latitude,position.coords.longitude], {icon: Current_Location}).addTo(map);
  }



  function rr_nbr() {
      for (var i = 0; i < Nbr_Data.length; i++)
       {
          var xd ='nbrList-' +i;
          removeElement(xd);
       } 
  }

  function rr_fav() {
      for (var i = 0; i < Nbr_Data.length; i++)
       {
          var xd ='favList-' +i;
          removeElement(xd);
       } 
  }

  function removeElement(id) {
      var elem = document.getElementById(id);
      return elem.parentNode.removeChild(elem);
  }

  function pauseAudio() {
    xg.pause();
    xg.currentTime = 0;
    temp_T=document.getElementById("push_btn");
    temp_T.src='{% static "img/ui_Export/push_s.png" %}';
}

function ctrlMainFunc_mddf() {
    xg.pause();
    xg.currentTime = 0;
    ctrlMainFunc('Close');
    temp_T=document.getElementById("push_btn");
    temp_T.src='{% static "img/ui_Export/push_null.png" %}';
}