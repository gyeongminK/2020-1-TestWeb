    function q1_check() {
        var check_count = document.getElementsByName("q1").length;
        var q1_value;

        for (var i=0; i<check_count; i++) {
            if (document.getElementsByName("q1")[i].checked == true) {
                q1_value = document.getElementsByName("q1")[i].value;
                return (parseInt(q1_value));
            }
        }
    }
    function q2_check() {
            var check_count = document.getElementsByName("q2").length;
            var q2_value;

            for (var i=0; i<check_count; i++) {
                if (document.getElementsByName("q2")[i].checked == true) {
                    q2_value = document.getElementsByName("q2")[i].value;
                    return (parseInt(q2_value));
                }
            }
        }
    function q3_check() {
                var check_count = document.getElementsByName("q3").length;
                var q3_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q3")[i].checked == true) {
                        q3_value = document.getElementsByName("q3")[i].value;
                        return (parseInt(q3_value));
                    }
                }
            }
    function q4_check() {
            var check_count = document.getElementsByName("q4").length;
            var q4_value;

            for (var i=0; i<check_count; i++) {
                if (document.getElementsByName("q4")[i].checked == true) {
                    q4_value = document.getElementsByName("q4")[i].value;
                    return (parseInt(q4_value));
                }
            }
        }
        function q5_check() {
                var check_count = document.getElementsByName("q5").length;
                var q5_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q5")[i].checked == true) {
                        q5_value = document.getElementsByName("q5")[i].value;
                        return (parseInt(q5_value));
                    }
                }
        }
        function q6_check() {
                var check_count = document.getElementsByName("q6").length;
                var q6_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q6")[i].checked == true) {
                        q6_value = document.getElementsByName("q6")[i].value;
                        return (parseInt(q6_value));
                    }
                }
        }
        function q7_check() {
                var check_count = document.getElementsByName("q7").length;
                var q7_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q7")[i].checked == true) {
                        q7_value = document.getElementsByName("q7")[i].value;
                        return (parseInt(q7_value));
                    }
                }
        }
        function q8_check() {
                var check_count = document.getElementsByName("q8").length;
                var q8_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q8")[i].checked == true) {
                        q8_value = document.getElementsByName("q8")[i].value;
                        return (parseInt(q8_value));
                    }
                }
        }
        function q9_check() {
                var check_count = document.getElementsByName("q9").length;
                var q9_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q9")[i].checked == true) {
                        q9_value = document.getElementsByName("q9")[i].value;
                        return (parseInt(q9_value));
                    }
                }
        }
        function q10_check() {
                var check_count = document.getElementsByName("q10").length;
                var q10_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q10")[i].checked == true) {
                        q10_value = document.getElementsByName("q10")[i].value;
                        return (parseInt(q10_value));
                    }
                }
        }
        function q11_check() {
                var check_count = document.getElementsByName("q11").length;
                var q11_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q11")[i].checked == true) {
                        q11_value = document.getElementsByName("q11")[i].value;
                        return (parseInt(q11_value));
                    }
                }
        }
        function q12_check() {
                var check_count = document.getElementsByName("q12").length;
                var q12_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q12")[i].checked == true) {
                        q12_value = document.getElementsByName("q12")[i].value;
                        return (parseInt(q12_value));
                    }
                }
        }
        function q13_check() {
                var check_count = document.getElementsByName("q13").length;
                var q13_value;

                for (var i=0; i<check_count; i++) {
                    if (document.getElementsByName("q13")[i].checked == true) {
                        q13_value = document.getElementsByName("q13")[i].value;
                        return (parseInt(q13_value));
                    }
                }
        }


    var arr =[["jowang", 0],["bigst",0],["smallst",0],["seowang",0],["ganglim",0],["king",0],["face11",0],
    ["guchuen",0],["habeak",0],["musan",0],["samsin",0],["south",0],["jacheung",0]];


