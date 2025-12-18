"use client";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { questions, results } from "@/app/c4r3e/questionsdata";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Test() {
  const [status, setStatus] = useState("start");
  const full = 20;
  const [currentId, setCurrentId] = useState(1);
  const currentQuestion = questions.find((q) => q.id === currentId);
  const [answers, setAnswers] = useState(Array(full).fill(0));

  return (
    <div
      className={
        "min-h-screen w-full flex items-center justify-center flex-col gap-2"
      }
    >
      {status === "start" && (
        <StartPage onclick={() => setStatus("answering")} full={full} />
      )}

      {status === "answering" && (
        <Questions
          id={currentId}
          full={full}
          handleNext={(selected) => {
            setAnswers((prev) => {
              const updated = [...prev];
              updated[currentId - 1] = selected;
              return updated;
            });
            setCurrentId((prev) => prev + 1);
          }}
          handlePre={() => setCurrentId((prev) => prev - 1)}
          handleOver={() => setStatus("over")}
          content={currentQuestion}
          currentAnswer={answers[currentId - 1]}
        />
      )}

      {status === "over" && <Over resultId={getResultId(answers)} />}
    </div>
  );
}

export function StartPage({ onclick, full = 100 }) {
  return (
    <div
      className={
        "h-full w-full flex items-center justify-center flex-col gap-1"
      }
    >
      <StarOutlinedIcon fontSize="large" color={"primary"} />
      <span
        className={
          "font-['Noto_Sans_SC'] font-bold text-[24px] w-full h-[30px] text-center"
        }
      >
        职业方向探索测试
      </span>
      <span
        className={
          "font-['Noto_Sans_SC'] font-bold text-[16px] w-[280px] text-center text-main"
        }
      >
        Career Ability Exploration
      </span>
      <div
        className={
          "w-[280px] items-center justify-center flex-col p-[10px] shadow-lg flex rounded-[4px] gap-1 m-[4px] hover:shadow-xl"
        }
      >
        <BarChartOutlinedIcon color={"primary"} />
        <span
          className={
            "font-['Noto_Sans_SC'] font-normal text-[12px] text-center w-full"
          }
        >
          专业解析
        </span>
        <span
          className={
            "font-['Noto_Sans_SC'] font-normal text-[10px] text-center w-full text-lightblack"
          }
        >
          解锁星盘奥秘，精准定位职业方向
          <br />
          为你的职场选择提供参考。
        </span>
      </div>
      <div
        className={
          "w-[280px] items-center justify-center flex-col p-[10px] shadow-lg flex rounded-[4px] gap-1 m-[4px] hover:shadow-xl"
        }
      >
        <ExploreOutlinedIcon color={"primary"} />
        <span
          className={
            "font-['Noto_Sans_SC'] font-normal text-[12px] text-center w-full"
          }
        >
          自我探索
        </span>
        <span
          className={
            "font-['Noto_Sans_SC'] font-normal text-[10px] text-center w-full text-lightblack"
          }
        >
          依托星盘解析，帮你挖掘职业潜能
          <br />
          助你找到适配的发展方向
        </span>
      </div>
      <div
        className={
          "w-[280px] items-center justify-center flex-col p-[10px] shadow-lg flex rounded-[4px] gap-1 m-[4px] hover:shadow-xl"
        }
      >
        <ArrowOutwardIcon color={"primary"} />
        <span
          className={
            "font-['Noto_Sans_SC'] font-normal text-[12px] text-center w-full"
          }
        >
          实用导向
        </span>
        <span
          className={
            "font-['Noto_Sans_SC'] font-normal text-[10px] text-center w-full text-lightblack"
          }
        >
          透过星盘的方式，帮你剖析职业适配度
          <br />
          明晰未来职场前行方向
        </span>
      </div>
      <div
        className={
          "w-[280px] m-h-[64px] flex items-center outline-main outline-1 p-2 rounded-[2px] gap-2"
        }
      >
        <InfoOutlinedIcon color={"primary"} />
        <div className={"flex flex-col align-middle justify-center"}>
          <span className={"font-['Noto_Sans_SC'] font-medium text-[12px]"}>
            测试说明
          </span>
          <span className={"font-['Noto_Sans_SC'] font-normal text-[12px] "}>
            测试题数：{full} 预计用时：{full / 5}分钟
          </span>
        </div>
      </div>
      <Button
        className={"w-[280px] font-['Noto_Sans_SC'] font-bold text-[16px]"}
        endIcon={<ChevronRightOutlinedIcon />}
        variant={"contained"}
        onClick={onclick}
      >
        前往测试
      </Button>
      <span
        className={
          "font-['Noto_Sans_SC'] font-normal text-[10px] w-[280px] text-center "
        }
      >
        测试不会采集任何个人数据，所有数据在关闭页面后会即刻注销
      </span>
    </div>
  );
}

