import SelectionCard from "@/app/SelectionCard";
import Divider from "@mui/material/Divider";

export default function Home() {
  return (
    <div
      className={
        "min-h-screen w-full flex items-center justify-center flex-col gap-4"
      }
    >
      <span
        className={
          "font-['Noto_Sans_SC'] font-bold text-[24px] w-[240px] h-[32px] text-center"
        }
      >
        内部测试主页
      </span>
      <SelectionCard
        name={"情感模式探索测试"}
        subtitle={"基于月亮、金星、火星及7宫能量"}
        text={""}
        url={"/rhsp2j"}
      />
      <SelectionCard />
      <SelectionCard />
      <Divider />
      <span
        className={
          "font-['Noto_Sans_SC'] font-thin text-[16px] w-[280px] text-center text-lightblack"
        }
      >
        注：不要把这个网址给用户
      </span>
    </div>
  );
}
