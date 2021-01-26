// 모든 이미지 load
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  const images = importAll(
    require.context("../img", false, /\.(png|jpe?g|svg)$/)
  );
  
  // css 파일 로드
  import "../css/reset.css";
  