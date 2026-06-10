
//ユーザが入力した都道府県のデータを探索して返す
export function Areasearch(userinput)
{
 let data = Areaobject();
 let i=0;
 let Returndata;
 console.log(userinput);
 for(i=0;i<data.length;i++)
 {
//    console.log(data[i]);
    if(data[i].Prefecture==userinput)
    {
        Returndata = data[i];
        // console.log(data[i].Prefecture);
        return Returndata;
    }

 }
console.log("見つかりませんでした");
return null;
}

//各都道府県のデータを格納したオブジェクト配列を返す関数
export function Areaobject()
{
    const Datacollection=
[{
    
   Prefecture: "北海道",
   Latitude: "43.06417",
   Longitude: "141.34694"
},
{
    Prefecture: "青森県",
   Latitude: "40.82444",
   Longitude:"140.74"
},
{
    Prefecture: "岩手県",
   Latitude: "39.70361",
   Longitude:"141.1525"
},
{
    Prefecture: "宮城県",
   Latitude: "38.268579",
   Longitude:"140.872072"
},
{
   Prefecture: "秋田県",
   Latitude: "39.718626",
   Longitude:"140.102381"
},
{
   Prefecture: "山形県",
   Latitude: "38.240434",
   Longitude:"140.363690"
},
{
   
   Prefecture: "福島県",
   Latitude: "37.750029",
   Longitude:"140.467771"
},
{
   
   Prefecture: "茨城県",
   Latitude: "36.341737",
   Longitude:"140.446824"
},
{
   
   Prefecture: "栃木県",
   Latitude: "36.565912",
   Longitude:"139.883592"
},
{
    
   Prefecture: "群馬県",
   Latitude: "36.390688",
   Longitude:"139.060453"
},
{
   
   Prefecture: "埼玉県",
   Latitude: "35.85703",
   Longitude:"139.649012"
},
{
   
   Prefecture: "千葉県",
   Latitude: "35.6045604",
   Longitude:"140.123154"
},
{
   Prefecture: "東京都",
   Latitude: "35.689501",
   Longitude:"139.691722"
},
{
    
   Prefecture: "神奈川県",
   Latitude: "35.447734",
   Longitude:"139.642537"
},
{
    
   Prefecture: "新潟県",
   Latitude: "37.902451",
   Longitude:"139.023245"
},
{
   
   Prefecture: "富山県",
   Latitude: "36.695265",
   Longitude:"137.211305"
},
{
    
   Prefecture: "石川県",
   Latitude: "36.594606",
   Longitude:"136.625669"
},
{
    
   Prefecture: "福井県",
   Latitude: "36.065209",
   Longitude:"136.221720"
},
{
    
   Prefecture: "山梨県",
   Latitude: "35.664108",
   Longitude:"138.568455"
},
{
   
   Prefecture: "長野県",
   Latitude: "36.651306",
   Longitude:"138.180904"
},
{
   
   Prefecture: "岐阜県",
   Latitude: "35.391174",
   Longitude:"136.723657"
},
{
   
   Prefecture: "静岡県",
   Latitude: "34.976944",
   Longitude:"138.383056"
},
{
    
   Prefecture: "愛知県",
   Latitude: "35.180209",
   Longitude:"136.906582"
},
{
    
   Prefecture: "三重県",
   Latitude: "34.730278",
   Longitude:"136.508611"
},
{
   
   Prefecture: "滋賀県",
   Latitude: "35.004513",
   Longitude:"135.868568"
},
{
    
   Prefecture: "京都府",
   Latitude: "35.021242",
   Longitude:"135.755613"
},
{
    
   Prefecture: "大阪府",
   Latitude: "34.686344",
   Longitude:"135.520037"
},
{
  
   Prefecture: "兵庫県",
   Latitude: "34.691257",
   Longitude:"135.183078"
},
{
    
   Prefecture: "奈良県",
   Latitude: "34.685274",
   Longitude:"135.832861"
},
{
   
   Prefecture: "和歌山県",
   Latitude: "34.226111",
   Longitude:"135.167500"
},
{
   
   Prefecture: "鳥取県",
   Latitude: "35.503449",
   Longitude:"134.238261"
},
{
   
   Prefecture: "島根県",
   Latitude: " 35.472293",
   Longitude:"133.050520"
},
{
    
   Prefecture: "岡山県",
   Latitude: "34.661739",
   Longitude:"133.935032"
},
{
    
   Prefecture: "広島県",
   Latitude: "34.396558",
   Longitude:"132.459646"
},
{
    
   Prefecture: "山口県",
   Latitude: "34.186041",
   Longitude:"131.470654"
},
{
    
   Prefecture: "徳島県",
   Latitude: "34.065761",
   Longitude:"134.559286"
},
{
    
   Prefecture: "香川県",
   Latitude: "34.340112",
   Longitude:"134.043291"
},
{
    
   Prefecture: "愛媛県",
   Latitude: "33.841642",
   Longitude:"132.765682"
},
{
    
   Prefecture: "高知県",
   Latitude: "33.559722",
   Longitude:"133.531111"
},
{
    
   Prefecture: "福岡県",
   Latitude: "33.606389",
   Longitude:"130.417968"
},
{
   
   Prefecture: "佐賀県",
   Latitude: "33.249351",
   Longitude:"130.298792"
},
{
   
   Prefecture: "長崎県",
   Latitude: "32.750040",
   Longitude:"129.867251"
},
{
    
   Prefecture: "熊本県",
   Latitude: "32.789800",
   Longitude:"130.741584"
},
{
   
   Prefecture: "大分県",
   Latitude: "33.238130",
   Longitude:"131.612645"
},
{
    
   Prefecture: "宮崎県",
   Latitude: "31.911034",
   Longitude:"131.423887"
},
{
    
   Prefecture: "鹿児島県",
   Latitude: "31.560171",
   Longitude:"130.558025"
},
{
    
   Prefecture: "沖縄県",
   Latitude: "26.212445",
   Longitude:"127.680922"
}]

//オブジェクト配列を返す
return Datacollection;
}
