reearth.ui.show(`
  <style>

    html,body {
      margin: 0;
      width:100%;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }
    #wrapper {
      height: 100%;
      border-radius: 1px;
      width:100%;
    }
    #header {
      background: white;
      text-align: center;
      color: #00BEBE;
      padding:14.5px 48px 14.5px;
      text-align:center;
    }
    .title{
      font-size:14px;
    }
    p{
      display:inline-block;
    }

#contents-wrapper{
  padding:10px 0px 10px;
  background:#F0F0F0;
}
#headIcon{
  display:block;
  object-fit: contain;
}
hr{
  border:1px solid rgba(0,0,0,0.03);
}

.location-wrapper{
  margin:10px 0px
}

.btn{
  margin:auto;
  width:100%;
  color:#fff;
  background: #00BEBE;
  border:1px solid #01ABAB;
  height:32px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
}

.btn-location{
  width:32px;
  height:32px;
  background:#FFF;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 2px;
}

#inputXY{
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  height:26px;
  width:200px;
}

.btn:active{
  background: #01ABAB;
}

.tab_class {
  height: 50px;
  background-color: rgba(250, 250, 250, 1);
  line-height: 50px;
  font-size: 15px;
  text-align: center;
  display: block;
  float: left;
  order: -1;
  border:1px solid rgba(240, 240, 240, 1);
}

.content-area {
  width: auto;
  margin: auto;
  flex-wrap: wrap;
  display: flex;
  padding:0px 0px;
}

input[name="tab_name"] {
  display: none;
}
 
input:checked + .tab_class {
  background-color: #FFF;
  color: #00BEBE;
  border:1px solid #FFF;
}



#tab2 + .tab_class{
  width: calc(100%*0.3);
  margin:0px 6px;
}

#tab3 + .tab_class{
  width: calc(100%*0.6);
  margin-right:6px;
}

.contents-box{
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin:10px 0px;
  overflow:scroll;
  width:250px;
}

.contents-head{
  padding:8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  margin-right:20px;
}

.content-icon{
  display:inline-block;
}
.input-wrapper1{
  margin-left:10px;
}

.contents{
  padding:4px 24px 4px;
}
.info{
  margin-top:8px;
}
.content_class {
  display: none;
  width: 100%;
  background-color:#FFF;
  padding:10px 24px 24px;
}

.table-conttents{
  height:200px;
  overflow:scroll;
  padding:4px 10px 4px;
  white-space: nowrap;
}

.tableNo{
  display:inline-block;
  width:30px;
}
.point-no{
  width:100px;
   display:inline-block;
}
.point-name{
   display:inline-block;
}

#spantime{
  font-size:20px;
  margin:0px 10px;
}
 
input:checked + .tab_class + .content_class {
  display: block;
}


.close-btn{
  width:32px;
  height:32px;
  padding:2.4px;
  font-size:16px;
  cursor: pointer;
  color:#fff;
  border:1px rgb(0, 190, 190) solod;
  background:rgb(0, 190, 190);
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
  border: 0px solid #d9d9d9;
}

.open-btn{
  display:none;
  width:32px;
  height:32px;
  padding:2.4px;
  font-size:16px;
  cursor: pointer;
  color:#fff;
  border:1px rgb(0, 190, 190) solod;
  background:rgb(0, 190, 190);
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
  border: 0px solid #d9d9d9;
}
 



  </style> 
<body> 
    <button type="button" class="open-btn" style="display: none; border: none;" onclick="openWrapper()"><span role="img" aria-label="menu" class="anticon anticon-menu"><svg viewBox="64 64 896 896" focusable="false" data-icon="menu" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg></span></button>

  <div id="wrapper">
      <div>
      <button type="button" class="close-btn" style="position: absolute; right: 0px; border-radius: 0px;" onclick="openWrapper()"><span role="img" aria-label="close" class="anticon anticon-close"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></button>
    </div>
    <div id="header">
      <p style="text-align:center" >
        <img id="headIcon" src="https://eukarya-inc.github.io/reearth-plugin-shinsuiNavi/img/banner_shinsuinavi.jpg" width="200px" height="50px">
        <span class="title">
        浸水ナビ
        </span>
      </p>
    </div>

    <div id ="contents-wrapper">
      <div class="content-area">
        <!--
          <input type="radio" name="tab_name" id="tab1" checked>
          <label class="tab_class" for="tab1">タブ1</label>
          <div class="content_class">
            <p>タブ1のコンテンツを表示します</p>
          </div>
        -->
        
        <input type="radio" name="tab_name" id="tab2" checked>
        <label class="tab_class" for="tab2">破堤点選択</label>
        <div class="content_class">
          
          <div class="content-input content">
            <span">①降雨規模の選択</span>

            <div class="input-wrapper1">
              <select name="rangelayer" id="level-select" onchange="checkRangeLayer()">
                <option value="L2">L2:想定最大規模</option>
                <option value="L1">L1:計画規模</option>
                <option value="L1b">L1b:降雨規模未区分</option> 
              </select>
              <div class="location-wrapper">
                <input type="checkbox" id="check-rangelayer" onclick="checkRangeLayer()" checked>
                
                <span">検索可能範囲を表示</span>

              </div>
            </div> 

            <hr>
            <div>
              <span">②地点を選択</span>
              <p style="font-size:3px; margin:0px 10px;">下のアイコンをクリックし、マップをダブルクリックすると、座標値を取得します。</p>
            
              <div class="location-wrapper">
                <button class="btn-location" onclick="getLocation()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12.5 14H9.40874C9.92883 13.5364 10.4193 13.0406 10.8773 12.5156C12.5931 10.5424 13.5 8.46228 13.5 6.5C13.5 5.04131 12.9205 3.64236 11.8891 2.61091C10.8576 1.57946 9.45869 1 8 1C6.54131 1 5.14236 1.57946 4.11091 2.61091C3.07946 3.64236 2.5 5.04131 2.5 6.5C2.5 8.46228 3.40692 10.5424 5.12268 12.5156C5.58068 13.0406 6.07117 13.5364 6.59127 14H3.5C3.36739 14 3.24021 14.0527 3.14645 14.1464C3.05268 14.2402 3 14.3674 3 14.5C3 14.6326 3.05268 14.7598 3.14645 14.8536C3.24021 14.9473 3.36739 15 3.5 15H12.5C12.6326 15 12.7598 14.9473 12.8536 14.8536C12.9473 14.7598 13 14.6326 13 14.5C13 14.3674 12.9473 14.2402 12.8536 14.1464C12.7598 14.0527 12.6326 14 12.5 14ZM8.00002 4.5C8.39558 4.5 8.78226 4.6173 9.11116 4.83706C9.44005 5.05682 9.6964 5.36918 9.84777 5.73463C9.99915 6.10009 10.0388 6.50222 9.96159 6.89018C9.88442 7.27814 9.69393 7.63451 9.41423 7.91421C9.13452 8.19392 8.77816 8.3844 8.3902 8.46157C8.00223 8.53874 7.6001 8.49913 7.23465 8.34776C6.8692 8.19638 6.55684 7.94004 6.33708 7.61114C6.11731 7.28224 6.00002 6.89556 6.00002 6.5C6.00001 6.23736 6.05174 5.97728 6.15225 5.73463C6.25276 5.49198 6.40008 5.2715 6.5858 5.08578C6.77151 4.90006 6.99199 4.75274 7.23465 4.65224C7.4773 4.55173 7.73737 4.5 8.00002 4.5V4.5Z" fill="black"/>
                  </svg>
                </button>
                <input type="text" id ="inputXY">
              </div>
            </div>
           
            <hr>
            <span>③破堤点の選択</span>
              
              <div align="center">
                <input type="button" id="btn-get-bp" value="破堤点の取得" align="center" onclick="getBP()">
                <p id ="run_text" style="margin:0px 10px; display:none"><font color="red" size="1">破堤点取得中。しばらくお待ちください。</font></p>
                <p style="font-size:3px; margin:0px 10px;">（破堤点の取得には時間がかかる場合があります。）</p>
                
                <p id="alertText" style="font-size:3px; margin:0px 10px; display:none;"><font color="red">座標を入力してください。</font></p>
              </div>
            <div class="contents-box">

              <div class="table-conttents" id="BP-listTable">
                <table id="BP-table">
                  <thead>
                    <tr>
                      <td style="width:60px;">
                      </td>
                      <td>
                        <span class="tableNo" style="width:0px; padding:0px;"></span>
                        <div class="point-no">
                          <span>破堤点番号</span>
                        </div>
                        <div class="point-name">
                          <span>河川名</span>
                        </div>
                      </td>
                    </tr>
                  </thead>
                    
                  <tbody id="bplistTbody">
                  </tbody>
                  
                </table>
              </div>
            </div>
              <div align="center">
                <input type="button" value="浸水シミュレーション実行" align="center" id="btn-search" onclick="loadBPTile()" disabled=true>
              </div>
            <hr>
            <div class="contents-box">
              <div class="contents-head">
                <div class="content-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 3.5H14V12C14 12.1326 13.9473 12.2598 13.8535 12.3536C13.7598 12.4473 13.6326 12.5 13.5 12.5H2.5C2.36739 12.5 2.24021 12.4473 2.14645 12.3536C2.05268 12.2598 2 12.1326 2 12V3.5Z" stroke="#00BEBE" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 6.5H14" stroke="#00BEBE" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 9.5H14" stroke="#00BEBE" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.5 6.5V12.5" stroke="#00BEBE" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div style="display:inline-block;">
                  <span>破堤点情報</span>
                </div>
              </div>
              <div>
                <div class="contents">
                  <div class="info" style="display:flex;">
                    <div style="width: 140px; margin-right:10px;">登録河川名</div>
                    <div><span id="info-bpriver" data-oldlyrid></span></div>
                  </div>
                  <div class="info" style="display:flex">
                    <div style="width: 80px;margin-right: 20px;">河口からの距離</div>
                    <div><span id="info-bplocation"></span></div>
                  </div>
                  
                </div>

              </div>
            </div>

              <div align="center">
                <input type="button" value="検索のクリア" align="center" id="btn-clear" onclick="clearContents()">
              </div>
          </div>
        </div>
        <input type="radio" name="tab_name" id="tab3">
        <label class="tab_class" for="tab3">浸水アニメーション</label>

        <div class="content_class">

        <!--
          <div id="animation-btn">
            <input type="button" value="再生">

            <input type="button" value="停止">
          </div>

-->


          
          <div id="bp-name">
            <p id="alertTextbp1" style="font-size:15px; margin:0px 10px;"><font color="red">破堤点を選択してください。</font></p>
            
            <p id="alertTextbp2" style="font-size:15px; margin:0px 10px; display:none"><font color="black">破堤点：</font></p>
            
          </div>
          <div style="margin:10px 0px">
            破堤から<span id="spantime"></span>後
          </div>
          <div>
            <input type="range" id="input-bptime" list="time-list" step="1" data-oldlyrid ="" oninput="changeTime(this)">

            <datalist id="time-list">
            </datalist>
          </div>
          <div>
          <table border="1">
            <thead>
              <tr>
                <th style="text-align:center"  colspan="2">凡例</th>
              </tr>
                <tr>
                    <td style="width:40px;"></td>
                    <td style="text-align:center">浸水深</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td bgcolor="#DC7ADC"></td>
                    <td style="text-align:center">20m ~ </td>
                </tr>
                <tr>
                    <td bgcolor="#F285C9"></td>
                    <td style="text-align:center">10m ~ 20m</td>
                </tr>
                <tr>
                    <td bgcolor="#FF9191"></td>
                    <td style="text-align:center">5m ~ 10m</td>
                </tr>
                <tr>
                    <td bgcolor="#FFB7B7"></td>
                    <td style="text-align:center">3m ~ 5m</td>
                </tr>
                <tr>
                    <td bgcolor="#FFD8C0"></td>
                    <td style="text-align:center">0.5m ~ 3m</td>
                </tr>
                <tr>
                    <td bgcolor="#F7F5A9"></td>
                    <td style="text-align:center"> ~ 0.5m</td>
                </tr>
            </tbody>
          </table>
          </div>


          
          

        </div>
<!--
        <input type="radio" name="tab_name" id="tab4">
        <label class="tab_class" for="tab4">凡例</label>
        <div class="content_class">

          <img id="imgLegend" src="" width="100%" height="100%">
        </div>
-->
      </div>


      <div class="content-input content">
      </div>

      <div class="content-startInfo content">
        
        
      </div>

      <div class="content-routeInfo content">
        
        
      </div>
      
      
      
    </div>
    
  </div>

</body>

<script>

let reearth, layers, stageCZML, riskObj, property;
let expanded = false;


function getLocation(){
  parent.postMessage({ type: "mouseClick" }, "*");
};  
 
function checkRangeLayer(){
  const elemCkeckRangeLayer = document.getElementById("check-rangelayer");
  const elemSelectLevel =  document.getElementById("level-select");
  if (elemCkeckRangeLayer.checked){
    const rangeLebel = elemSelectLevel.value;
    parent.postMessage({
      type: "showRangeLayer",
      lebel: rangeLebel
    }, "*");
  }else{
    parent.postMessage({
      type: "hideRangeLayer"
    }, "*");
  }
};

async function getBP(){
  const xyValue = document.getElementById("inputXY").value;

  if (!xyValue){
    document.getElementById("alertText").style="display:block;"
  }else{

    document.getElementById("alertText").style="display:none;"
    document.getElementById("run_text").style="display:block;"


    document.getElementById('btn-get-bp').disabled = true;
    await refleshBPList(); 
    
  
    let url =  "https://suiboumap.gsi.go.jp/shinsuimap/Api/Public/GetBreakPoint?lon=" + xyValue.split(",")[0] + "&lat=" + xyValue.split(",")[1];
    await fetchData(url).then(d => {
      if (!d) return;
      const folderId = document.getElementById("BP-listTable").dataset.folderId;
      for (let i = 0; i < d.length; i++) {
        const bpMarkerId = addBPmarker(d[i],folderId);
        addBPlist(i,d[i],bpMarkerId);
      }
    document.getElementById('btn-get-bp').disabled = false;
    document.getElementById("run_text").style="display:none;"
    });
  }
  
  
}

async function refleshBPList(){
  
  // reflesh marker folder
  const oldFolder = reearth.layers.findAll(e => e.title ==="_pluginBPFolder");
  if(oldFolder){
    for (i of oldFolder){
      for (j of i.children){
        reearth.layers.hide(j.id);
      }
    };

  }
  
  



  NewFolder = reearth.layers.add({
    extensionId: "",
    isVisible: true,
    title: "_pluginBPFolder",
    children: [],
    tags: [],
  });
  document.getElementById("BP-listTable").dataset.folderId = NewFolder;
  

  // relfesh table
  // table要素を取得
  let tableRef = document.getElementById("BP-table");
  document.querySelector('#bplistTbody').innerHTML="";

   // post message




  return true;

};

 
function addBPlist(no,BP,markerid){

  var add_code0 = '<span class="tableNo">' + no + '</span>' +
  '<input type="radio" name="break-point" id="point' + no +'" onclick = "selectBPRadio(this)"></td>';
  var add_code1 = '<label for="point' + no + '">' +
    '<div class="point-no">' +
    '<span>'+BP.BPName+'</span>' +
    '</div>' +
    '<div class="point-name">' +
    '<span style="white-space:nowrap">'+BP.EntryRiverName+'</span>' +
    '</div>' +
  '</label>';
  


  let tableRef = document.querySelector('#bplistTbody')
  // 表の末尾に行を挿入
  let newRow = tableRef.insertRow(-1);

  // その行の 0 の位置にセルを挿入
  let newCell_0 = newRow.insertCell(0);

  // そのセルにテキストノードを追加
  newCell_0.innerHTML = add_code0;

  // その行の 0 の位置にセルを挿入
  let newCell_1 = newRow.insertCell(1);

  // そのセルにテキストノードを追加
  newCell_1.innerHTML = add_code1;

  let bptime="0";
  for (t of BP.BPTime){
    bptime = bptime + "," + t
  }


  let elemBPselect = document.getElementById('point' + no);
  elemBPselect.dataset.bpname = BP.BPName;
  elemBPselect.dataset.rivername = BP.EntryRiverName;
  elemBPselect.dataset.id = BP.ID;
  elemBPselect.dataset.bplocation = BP.BPLocation;
  elemBPselect.dataset.bplat = BP.BPLat;
  elemBPselect.dataset.bplon = BP.BPLon;
  elemBPselect.dataset.officecode = BP.OfficeCode;
  elemBPselect.dataset.rivercode = BP.RiverCode;
  elemBPselect.dataset.subrivercode = BP.SubRiverCode;
  elemBPselect.dataset.markerid = markerid;
  elemBPselect.dataset.bptime = bptime;
  elemBPselect.dataset.layerid = markerid;

};


function addBPmarker(BP,folderId){

  const tableItem = [{
        "item_title": "破堤点番号",
        "item_datatype": "string",
        "item_datastr": BP.BPName
      },{
        "item_title": "破堤点ID",
        "item_datatype": "string",
        "item_datastr": BP.ID
      },{
        "item_title": "破堤点の位置",
        "item_datatype": "string",
        "item_datastr": BP.BPLocation
      },{
        "item_title": "緯度",
        "item_datatype": "string",
        "item_datastr": BP.BPLat
      },{
        "item_title": "経度",
        "item_datatype": "string",
        "item_datastr": BP.BPLon
      },{
        "item_title": "河川名",
        "item_datatype": "string",
        "item_datastr": BP.EntryRiverName
      },{
        "item_title": "河川コード",
        "item_datatype": "string",
        "item_datastr": BP.RiverCode
      },{
        "item_title": "河川コード枝番",
        "item_datatype": "string",
        "item_datastr": BP.SubRiverCode
      },{
        "item_title": "事業所コード",
        "item_datatype": "string",
        "item_datastr": BP.OfficeCode
      }];
      

  const infoBlock = [{
    "pluginId": "reearth",
    "extensionId": "dlblock",
    "property": {
      "default": {
          "title": "破堤点情報"
      },
      "items": tableItem
    }
  }];

  

  const newBPMarker = reearth.layers.add({
    id:"BP_"+BP.BPName,
    extensionId: "marker",
    type:"marker",
    isVisible: true,
    title: BP.Name,
    property: { 
      default: {
        location:{
          lat: BP.BPLat,
          lng: BP.BPLon
        },
        heightReference:"relative",
        height:15,
        label:true,
        style:"point",
        pointColor:"#0000ff",
        pointOutlineColor:"#fff",
        pointSize:10,
        labelText: BP.BPName,
        labelPosition:"top",
        labelTypography:{
          "fontFamily": null,
          "fontWeight": null,
          "fontSize": 16,
          "color": null,
          "textAlign": null,
          "bold": null,
          "italic": null,
          "underline": null
        }
      }
    },
    infobox: {
      blocks: infoBlock,
      property: {
        default: {
          title:BP.BPName,
          size: "small",
          bgcolor: "#ffffffff",
          typography: {
            "fontFamily": null,
            "fontWeight": null,
            "fontSize": null,
            "color": "#000000",
            "textAlign": null,
            "bold": null,
            "italic": null,
            "underline": null
          }
        }
      }
    },
    tags: [],
  },folderId);
  return newBPMarker;
} 


function selectBPRadio(elem){
  document.getElementById('btn-search').disabled = false;
  document.getElementById('info-bpriver').innerHTML = elem.dataset.rivername;
  document.getElementById('info-bplocation').innerHTML = elem.dataset.bplocation;

  // 選択BPの取得
  const bPointList = document.getElementsByName("break-point");
  const selectBP = Array.from(bPointList).find(radio => radio.checked);
  

    // 新旧レイヤID 
  let oldLyrId = document.getElementById("info-bpriver").dataset.oldlyrid;
  const lyrId = selectBP.dataset.layerid;
  document.getElementById("info-bpriver").dataset.oldlyrid = lyrId;
  

  let lyrLocation = {lat:selectBP.dataset.bplat, lng:selectBP.dataset.bplon};
  
  parent.postMessage({
    type: "selectBP",
    lyrLocation: lyrLocation,
    oldLyrId: oldLyrId,
    lyrId: lyrId
  }, "*");
};


function loadBPTile(){
  const bPointList = document.getElementsByName("break-point");

  // 選択BPの取得
  const selectBP = Array.from(bPointList).find(radio => radio.checked);
  const selectBPofficeCode = selectBP.dataset.officecode;
  const selectLevel = document.getElementById("level-select").value;
  let selectBPrivercode= selectBP.dataset.rivercode;
  const selectBPsubrivercode= selectBP.dataset.subrivercode;
  if (selectBPsubrivercode != "_"){
    selectBPrivercode = selectBPrivercode + selectBPsubrivercode
  }
  const selectBPbpname = selectBP.dataset.bpname;
  const bpurl ="https://suiboumap.gsi.go.jp/shinsuimap/Tile/" + selectBPofficeCode + "/" + selectLevel + "/" + selectBPrivercode + "/" + selectBPbpname + "/" + selectBPbpname + "_" + "00010" + "m/{z}/{x}/{y}.png"; 


  //animation setting
  let bpTime = selectBP.dataset.bptime.split(",");
  let inputTime = document.getElementById("input-bptime");
  inputTime.dataset.bpurl = "https://suiboumap.gsi.go.jp/shinsuimap/Tile/" + selectBPofficeCode + "/" + selectLevel + "/" + selectBPrivercode + "/" + selectBPbpname + "/" + selectBPbpname + "_";
  inputTime.dataset.bptime = selectBP.dataset.bptime;
  inputTime.min = bpTime[0];
  inputTime.max = bpTime.length-1;
  inputTime.value = bpTime[1];


  //rengeのメモリ設定
  let inputTimeList = document.getElementById("time-list");

  clearSelect(inputTimeList);
  for (let i=0; i < bpTime.length; i++){
    let tempValue = (bpTime[i] / bpTime.slice(-1)[0]) * (bpTime.length-1);
    addlist(tempValue,inputTimeList);
  } 


  //タブ切り替え
  document.getElementById("tab3").checked =true;
  inputTime.value=1
  document.getElementById("spantime").innerHTML = bpTime[1] + "分";

  document.getElementById("alertTextbp1").style="display:none";
  document.getElementById("alertTextbp2").style="display:block";
  document.getElementById("alertTextbp2").innerHTML = "破堤点：" + selectBP.dataset.bpname +"(" + selectBP.dataset.rivername + "  " + selectBP.dataset.bplocation + ")";

  

  
  // 新旧レイヤID 
  let oldLyrId = inputTime.dataset.oldlyrid;
  const lyrId = selectBP.dataset.layerid;
  inputTime.dataset.oldlyrid = lyrId;
  let lyrLocation = {lat:selectBP.dataset.bplat, lng:selectBP.dataset.bplon};




  // post message

  parent.postMessage({
    type: "loadBPTile",
    bpTileUrl: bpurl
  }, "*");

};

function addlist(value,selecter){
  //option要素を新しく作る
  const option1 = document.createElement('option');
  //option要素にvalueと表示名を設定
  option1.value = value;
  option1.textContent = value;
  //select要素にoption要素を追加する
  selecter.appendChild(option1);
}


// clear select
function clearSelect(x){
  if (x.hasChildNodes()) {
    while (x.childNodes.length > 0) {
      x.removeChild(x.firstChild)
    }
  }
}


function changeTime(elem){
  let bpTime = elem.dataset.bptime.split(",");

  let spanTime =  bpTime[elem.value];
  console.log(spanTime);

  let spanHour, spanMinute;
    spanHour = Math.floor(spanTime / 60);
    spanMinute = spanTime % 60;
  

  if(spanHour ==0){
    document.getElementById("spantime").innerHTML = spanMinute + "分";
  }else{
    document.getElementById("spantime").innerHTML = spanHour + "時間" + spanMinute + "分";
  }

  let timeValue = ('00000' + bpTime[elem.value]).slice(-5);
  let bpurl =elem.dataset.bpurl + timeValue + "m/{z}/{x}/{y}.png"; 

  

  parent.postMessage({
    type: "loadBPTile",
    bpTileUrl:bpurl
  }, "*");

}


async function fetchData(url) {
  // if (!property) return Promise.resolve();
  return fetch(url).then(r => {
    if (r.ok) return r.json();
  }).then(r => {
    if (!r) return;
    fetchedData = r;
    console.log(r);
    return fetchedData;
  });
};


function clearContents(){
  document.getElementById("check-rangelayer").checked = false;
  document.getElementById("inputXY").value = "";

  //BPリストのリセット
  refleshBPList()
  document.getElementById("btn-search").disabled = true;
  
  //破堤点情報のリセット
  document.getElementById("info-bpriver").innerHTML = "";
  document.getElementById("info-bplocation").innerHTML = "";


  //アニメーションテキストのリセット
  document.getElementById("alertTextbp1").style = "display:block";
  document.getElementById("alertTextbp2").style = "display:none";
  document.getElementById("spantime").innerHTML = "";
  

  //タイムバーrangeのリセット
  let inputTimeList = document.getElementById("time-list");
  clearSelect(inputTimeList);


  // post message

  parent.postMessage({
    type: "clear"
  }, "*");
  
}
 

function openWrapper(){
  let openBtn = document.getElementsByClassName("open-btn")[0];
  let ElemWrapper = document.getElementById("wrapper");
  if(openBtn.style.display == "none"){
    openBtn.style.display = "block"
    ElemWrapper.style.display = "none"
  }else{
    openBtn.style.display = "none"
    ElemWrapper.style.display = "block"
  }
  expanded = !expanded
  parent.postMessage({ type: "resize", expanded }, "*");
};




 

  


  

 function setHeader(){
   if(property.header){
      if(property.header.headIcon && !property.header.headIcon==""){
       document.getElementById("headIcon").src = property.header.headIcon;
      document.getElementById("headIcon").style.display = "inline";
     }else{
       document.getElementById("headIcon").src = "https://eukarya-inc.github.io/reearth-plugin-shinsuiNavi/img/banner_shinsuinavi.jpg";
       
      document.getElementById("headIcon").style.display = "inline";
     }

     if(property.header.title && !property.header.title==""){
       document.getElementsByClassName("title")[0].innerHTML = property.header.title;
     }else{
      document.getElementsByClassName("title")[0].innerHTML = "浸水ナビ";
     }
   }
 }

   

  
  window.addEventListener("message", e => {
    if (e.data.type =="property"){
      if (e.source !== parent) return;
      layers = e.source.reearth.layers.layers;
      reearth = e.source.reearth;
      property = e.data.property;
      console.log(e.data);

      // set BP list folder
      document.getElementById("BP-listTable").dataset.folderId = e.data.folderId;
      

      let elemImg = document.getElementById("imgLegend");
      /*
      if (property.data.legend){
        elemImg.style.display = "block"
        elemImg.setAttribute('src', property.data.legend);
      } else{
        elemImg.style.display = "none"
      }
      */
      setHeader();
      
    }else if(e.data.type =="mousedata"){
      let locateY, locateX;
      let mousedata = e.data.payload;

      locateY = parseFloat(mousedata.lat.toFixed(5));
      locateX = parseFloat(mousedata.lng.toFixed(5));
 
      document.getElementById("inputXY").value=locateX + "," + locateY;
      



    }

  
  }); 


checkRangeLayer()













</script> 

`,
  { width: 300, height: 600 });



 // set BP folder
  const bpFolder = reearth.layers.layers.filter(e => e.title === '_pluginBPFolder');
  let folder
  if (bpFolder === undefined){
  }else{
    for (let i = 0; i < bpFolder.length; i++) {
      for(l of bpFolder[i].children){
        reearth.layers.hide(l.id);
      }
    }
  };

    folder = reearth.layers.add({
      extensionId: "",
      isVisible: true,
      title: "_pluginBPFolder",
      children: [],
      tags: [],
    });





 


