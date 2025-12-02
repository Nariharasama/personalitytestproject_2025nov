import SelectionCard from "@/app/SelectionCard";
import Divider from '@mui/material/Divider';

export default function Home() {
  return (
    <div className={"min-h-screen w-full flex items-center justify-center flex-col gap-4"}>
      <span className={"font-['Noto_Sans_SC'] font-bold text-[12px] w-[240px] h-[24px] text-center"}>请选择您想参与的测试</span>
      <SelectionCard name={"情感模式探索测试"} subtitle={"基于月亮、金星、火星及7宫能量"} text={""} url={"../Test1"}/>
      <SelectionCard/>
      <SelectionCard/>
      <Divider/>
        <span className={"font-['Noto_Sans_SC'] font-thin text-[10px] w-[280px] text-center text-lightblack"}>测试不会采集任何个人数据，所有数据在关闭页面后会即刻注销</span>
    </div>
  );
}
