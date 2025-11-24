'use client'
import {Button, Card} from "@mui/material";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import {useRouter} from "next/navigation";

export default function SelectionCard({name='测试名称',subtitle="副标题",text='Please input the description of the test',url=''}){
    const router = useRouter();
    return(
        <Card className={'w-[280px] flex flex-col min-h-[144px] items-center justify-center p-[12px]'}>
            <div className={'w-full flex h-full grow items-center justify-center flex-col'}>
                <text className={"font-['Noto_Sans_SC'] font-bold text-[18px] w-full h-[24px]"}>
                    {name}
                </text>
                <text className={"font-['Noto_Sans_SC'] font-normal text-[12px] w-full h-[24px] text-lightblack"}>
                    {subtitle}
                </text>
                <text className={"font-['Noto_Sans_SC'] font-normal text-[10px] w-full h-[24px]"}>
                    {text}
                </text>
            </div>
            <div className={'flex w-full items-center justify-start'}>
                <Button size="small" variant={'outlined'} endIcon={<ChevronRightOutlinedIcon/>} className={"font-['Noto_Sans_SC'] font-bold text-[18px]"} onClick={() => {
                    router.push(url)
                }}>前往测试</Button>
            </div>
        </Card>
    )
}