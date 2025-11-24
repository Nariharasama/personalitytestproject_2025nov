import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {InfoOutline} from "@mui/icons-material";
import {Button} from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import {useRouter} from "next/navigation";


export default function Home() {
    const router = useRouter();
    return (
        <div className={"min-h-screen w-full flex items-center justify-center flex-col gap-4"}>
            <text className={"font-['Noto_Sans_SC'] font-bold text-[24px] w-full h-[40px] text-center"}>测试标题</text>
            <text className={"font-['Noto_Sans_SC'] font-normal text-[10px] w-[280px] text-center"}>测试说明文本测试说明文本测试说明文本测试说明文本测试说明文本测试说明文本</text>
            <text className={"font-['Noto_Sans_SC'] font-thin text-[10px] w-[280px] text-center text-main"}>测试不会采集任何个人数据，所有数据在关闭页面后会即刻注销</text>
            <div className={"w-[280px] m-h-[48px] flex items-center outline-main outline-1 p-2 rounded-[2px] gap-2"}>
                    <InfoOutlinedIcon color={'primary'} />
                    <div className={"flex flex-col h-[30px] align-middle justify-center"}>
                        <text className={"font-['Noto_Sans_SC'] font-medium text-[10px] h-[15px]"}>测试说明</text>
                        <text className={"font-['Noto_Sans_SC'] font-normal text-[10px] h-[14px]"}>测试题数：40 预计用时：5分钟</text>
                    </div>
            </div>
            <Button className={"w-[280px] font-['Noto_Sans_SC'] font-bold text-[16px]"} endIcon={<ChevronRightOutlinedIcon/>} variant={"contained"}>前往测试</Button>
        </div>
    );
}
