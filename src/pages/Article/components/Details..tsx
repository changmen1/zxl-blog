/*
 * Author: zxl
 * Created on Thu Jul 10 2025
 * 个人博客 - 1.0
 * Copyright (c) 2025 Dv
 */

import { useEffect, useState, type FC } from "react";
// import bg from "@/assets/ArticleDeatils/bg.png"
import Reward from "@/pages/components/reward";
import { getBlogList } from "@/common/article/service";
import { useLocation } from "react-router-dom";
import markdownit from 'markdown-it';
import markdownItTable from 'markdown-it-multimd-table'; // 处理表格的插件
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
import style from "./ArticleDeatils.module.less"

const ArticleDeatils: FC = () => {
    const location: any = useLocation();
    const id = location.state
    const [mds, setMds] = useState<string>()

    const Init = async () => {
        const { data } = await getBlogList({
            id
        })
        setMds(data.rows[0].contentMd)
    }

    const md: any = markdownit({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) { }
            }
            return '';
        },
    }).use(markdownItTable);

    useEffect(() => {
        Init()
    }, [id])

    return (
        <div className="pt-10"
            style={{
                // backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                backgroundAttachment: 'scroll'
            }}
        >
            <div className="w-[960px] block ml-auto mr-auto pb-5">
                {
                    mds &&
                    <div className={style['markdown-body']}>
                        <div dangerouslySetInnerHTML={{ __html: md.render(mds) }} />
                    </div>
                }
                <div className="w-[960px] bg-[oklch(65.6%_0.241_354.308/1)] flex items-center p-4">
                    <div className="flex-1 text-yellow-300">
                        <p className="mb-3 text-lg font-semibold">💖 喜欢这篇文章吗？</p>
                        <p className="mb-0 text-sm opacity-90">
                            如果它对你有帮助，请考虑打赏支持一下作者～
                            你的鼓励是我持续创作的动力！
                        </p>
                    </div>
                    <Reward />
                </div>
            </div>
        </div>
    )
}

export default ArticleDeatils;