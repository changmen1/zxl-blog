// TODO =======埋点hooks=======
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';

interface TrackOptions {
    eventName?: string; // 默认埋点事件名
    extra?: Record<string, any>; // 额外的自定义字段
}

/**
 * ! 页面访问埋点 Hook
 */
const usePageTracking = (options?: TrackOptions) => {
    const location = useLocation();
    const enterTimeRef = useRef<number>(Date.now());
    useEffect(() => {
        // 进入页面时记录时间
        enterTimeRef.current = Date.now();
        console.groupCollapsed(`%cusePageTracking  %c页面进入埋点 ${dayjs(enterTimeRef.current).format('YYYY-MM-DD HH:mm:ss')}`,
            'color:white; background: blue; padding: 2px 6px; border-radius: 4px;font-weight: bold;margin-right:20px',
            'color: black; background: pink; padding: 2px 6px; border-radius: 4px;font-weight: bold'
        );
        console.log(`%c进入路径：`, 'color: yellow;', location.pathname);
        console.log('%c开始时间：', 'color: yellow;', dayjs(enterTimeRef.current).format('YYYY-MM-DD HH:mm:ss'));
        console.groupEnd();

        return () => {
            const leaveTime = Date.now();
            const duration = Math.floor((leaveTime - enterTimeRef.current) / 1000);
            const data = {
                event: options?.eventName || '普通事件',
                path: location.pathname,
                enterTime: dayjs(enterTimeRef.current).format('YYYY-MM-DD HH:mm:ss'),
                leaveTime: dayjs(leaveTime).format('YYYY-MM-DD HH:mm:ss'),
                duration: duration + 's',
                ...options?.extra,
            };
            console.groupCollapsed(`%cusePageTracking  %c页面离开埋点 ${dayjs(leaveTime).format('YYYY-MM-DD HH:mm:ss')}`,
                'color:white; background: blue; padding: 2px 6px; border-radius: 4px;font-weight: bold;margin-right:20px',
                'color: black; background: pink; padding: 2px 6px; border-radius: 4px;font-weight: bold'
            );
            console.log('%c事件：', 'color: yellow;', data.event);
            console.log('%c离开路径：', 'color: yellow;', data.path);
            console.log('%c开始时间：', 'color: yellow;', data.enterTime);
            console.log('%c结束时间：', 'color: yellow;', data.leaveTime);
            console.log('%c持续时间：', 'color: yellow;', data.duration);
            console.log('%c备注：', 'color: yellow;', options?.extra);
            console.groupEnd();
        };
    }, [location.pathname]);
};

/**
 * 
 * ! 事件成功埋点-当前时间点
 * @param env 事件
 */
const useLoadingComplete = (env: string) => {
    /**当前时间 */
    const date = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    console.log(
        `%cINFO%c${env}%c${date}`,
        'color: white; background: green; padding: 2px 6px; border-radius: 4px;font-size:20px;margin-right:10px',
        'color: white; background: green; padding: 2px 6px; border-radius: 4px;font-size:20px;margin-right:10px',
        'color: white; background: green; padding: 2px 6px; border-radius: 4px;font-size:20px',
    );
}

/**
 * ! 程序初始化
 */
const useInit = () => {
    /**
     * 埋点hooks描述表格
     */
    const data = [
        { name: "useInit", value: "初始化加载" },
        { name: "useLoadingComplete", value: "记录特定事件埋点" },
        { name: "usePageTracking", value: "页面访问埋点" },
        { name: "useFingerprintJS", value: "浏览器指纹" }
    ];
    /**
     * 源码地址
     */
    const github = 'https://github.com/changmen1'
    const githubProject = 'https://github.com/changmen1/zxl-blog'
    console.log(
        `%c我的github地址:${github}`,
        'color: white; background: blue; padding: 2px 6px; border-radius: 4px;font-size:20px'
    );
    console.log(
        `%c源码地址:${githubProject}`,
        'color: white; background: blue; padding: 2px 6px; border-radius: 4px;font-size:20px'
    );
    console.log(
        `%c项目埋点信息梳理`,
        'color: black; background: pink; padding: 2px 6px; border-radius: 4px;font-size:20px'
    );
    const display = data.map(item => ({ 埋点名称: item.name, 描述: item.value }));
    console.table(display);
}

export { usePageTracking, useLoadingComplete, useInit };
