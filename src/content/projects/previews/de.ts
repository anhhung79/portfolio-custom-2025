import thumbnailSolaso from "../../../assets/thumbnails/solaso.png";
import thumbnailBinggereat from "../../../assets/thumbnails/binggereat.png";
import thumbnailPoloZava from "../../../assets/thumbnails/polo_zava.png";
import thumbnailMovara from "../../../assets/thumbnails/movara.png";
import thumbnailMarieJapan from "../../../assets/thumbnails/marie_japan.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Marie Japan",
    slug: "streakon",
    thumbnail: thumbnailMarieJapan,
    description: "Kênh TikTok & Mua sắm mỹ phẩm chính hãng",
  },
  {
    title: "Solaso",
    slug: "cubewar",
    thumbnail: thumbnailSolaso,
    description: "Nền tảng thương mại điện tử trực quan",
  },
  {
    title: "BINGGEREAT MILK",
    slug: "quibbo",
    thumbnail: thumbnailBinggereat,
    description: "Thương hiệu thực phẩm và đồ uống quốc dân Hàn Quốc",
  },
  {
    title: "MOVARA",
    slug: "sharkie",
    thumbnail: thumbnailMovara,
    description: "Thời trang thể thao chuyên dụng dành cho nữ",
  },
  {
    title: "POLO ZAVA",
    slug: "pokedex",
    thumbnail: thumbnailPoloZava,
    description: "Sản xuất & gia công áo polo cá sấu cotton",
  },
] as const satisfies ProjectPreview[];