reearth.on("update", send);
send();



function send() {
  reearth.ui.postMessage({
    type: "property",
    layers: reearth.layers.layers,
    folderId: folder,
    property: reearth.widget.property
  });
}




 
reearth.on("message", (msg) => {
  
  if (msg.type === "mouseClick") {
    
    reearth.on('doubleclick',(mousedata) => {

      locateY = parseFloat(mousedata.lat.toFixed(5));
      locateX = parseFloat(mousedata.lng.toFixed(5));
 

      const selected = reearth.layers.find(e => e.title === '_selectedPoint');
      if(selected === undefined){
        let startMarker = reearth.layers.add({
          id:"startPoint",
          extensionId: "marker",
          type:"marker",
          isVisible: true,
          title: "_selectedPoint",
          property: { 
            default: {
              location:{
                lat:locateY,
                lng:locateX
              },
              heightReference:"relative",
              height:15,
              label:false,
              style:"point",
              pointColor:"#ff0000",
              pointSize:20,
              labelText: ""
            }
          }
        });
      }else{
        reearth.layers.overrideProperty(selected.id, {
          default: {
            location: {
              lat: locateY,
              lng: locateX
            }
          }
        });
        reearth.layers.show(selected.id);
      }


      reearth.ui.postMessage({ 
        type: "mousedata",
        payload: mousedata
      }, "*");
    })
  }else if(msg.type == "showRangeLayer"){
 
    let tileList = reearth.scene.property.tiles;
    let newTileList = [];
    for (i of tileList){
      if (i.id === "shinsuiRangeTile"){
        tileFlag = true;
      }else{
        newTileList.push(i);
      }
    }
    const newTile = {
      id: "shinsuiRangeTile",
      tile_type: "url",
      tile_url: "https://suiboumap.gsi.go.jp/shinsuimap/Tile/rangelayer/" + msg.lebel + "/{z}/{x}/{y}.png",
      tile_opacity: 0.7
    };
    newTileList.push(newTile);
    reearth.scene.overrideProperty({
      tiles: newTileList
    });



 
  }else if(msg.type == "loadBPTile"){
    let tileList = reearth.scene.property.tiles;



    // load Tile
    let newTileList = [];
    for (i of tileList){
      if (i.id === "shinsuiBPTile"){
        // i.tile_url = msg.bpTileUrl;
        // tileFlag = true;
      }else{
        newTileList.push(i);
      }
    }
    const newTile = {
      id:"shinsuiBPTile",
      tile_type: "url",
      tile_url: msg.bpTileUrl,
      tile_opacity: 0.7
    };
    newTileList.push(newTile);

    
    reearth.scene.overrideProperty({
      tiles: newTileList
    });



 
  }else if(msg.type == "selectBP"){

    if (msg.lyrLocation){

      //zoom to layer
      reearth.camera.flyTo({
          lat: +msg.lyrLocation.lat,          // degrees
          lng: +msg.lyrLocation.lng,            // degrees
          height: 1000
        }, {
          duration:1   // seconds
        });

      
      //change point color
      reearth.layers.overrideProperty(msg.oldLyrId,{
        default:{
          pointColor: "#0000ff"
        }
      });
      reearth.layers.overrideProperty(msg.lyrId,{
        default:{
          pointColor: "#f3f71c"
        }
      });
    }




 
  }else if(msg.type == "hideRangeLayer"){
    let tileList = reearth.scene.property.tiles;
    let newTileList = [];
    for (i of tileList){
      if (i.id === "shinsuiRangeTile"){
        i.tile_url="";
      }else{

        newTileList.push(i);
      } 
    }
    reearth.scene.overrideProperty({
      tiles: newTileList
    });




  }else if(msg.type == "clear"){
    let tileList = reearth.scene.property.tiles;
    let newTileList = [];
    for (i of tileList){
      if (i.id === "shinsuiRangeTile" || i.id === "shinsuiBPTile"){
        i.tile_url="";
      }else{

        newTileList.push(i);
      } 
    }
    reearth.scene.overrideProperty({
      tiles: newTileList
    });

    const selected = reearth.layers.find(e => e.title === '_selectedPoint');
    if(selected != undefined){
      reearth.layers.hide(selected.id);
    }
      // reflesh marker folder
    const oldFolder = reearth.layers.findAll(e => e.title ==="_pluginBPFolder")
    for (i of oldFolder){
      for (j of i.children){
        reearth.layers.hide(j.id);
      }
    };



  }else if (msg.type === "resize") {
    reearth.ui.resize?.(msg.expanded ? 32 : 300, msg.expanded ? 32 : 600, msg.expanded ? undefined : true);
  }
});    