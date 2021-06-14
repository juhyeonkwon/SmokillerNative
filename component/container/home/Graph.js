import React,{useState ,useEffect} from 'react';
import { StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import axios from 'axios';
import api from "../../api"
function Graph() {


  // const options = {
  //   legend: {
  //     display: false, // label 보이기 여부
  //   },
  //   scales: {
  //     yAxes: [{
  //       ticks: { 
  //         min: 0, // y축 스케일에 대한 최소값 설정
  //         stepSize: 1, // y축 그리드 한 칸당 수치
  //       }
  //     }]
  //   },
  //   // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
  //   // true : 크기가 알아서 결정됨.
  //   maintainAspectRatio: false 
  // }

  // let data = {
  //   // 각 막대별 라벨 = 날짜
  //   labels: [],
  //   datasets: [
  //     {
  //       label : "Smoking count",
  //       borderWidth: 3, // 테두리 두께
  //       data: [], // 수치
  //       backgroundColor: 'rgba(255,99,132,0.2)', // 각 막대 색
  //       borderColor: 'rgba(255,99,132,1)'
  //     }
  //   ]
  // };

    
  //   // photos, setPhotos 비구조화 할당
  //   let [photos, setPhotos] = useState([]);




    // 통신 메서드
    function searchApi() {
        const url = api + "/api/photo/photochart";

        axios.get(url, {params: {startDate: startDate , endDate :endDate}})
        .then(function(response) {
            setPhotos(photos=response.data.photochart);
            console.log("성공");
            console.log(startDate);
            console.log(endDate);                       
        })
        .catch(function(error) {
            console.log("실패");
        })
    }

     useEffect(() => {
       searchApi()       
        } ,[]);

    // //데이터 푸시
    //  let date = [];
    //     let count = [];
    //     photos.map(photochart => (
    //         date.push(photochart.date),
    //         count.push(photochart.count)
    //     ))
    //     data.labels = date
    //     data.datasets[0].data = count
    const data = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 }
    ];

        return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>   
        )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});