function Questions({
  id = 0,
  full = 100,
  handleNext,
  handlePre,
  handleOver,
  content,
  currentAnswer,
}) {
  const [answerId, setAnswerId] = useState(0);

  useEffect(() => {
    setAnswerId(currentAnswer);
  }, [id, currentAnswer]);

  return (
    <div
      className={
        "h-full w-full flex items-center justify-center flex-col gap-1.5"
      }
    >
      <div
        className={"h-[40px] w-[240px] flex items-center justify-center gap-1"}
      >
        <span
          className={
            "font-['Noto_Sans_SC'] font-bold text-[10px] w-[60px] text-center"
          }
        >
          第{id}/{full}题
        </span>
        <div className={"w-[120px] items-center justify-center"}>
          <LinearProgress
            variant="determinate"
            value={(100 * id - 100) / full}
          />
        </div>
        <span
          className={
            "font-['Noto_Sans_SC'] font-bold text-[10px] w-[50px] text-center"
          }
        >
          {(100 * id - 100) / full}%
        </span>
      </div>

      <span
        className={
          "font-['Noto_Sans_SC'] font-normal text-[14px] w-[280px] text-main h-[60px] text-center"
        }
      >
        请想象你正处于以下情景，你会如何选择？
      </span>
      <span
        className={
          "font-['Noto_Sans_SC'] font-bold text-[16px] text-center w-[280px]"
        }
      >
        {content.question}
      </span>

      <div
        className={"w-[280px] flex items-center justify-center flex-col gap-1"}
      >
        {content.answers.map((answer) => (
          <div
            key={answer.value}
            className={
              "w-[280px] h-[60px] items-center justify-start rounded-sm " +
              "border-[1px] border-gray-300 bg-white flex cursor-pointer"
            }
            onClick={() => {
              answerId === answer.value
                ? setAnswerId(0)
                : setAnswerId(answer.value);
            }}
          >
            <Checkbox checked={answerId === answer.value} size={"medium"} />
            <span className={"font-['Noto_Sans_SC'] font-normal text-[12px]"}>
              {answer.label}
            </span>
          </div>
        ))}
      </div>

      <div className={"flex w-[280px] items-center justify-center"}>
        {id > 1 && (
          <Button
            size="medium"
            variant={"outlined"}
            endIcon={<ChevronRightOutlinedIcon />}
            className={"font-['Noto_Sans_SC'] font-bold text-[18px]"}
            onClick={() => handlePre()}
          >
            上一题
          </Button>
        )}

        <div className={"flex-grow"} />

        {id === full ? (
          answerId === 0 ? (
            <Button
              size="medium"
              variant={"outlined"}
              endIcon={<ChevronRightOutlinedIcon />}
              className={"font-['Noto_Sans_SC'] font-bold text-[18px]"}
              disabled
            >
              查看结果
            </Button>
          ) : (
            <Button
              size="medium"
              variant={"outlined"}
              endIcon={<ChevronRightOutlinedIcon />}
              className={"font-['Noto_Sans_SC'] font-bold text-[18px]"}
              onClick={() => handleOver()}
            >
              查看结果
            </Button>
          )
        ) : answerId === 0 ? (
          <Button
            size="medium"
            variant={"outlined"}
            endIcon={<ChevronRightOutlinedIcon />}
            className={"font-['Noto_Sans_SC'] font-bold text-[18px]"}
            disabled
          >
            下一题
          </Button>
        ) : (
          <Button
            size="medium"
            variant={"outlined"}
            endIcon={<ChevronRightOutlinedIcon />}
            className={"font-['Noto_Sans_SC'] font-bold text-[18px]"}
            onClick={() => handleNext(answerId)}
          >
            下一题
          </Button>
        )}
      </div>

      <span className={"font-['Noto_Sans_SC'] font-normal text-[10px] "}>
        请勿关闭或刷新页面以避免丢失当前答题进度
      </span>
    </div>
  );
}

function getResultId(arr) {
  const count = { 1: 0, 2: 0, 3: 0, 4: 0 };

  arr.forEach((num) => {
    if (num >= 1 && num <= 4) {
      count[num]++;
    }
  });

  const maxKey = Object.entries(count).reduce((a, b) =>
    a[1] > b[1] ? a : b,
  )[0];

  return Number(maxKey);
}

function Over({ resultId }) {
  const result = results.find((q) => q.id === resultId);
  if (!result) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <span className="text-red-500 text-sm">
          结果生成失败，请返回重新测试。
        </span>
      </div>
    );
  }

  return (
    <div
      className={
        "h-full w-full flex items-center justify-center flex-col gap-1.5"
      }
    >
      <span
        className={
          "font-['Noto_Sans_SC'] font-bold text-[24px] w-full h-[40px] text-center"
        }
      >
        情感模式测试报告
      </span>

      <span
        className={
          "font-['Noto_Sans_SC'] font-bold text-[12px] w-[280px] text-center"
        }
      >
        您的职业模式为:
      </span>
      <span
        className={
          "font-['Noto_Sans_SC'] font-bold text-[10px] w-[280px] text-main text-center"
        }
      >
        {result.resultTitle}
      </span>

      <span
        className={
          "font-['Noto_Sans_SC'] font-normal text-[12px] w-[280px] text-center"
        }
      >
        {result.result[0]}
      </span>
      <span
        className={
          "font-['Noto_Sans_SC'] font-normal text-[12px] w-[280px] text-center"
        }
      >
        {result.result[1]}
      </span>
      <span
        className={
          "font-['Noto_Sans_SC'] font-normal text-[12px] w-[280px] text-center"
        }
      >
        {result.result[2]}
      </span>

      <div className={"h-[20px]"} />

      <span
        className={
          "font-['Noto_Sans_SC'] font-normal text-[12px] w-[280px] text-main text-center"
        }
      >
        以上结果由您刚才的作答生成，如需保存请截屏，关闭或刷新页面会丢失结果
      </span>
    </div>
  );
}
