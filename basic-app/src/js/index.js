// 모든 Asset load
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
  
  const book = importAll(require.context("../book", false, /book[0-9]\.html$/));
  
  // css 파일 로드
  import "../css/reset.css";
  