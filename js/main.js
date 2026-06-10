

//各都道府県の緯度と経度のデータが入るグローバル変数
let Userdata;


// ボタンを押したら開始
document.getElementById("getBtn").addEventListener("click", () => {

//テキストボックスの値を取得
const inputtext = document.getElementById("prefecture");
//入力された県のオブジェクトを取得
Userdata = Areasearch(inputtext.value);


//見つからなかったらアラートを出して返す
if(Userdata==null)
{
  // console.log("県名が入力されていません");
  alert("県名が入力されていません！");//アラートを出力
  return;
}

  getWeather();
});



//  //入力したら実行
// document.getElementById("prefecture").addEventListener("input",() => {

//   //ユーザが入力した県名を取得
// const inputtext = document.getElementById("prefecture");
// //県の緯度と経度を収集したデータを格納
//  Userdata = Areasearch(inputtext.value);
// // console.log(data);
// })



//関数を取得する
import { codeToText } from "./weatherText.js";
import {Areasearch} from "./prefecture.js";

// 天気を取得して表示する非同期関数
async function getWeather() {


  // 〇〇の現在の天気を取得するURL,テンプレートリテラルで該当の県の緯度と経度を代入
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${Userdata.Latitude}8&longitude=${Userdata.Longitude}&current_weather=true`;

  // ① URLにデータをお願いする（返事を待つ）
  const response = await fetch(url);

  // ② 返ってきたデータをJSONとして取り出す（これも待つ）
  const data = await response.json();

  // ③ 必要な値を取り出す（オブジェクトのプロパティアクセス！）
  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;
  const code = data.current_weather.weathercode;


 

  // ④ DOMに表示する
  document.getElementById("temp").textContent =
    `気温:${temp}℃ / 風速:${wind} km/h ${codeToText(code)}`;
  document.getElementById("name").textContent = `${Userdata.Prefecture}の天気`;


  // //④ DOMに表示する
  // document.getElementById("temp").textContent =
  //   `気温:${temp}℃ / 風速:${wind} km/h ${code}`;

  // ⑤ デバッグ用：返ってきた全データをコンソールで確認
  console.log(data);
}





