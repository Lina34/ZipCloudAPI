$(function() {


    $("#search-btn").on("click",function() {

        // 検索ワードを取得する
        let zipCloudWord = $("#search-word").val();

        // 配下をいったんリセットさせる
        $(".table").find("td").text("");


        // ajaxの処理を書き込んでいく
        $.ajax({

            url:"http://zipcloud.ibsnet.co.jp/api/search",
            type:"GET",
            dataType:'jsonp',
            data: {
                zipcode:zipCloudWord,
            }


        }).done ( (data) => {


            
           
            for (item of data.results) {
                console.log(data);

                // 都道府県の変数
                let prefecture = item.address1;

                // ○○市
                let city = item.address2;
                
                // エリア？
                let address = item.address3;

                // 都道府県を表示させる
                $("#prefecture").text(prefecture);   

                // ○○市を表示させる
                $("#city").text(city);   

                // エリア？を表示させる
                $("#address").text(address);   
                
            };




        }).fail( (error) => {
            console.log(error);
        });












    });











});