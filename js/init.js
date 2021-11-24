// APIキーの設定
const APPLICATION_KEY = "4f27a8b94cc02d3c3568097927364eac6ccad32b05ca09cb8023b9b1e3a5df65";
const CLIENT_KEY = "dfcb8161c8fa59683c1835b3f303f5060e3c88ef9fb3cb7977b565bf792d37c3";

// タイマー設定
let countTimer = 13;
// タップ回数カウンター
let counter = 0;
// タイマーエレメント
const countDown = document.getElementById('countDown');
// タップ可否設定（フラグ）
let tapFlag = false;
// スコア表示エレメント
const score = document.getElementById("score");
// メイン画面エレメント
const main = document.getElementById("main");
const startButton = document.getElementById("startButton");
// ランキング表示関連エレメント
const rankButton = document.getElementById("rankButton");
const ranking = document.getElementById("ranking");
