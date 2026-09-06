import { img } from "../utils/getImageUrl";

// ─── روابط التواصل الاجتماعي ───────────────────────────
// ⚠️ حط رابط حسابك بين علامتي التنصيص لكل منصة.
// أي رابط بيضل فاضي ("") بتنخفي أيقونته تلقائياً من الفوتر،
// فما بيضل ولا رابط مكسور بالموقع.
//
// مثال:
//   { name: "LinkedIn", url: "https://www.linkedin.com/in/ghiath-mousa", icon: ... }

const socialLinks = [
  { name: "Facebook", url: "", icon: img("facebook.svg") },
  { name: "Twitter", url: "", icon: img("twitter.svg") },
  { name: "LinkedIn", url: "", icon: img("linkedin.svg") },
  { name: "Instagram", url: "", icon: img("instagram.svg") },
];

// بس الروابط اللي إلها URL فعلي
export const activeSocialLinks = socialLinks.filter((link) => link.url.trim() !== "");

export default socialLinks;