function result(){
    if (q1_check()==25){
      arr[0][1]+=25;
      arr[1][1]+=25;
    }
    else if (q1_check()==50){
      arr[2][1]+=50;
      arr[10][1]+=50;
    }
    else if (q1_check()==75){
      arr[3][1]+=75;
      arr[11][1]+=75;
      arr[7][1]+=75;
      arr[12][1]+=75;
    }
    else if (q1_check()==100){
      arr[5][1]+=100;
      arr[6][1]+=100;
      arr[8][1]+=100;
    }



  if (q2_check()==25){
    arr[10][1]+=25;
    arr[9][1]+=25;
    arr[11][1]+=25;
    arr[1][1]+=25;
  }
  else if (q2_check()==50){
    arr[4][1]+=50;
    arr[6][1]+=50;
  }
  else if (q2_check()==75){
    arr[3][1]+=75;
    arr[8][1]+=75;
    arr[9][1]+=75;
  }
  else if (q2_check()==100){
    arr[2][1]+=100;
    arr[12][1]+=100;
  }


  if (q3_check()==25){
    arr[10][1]+=50;
    arr[11][1]+=75;
    arr[8][1]+=100;
    arr[3][1]+=75;
    arr[1][1]+=25;
  }
  else if (q3_check()==50){
    arr[12][1]+=75;
  }
  else if (q3_check()==75){
    arr[0][1]+=25;
  }
  else if (q3_check()==100){
    arr[9][1]+=100;
    arr[6][1]+=100;
  }



  if (q4_check()==25){
    arr[3][1]+=25;
    arr[12][1]+=25;
    arr[9][1]+=25;
  }
  else if (q4_check()==50){
    arr[0][1]+=50;
    arr[1][1]+=50;
    arr[2][1]+=50;
    arr[10][1]+=50;
  }
  else if (q4_check()==75){
    arr[5][1]+=75;
    arr[7][1]+=75;

  }
  else if (q4_check()==100){
    arr[11][1]+=100;
    arr[6][1]+=100;
  }



  if (q5_check()==25){
    arr[5][1]+=25;
    arr[0][1]+=25;
    arr[7][1]+=25;
    arr[8][1]+=25;
  }
  else if (q5_check()==50){
    arr[3][1]+=50;
    arr[12][1]+=50;
    arr[1][1]+=50;
  }
  else if (q5_check()==75){
    arr[11][1]+=75;
    arr[9][1]+=75;
  }
  else if (q5_check()==100){
    arr[10][1]+=100;
    arr[6][1]+=100;
  }



  if (q6_check()==25){
    arr[0][1]+=25;
    arr[5][1]+=25;
    arr[6][1]+=25;
  }
  else if (q6_check()==50){
    arr[11][1]+=50;
    arr[8][1]+=50;
    arr[12][1]+=50;
  }
  else if (q6_check()==75){
    arr[2][1]+=75;
    arr[9][1]+=75;
    arr[3][1]+=75;
  }
  else if (q6_check()==100){
    arr[10][1]+=100;
    arr[7][1]+=100;
  }



  if (q7_check()==25){
    arr[3][1]+=25;
    arr[8][1]+=25;
    arr[9][1]+=25;
    arr[1][1]+=25;
  }
  else if (q7_check()==50){
    arr[10][1]+=50;
    arr[11][1]+=50;
  }
  else if (q7_check()==75){
    arr[0][1]+=75;
  }
  else if (q7_check()==100){
    arr[12][1]+=100;
  }


  if (q8_check()==25){
    arr[4][1]+=25;
    arr[8][1]+=25;
  }
  else if (q8_check()==50){
    arr[0][1]+=50;
    arr[12][1]+=50;
    arr[11][1]+=50;
  }
  else if (q8_check()==75){
    arr[0][1]+=75;
    arr[10][1]+=75;
    arr[2][1]+=75;
    arr[6][1]+=75;
  }
  else if (q8_check()==100){
    arr[5][1]+=100;
    arr[7][1]+=100;
    arr[1][1]+=100;
  }

  if (q9_check()==25){
    arr[6][1]+=25;
    arr[0][1]+=25;
    arr[9][1]+=25;
  }
  else if (q9_check()==50){
    arr[4][1]+=50;
    arr[10][1]+=50;
    arr[12][1]+=50;
  }
  else if (q9_check()==75){
    arr[2][1]+=75;
    arr[3][1]+=75;
  }
  else if (q9_check()==100){
    arr[5][1]+=100;
    arr[7][1]+=100;
  }

  if (q10_check()==25){
    arr[11][1]+=25;
    arr[1][1]+=25;
  }
  else if (q10_check()==50){
    arr[2][1]+=50;
    arr[10][1]+=50;
    arr[6][1]+=50;
    arr[0][1]+=50;
  }
  else if (q10_check()==75){
    arr[4][1]+=75;
    arr[7][1]+=75;
    arr[12][1]+=75;
  }
  else if (q10_check()==100){
    arr[5][1]+=100;
    arr[3][1]+=100;
  }

  if (q11_check()==25){
    arr[8][1]+=25;
    arr[10][1]+=25;
    arr[12][1]+=25;
  }
  else if (q11_check()==50){
    arr[2][1]+=50;
    arr[11][1]+=50;
  }
  else if (q11_check()==75){
    arr[4][1]+=75;
    arr[9][1]+=75;
    arr[7][1]+=75;
    arr[0][1]+=75;
  }
  else if (q11_check()==100){
    arr[5][1]+=100;
    arr[3][1]+=100;
  }

  if (q12_check()==25){
    arr[4][1]+=25;
    arr[9][1]+=25;
    arr[8][1]+=25;
    arr[12][1]+=25;
  }
  else if (q12_check()==50){
    arr[11][1]+=50;
    arr[0][1]+=50;
  }
  else if (q12_check()==75){
    arr[3][1]+=75;
    arr[7][1]+=75;
  }
  else if (q12_check()==100){
    arr[2][1]+=100;
  }


  if (q13_check()==25){
    arr[4][1]+=25;
    arr[11][1]+=25;
  }
  else if (q13_check()==50){
    arr[12][1]+=50;
    arr[0][1]+=50;
    arr[10][1]+=50;
  }
  else if (q13_check()==75){
    arr[3][1]+=75;
    arr[7][1]+=75;
  }
  else if (q13_check()==100){
    arr[5][1]+=100;
    arr[2][1]+=100;
  }

  var max = 0;
  var maxname;

  for (var i=0; i<13; i++){
    if (arr[i][1]>max){
      max = arr[i][1];
      maxname=arr[i][0];
    }
  }

  location.replace(maxname+'.html');
}

/*
function goresult(){
var a;

  if (result()=="face11"){
    a='face11.html';
  }
  else if (result()=="seowang"){
    a='seowang.html';
  }
  else if (result()=="ganglim"){
    a='ganglim.html';
  }
  else if (result()=="jacheung"){
    a='jacheung.html';
  }
  else if (result()=="bigst"){
    a='bigst.html';
  }
  else if (result()=="smallst"){
    a='smallst.html';
  }
  else if (result()=="south"){
    a='south.html';
  }
  else if (result()=="samsin"){
    a='samsin.html';
  }
  else if (result()=="guchuen"){
    a='guchuen.html';
  }
  else if (result()=="musan"){
    a='musan.html';
  }
  else if (result()=="habeak"){
    a='habeak.html';
  }
  else if (result()=="king"){
    a='king.html';
  }
  else if (result()=="jowang"){
    a='jowang.html';
  }
  else{
    alert ("오류");
  }

  alert (a);
  //location.replace(a);
}*/
